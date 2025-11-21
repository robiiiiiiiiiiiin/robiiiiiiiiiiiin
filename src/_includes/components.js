export default function(eleventyConfig) {

    // Card
    eleventyConfig.addPairedShortcode("box_1", function(content, title = "") {
        const titleHtml = title ? `<h2 class="w-fit font-mono -mt-[0.75rem] -ml-[2px] bg-[#030303] pt-[2px] pb-[4px] pr-[7px]">${title}</h2>` : '';
        return `
        <div class="box h-fit max-w-[25rem] border border-gray rounded-md bg-[#030303]">
            ${titleHtml}
            <div class="markdown-wrapper max-h-[35rem] overflow-y-auto p-3 text-[0.875rem]">
                ${content}
            </div>
        </div>`;
    });

    // Title Page
    eleventyConfig.addShortcode("titlePage", function(title) {
        return `
        <h1 class="mb-[2rem]">${title}</h1>
        `;
    });

    // Back button
    eleventyConfig.addShortcode("backButton", function(url = "/") {
        return `
        <a href="${url}" class="inline-block text-sm ">< Back</a>
        `;
    });
};