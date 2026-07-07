import { visit, SKIP } from 'unist-util-visit';

/**
 * Custom remark plugin to handle ::: container syntax
 * Converts :::type[title]\ncontent\n::: into proper container HTML
 */
export default function remarkContainers() {
  return (tree) => {
    // Find all container markers and convert them to HTML divs
    const toRemove = [];
    let i = 0;
    
    while (i < tree.children.length) {
      const node = tree.children[i];
      
      // Check if this node contains the container start marker
      if (node.type === 'paragraph' && node.children && node.children.length > 0) {
        const firstChild = node.children[0];
        
        if (firstChild.type === 'text') {
          const text = firstChild.value.trim();
          
          // Check for container start (:::type[title])
          const containerMatch = text.match(/^:::(\w+)(?:\[(.*?)\])?$/);
          if (containerMatch) {
            const [, type, title] = containerMatch;
            
            // Find the corresponding end marker
            let endIndex = i + 1;
            let foundEnd = false;
            
            while (endIndex < tree.children.length) {
              const endNode = tree.children[endIndex];
              
              if (endNode.type === 'paragraph' && endNode.children && endNode.children.length > 0) {
                const endFirstChild = endNode.children[0];
                if (endFirstChild.type === 'text' && endFirstChild.value.trim() === ':::') {
                  foundEnd = true;
                  break;
                }
              }
              
              endIndex++;
            }
            
            if (foundEnd) {
              // Create opening HTML node
              const openHtml = {
                type: 'html',
                value: `<div class="container container-${type}">${title ? `<strong>${title}</strong>` : ''}`
              };
              
              // Create closing HTML node
              const closeHtml = {
                type: 'html',
                value: '</div>'
              };
              
              // Replace the start marker with opening HTML
              tree.children[i] = openHtml;
              
              // Replace the end marker with closing HTML
              tree.children[endIndex] = closeHtml;
              
              // Keep content between unchanged
              i = endIndex + 1;
              continue;
            }
          }
        }
      }
      
      i++;
    }
  };
}

