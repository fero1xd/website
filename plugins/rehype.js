import { visit } from "unist-util-visit";

export default function rehypeParseCodeBlocks() {
  // @ts-expect-error -- unified supplies the typed syntax tree at runtime.
  return (tree) => {
    visit(tree, "element", (node, _nodeIndex, parentNode) => {
      if (node.tagName === "code") {
        if (node.properties.className) {
          parentNode.properties.language =
            node.properties.className[0]?.replace(/^language-/, "");
        }
      }
    });
  };
}

