export function convertLexicalToHtml(node: any): string {
    if (!node) return "";
    if (typeof node === 'string') return node;

    // Handle the root Lexical object
    if (node.root) return convertLexicalToHtml(node.root);

    if (node.children) {
        const childrenHtml = node.children.map((child: any) => convertLexicalToHtml(child)).join("");
        
        switch (node.type) {
            case 'root':
                return childrenHtml;
            case 'paragraph':
                return `<p>${childrenHtml}</p>`;
            case 'list':
                const tag = node.tag === 'ol' ? 'ol' : 'ul';
                return `<${tag}>${childrenHtml}</${tag}>`;
            case 'listitem':
                return `<li>${childrenHtml}</li>`;
            case 'heading':
                const hTag = node.tag || 'h2';
                return `<${hTag}>${childrenHtml}</${hTag}>`;
            case 'link':
                return `<a href="${node.fields?.url || '#'}" target="${node.fields?.newTab ? '_blank' : '_self'}">${childrenHtml}</a>`;
            case 'quote':
                return `<blockquote>${childrenHtml}</blockquote>`;
            default:
                return childrenHtml;
        }
    }

    if (node.type === 'text') {
        let text = node.text || "";
        if (node.format & 1) text = `<strong>${text}</strong>`; // BOLD
        if (node.format & 2) text = `<em>${text}</em>`; // ITALIC
        if (node.format & 8) text = `<u>${text}</u>`; // UNDERLINE
        if (node.format & 16) text = `<code>${text}</code>`; // CODE
        return text;
    }

    return "";
}
