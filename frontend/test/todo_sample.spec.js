describe("test mochi and puppeteer",function(){
    let page;
    before(async function () {
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:3000/');
    });

    after(async function () {
        await page.close();
    });
    it("show start page",async function (){
        expect(await page.title()).to.equal("React App")
    })
})
