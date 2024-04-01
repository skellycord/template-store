import { Plugin } from "@skellycord/apis/plugins";

const DemoPlugin: Plugin = {
    name: "DemoPlugin",
    description: "This plugin is a demo.",
    start() {
        console.log("Test");
    },
    stop() {
        console.log("Test off");
    },
    patches: [
        {
            find: "console.",
            replacements: [
                {
                    target: /console.(.*)\((.*)\)/,
                    replacement: `window.skellycord.utils.logger.logger.$1($2)`
                }
            ]
        }
    ]
}

export default DemoPlugin;