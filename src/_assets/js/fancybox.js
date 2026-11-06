import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

Fancybox.bind("[data-fancybox]", {
    Hash: false,
    //remove fullscreen button and zoom button
    Carousel: {
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: [
                "close",
                ],
            },
        },
    }
});