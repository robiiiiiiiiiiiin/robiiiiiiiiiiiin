export default function(eleventyConfig) {

    // File content shortcode that works better with watching
    eleventyConfig.addShortcode("includeMarkdown", function(filePath) {
        // This approach should trigger proper file watching
        return `{% renderFile "${filePath}" %}`;
    });

    // Alternative file reading shortcode
    eleventyConfig.addShortcode("readFile", function(filePath) {
        const fs = require('fs');
        const path = require('path');
        try {
            // Add file to Eleventy's dependency tracking
            this.ctx.addDependency && this.ctx.addDependency(path.resolve(filePath));
            return fs.readFileSync(path.resolve(filePath), 'utf8');
        } catch (err) {
            return `<!-- Error loading ${filePath}: ${err.message} -->`;
        }
    });

    // Card component
    eleventyConfig.addPairedShortcode("box_1", function(content, title = "") {
        const titleHtml = title ? `<h2 class="w-fit font-mono -mt-[0.75rem] -ml-[2px] bg-[#030303] pt-[2px] pr-[7px]">${title}</h2>` : '';
        return `
        <div class="max-w-[25rem] border border-gray rounded-md bg-[#030303]">
            ${titleHtml}
            <div class="markdown-wrapper max-h-[35rem] overflow-y-auto p-3 text-[0.875rem]">
                ${content}
            </div>
        </div>`;
    });

    // Title Page component
    eleventyConfig.addShortcode("titlePage", function(title) {
        return `
        <h1 class="mb-[2rem]">${title}</h1>
        `;
    });
};