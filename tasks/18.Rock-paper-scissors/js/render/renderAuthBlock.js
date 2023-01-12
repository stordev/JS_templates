import { fetchContent } from '../utils/fetchContent.js';

export function renderAuthBlock(container, cb) {
    // request content from server
    fetchContent('blocks/auth.html', '.content', (newContent) => {
        container.textContent = '';
        container.append(...newContent.children);
        cb(container);
    }); // close fetchContent function
} // close renderAuthBlock function