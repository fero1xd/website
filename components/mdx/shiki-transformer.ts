import { DecorationItem, ShikiTransformer } from "shiki";

const DECORATIONS_PREFIX = "// @decorations:";
const HL_COMMENT_RE = /\/\/\s*\[!code hl:(\d+)\]/;

export const highlightTransformer: ShikiTransformer = {
  name: "highlight-transformer",
  preprocess(code, options) {
    options.decorations ||= [];

    // --- Handle // @decorations:[...] on the first line ---
    const firstLineEnd = code.indexOf("\n");
    const firstLine = firstLineEnd === -1 ? code : code.slice(0, firstLineEnd);

    if (firstLine.startsWith(DECORATIONS_PREFIX)) {
      const json = firstLine.slice(DECORATIONS_PREFIX.length);
      const parsed: DecorationItem[] = JSON.parse(json);
      options.decorations.push(...parsed);
      code = firstLineEnd === -1 ? "" : code.slice(firstLineEnd + 1);
    }

    // --- Handle // [!code hl:N] on any line ---
    const lines = code.split("\n");
    const cleanedLines: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(HL_COMMENT_RE);

      if (match) {
        const count = parseInt(match[1], 10);
        const startLine = cleanedLines.length;

         options.meta = {
          __raw: JSON.stringify(Array.from({ length: count }, (_, i) => i + startLine + 1))
        }

        cleanedLines.push(lines[i].replace(HL_COMMENT_RE, "").trimEnd());
      } else {
        cleanedLines.push(lines[i]);
      }
    }



    return cleanedLines.join("\n");
  },
  line(hast, line) {
    const span = hast.children[0];
    if (!span || span.type !== 'element' || span.tagName !== 'span') return;
    const text = span.children[0];
    if (!text || text.type !== 'text') return;
    if (text.value.trim() === '') return

    if (JSON.parse(this.options.meta?.__raw ?? "[]").includes(line)) {
      this.addClassToHast(hast, "highlighted-line");
    }
  },
};

