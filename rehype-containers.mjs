import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to convert :::type[title]\ncontent\n::: syntax to container divs
 * This runs after HTML is generated
 */
export default function rehypeContainers() {
  return (tree) => {
    const nodesToConvert = [];
    
    // Find all paragraphs with container start markers
    visit(tree, 'element', (node, index, parent) => {
      if (!parent) return;
      
      if (node.tagName === 'p' && node.children?.length > 0) {
        // Get text content
        let textContent = '';
        for (const child of node.children) {
          if (child.type === 'text') {
            textContent += child.value;
          }
        }
        
        textContent = textContent.trim();
        
        // Check for container marker
        const match = textContent.match(/^:::(\w+)(?:\[(.*?)\])?$/);
        if (match) {
          nodesToConvert.push({
            node,
            parent,
            index: parent.children.indexOf(node),
            isStart: true,
            type: match[1],
            title: match[2]
          });
        } else if (textContent === ':::') {
          nodesToConvert.push({
            node,
            parent,
            index: parent.children.indexOf(node),
            isEnd: true
          });
        }
      }
    });
    
    // Process start markers (work backwards to avoid index issues)
    const startMarkers = nodesToConvert.filter(m => m.isStart).reverse();
    
    for (const marker of startMarkers) {
      const { parent, index, type, title } = marker;
      
      // Find corresponding end marker
      let endIndex = -1;
      for (let i = index + 1; i < parent.children.length; i++) {
        const child = parent.children[i];
        if (child.tagName === 'p' && child.children?.length > 0) {
          let text = '';
          for (const grandchild of child.children) {
            if (grandchild.type === 'text') {
              text += grandchild.value;
            }
          }
          if (text.trim() === ':::') {
            endIndex = i;
            break;
          }
        }
      }
      
      if (endIndex > -1) {
        // Create container div
        const container = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: [`container`, `container-${type}`]
          },
          children: []
        };
        
        // Add title if present
        if (title) {
          container.children.push({
            type: 'element',
            tagName: 'strong',
            properties: {},
            children: [{ type: 'text', value: title }]
          });
        }
        
        // Move content between markers into container
        const contentCount = endIndex - index - 1;
        if (contentCount > 0) {
          const content = parent.children.splice(index + 1, contentCount);
          container.children.push(...content);
        }
        
        // Replace the start marker with container
        parent.children[index] = container;
        
        // Remove the end marker (now at index + 1)
        parent.children.splice(index + 1, 1);
      }
    }
  };
}

