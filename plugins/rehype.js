import { visit } from "unist-util-visit";

export default function rehypeParseCodeBlocks() {
  // @ts-expect-error
  return (tree) => {
    visit(tree, "element", (node, _nodeIndex, parentNode) => {
      if (node.tagName === "code") {
        if (node.properties.className) {
          parentNode.properties.language =
            node.properties.className[0]?.replace(/^language-/, "");
        }
        console.log(node);
        console.log(parentNode);
      }
    });
  };
}

