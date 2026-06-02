export default function(eleventyConfig) {

    /************************************************************************ CARD ************************************************************************/
    eleventyConfig.addPairedShortcode("box_1", function(content, title = "", boxClass = "", wrapperClass = "") {
        const titleHtml = title ? `<h2 class="w-fit font-mono text-[0.875rem] -mt-[0.75rem] -ml-[2px] bg-[#030303] pt-[2px] pb-[4px] pr-[7px]">${title}</h2>` : '';
        return `
        <div class="box w-fit h-fit max-w-[calc(100vw_-_1.5rem)] sm:max-w-box-1 border border-[#78727e] rounded-md bg-[#030303] ${boxClass}">
            ${titleHtml}
            <div class="markdown-wrapper max-h-[28rem] overflow-y-auto p-3 text-[0.9375rem] ${wrapperClass}">
                ${content}
            </div>
        </div>`;
    });

    /************************************************************************ TITLE PAGE ************************************************************************/
    eleventyConfig.addShortcode("titlePage", function(title) {
        return `
        <h1 class="mb-[2rem]">${title}</h1>
        `;
    });

    /************************************************************************ BACK BUTTON ************************************************************************/
    eleventyConfig.addShortcode("backButton", function(url = "/") {
        return `
        <a href="${url}" class="inline-block text-sm ">< Back</a>
        `;
    });

    /************************************************************************ CASSETTE TAPE ************************************************************************/
    let cassetteTapeCount = 0;
    eleventyConfig.addShortcode("cassetteTape", function(titleHtml = "", audioSrc = "", externalLink = "", bgImage = "") {
        const id = `cassette-${++cassetteTapeCount}`;
        return `
        <div class="cassette-tape w-fit h-fit border border-[#78727e] rounded-md bg-[#030303] p-5 max-w-[400px]">

            <div class="flex text-[#78727e]">
                <div>/</div>
                <div class="w-full h-[1px] bg-current"></div>
                <div>\\</div>
            </div>

            <div class="border-x border-b border-[#78727e]">
                <h2 class="w-fit font-mono text-[0.75rem] sm:text-[0.875rem] mx-auto text-center">${titleHtml}</h2>
                <div class="relative py-5">
                    <div class="absolute inset-0 grayscale" style="background-image: url('${bgImage}'); background-size: cover; background-position: center;"></div>
                    <div class="relative z-[2] w-fit flex justify-center mx-auto pt-[5px] pb-[8px] px-[16px] rounded-[30px] font-mono whitespace-break-spaces gap-4 bg-[#030303] text-[#78727e]">
                        <div class="w-[4ch]">.++.
+  +
+  +
'++'
</div>
                        <div class="w-[8.5ch]"> ______ 
| <a href="${externalLink}" target="_blank" rel="noopener noreferrer">src&gt;</a> |
|......|
<span>|_</span><button type="button" class="play text-[#57d5ff] cursor-pointer">▶</button>__<button type="button" class="pause text-[#57d5ff] cursor-pointer">&#9208;&#xFE0E;</button><span>_|</span>
</div>
                        <div class="w-[4ch]">.++.
+  +
+  +
'++'
</div>
</div>
                </div>

                <div class="px-4 pt-3 pb-3 font-mono text-[#78727e] text-[0.8125rem]">
                    <pre class="progress cursor-pointer select-none leading-none">|<span class="elapsed"></span><span class="handle">o</span><span class="remaining"></span>|</pre>
                    <div class="flex justify-between text-xs mt-1">
                        <span class="current-time">0:00</span>
                        <span class="duration">0:00</span>
                    </div>
                </div>

                <div class="hidden">
                    <audio class="player">
                        <source src="${audioSrc}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

        </div>`;
    });
};