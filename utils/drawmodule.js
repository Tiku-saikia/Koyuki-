const puppeteer = require("puppeteer"),
    cookies = require("./drawcookies");
function timeout(e) {
    return new Promise((a) => setTimeout(a, e));
}
require("dotenv").config();
let page;
const puppeteerExecutablePath = "production" === process.env.NODE_ENV ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath();
async function run() {
    let e = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-accelerated-2d-canvas", "--disable-gpu", "--disable-hide-scrollbars"],
        defaultViewport: !1,
        executablePath: puppeteerExecutablePath,
    });
    try {
        (page = await e.newPage()).setDefaultNavigationTimeout(2e5),
            await page.setRequestInterception(!0),
            page.on("request", (e) => {
                "font" === e.resourceType() ? e.abort() : e.continue();
            }),
            await page.goto("https://www.seaart.ai/models/detail/014004d18d0dcc73a128467096107c69"),
            await page.setCookie(...cookies),
            await page.reload(),
            await page.click(".stat-item"),
            await timeout(1e3);
        let a = await page.$("button.el-button.cancel.el-button--default");
        a && (await a.click(), await timeout(1e3));
        let t = (await page.$$(".el-menu-item"))[0];
        await t.click(), await page.waitForTimeout(1e3), await t.click();
        await (await page.$$(".title > .el-icon-arrow-up.zoom-icon.off"))[0].click(), console.log("drawmodule ready");
        return e;
    } catch (i) {
        return await e.close(), await run();
    }
}
async function generate(e, a, t) {
    const browser = await run();
    try {
        let i;
        try {
            i = await page.$$(".model-item");
        } catch (o) {
            i = await page.$$("model-item.active");
        }
        try {
            await page.click(".title > .view-all"),
                await page.waitForTimeout(1e3),
                await page.type('.style-content__search-input.el-input.el-input--prefix.el-input--suffix > .el-input__inner[placeholder="Search for more models"]', t),
                await page.keyboard.press("Enter"),
                await page.waitForTimeout(1e3);
            let r = await page.$$(".style-content__list-item"),
                n = r[r.length - 1];
            await page.waitForTimeout(2e3), await n.click(), await timeout(2e3);
        } catch (p) {
            await page.type('input.el-input__inner[placeholder="Search for a model"]', "0"),
                await page.keyboard.down("Control"),
                await page.keyboard.press("KeyA"),
                await page.keyboard.up("Control"),
                await page.type('input.el-input__inner[placeholder="Search for a model"]', e),
                await page.waitForTimeout(2e3),
                await page.click("div.model-list > div > div > div.cover");
        }
        await page.waitForSelector('textarea.el-textarea__inner[placeholder="Please describe the image you want to generate, including prompt words such as person, gender, characteristics or scene..."]'),
            await page.type('textarea.el-textarea__inner[placeholder="Please describe the image you want to generate, including prompt words such as person, gender, characteristics or scene..."]', "loli"),
            await page.keyboard.down("Control"),
            await page.keyboard.press("KeyA"),
            await page.keyboard.up("Control"),
            await page.type('textarea.el-textarea__inner[placeholder="Please describe the image you want to generate, including prompt words such as person, gender, characteristics or scene..."]', e);
        let l = await page.$$(".el-textarea__inner"),
            c = l[l.length - 1];
        a
            ? (await c.type("o"), await page.keyboard.down("Control"), await page.keyboard.press("KeyA"), await page.keyboard.up("Control"), await c.type(a))
            : (await c.type("o"), await page.keyboard.down("Control"), await page.keyboard.press("KeyA"), await page.keyboard.up("Control"), await c.type("EasyNegativeV2,  bad-hands-5, extra fingers, fewer fingers")),
            await page.click(".gen-btn"),
            console.log("generating"),
            await timeout(1e3),
            await page.waitForSelector(".image-panel > .img-box", { timeout: 3e5 });
        let w = await page.$eval(".image-panel > .img-box", (e) => {
            let a = e.style.backgroundImage.match(/url\("(.*)"\)/);
            return a ? a[1] : null;
        });
        return (
            console.log(`Image URL: ${w}`),
            await page.type('input.el-input__inner[placeholder="Search for a model"]', "0"),
            await page.keyboard.down("Control"),
            await page.keyboard.press("KeyA"),
            await page.keyboard.up("Control"),
            await page.type('input.el-input__inner[placeholder="Search for a model"]', "kanpiromix"),
            console.log("refresh model"),
            await page.waitForTimeout(2e3),
            await page.click("div.model-list > div > div > div.cover"),
            await browser.close(),
            { img: w, model: t }
        );
    } catch (g) {
        return console.log(g), { message: g.message };
    }
}
module.exports = generate;
