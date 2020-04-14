describe("test <mocha></mocha> and puppeteer", function () {
    let page;
    before(async function () {
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:5001/');
    });

    after(async function () {
        await page.close();
    });
    it("show start page", async function () {
        expect(await page.title()).to.equal("React App")
    })
    it("add new todo item", async function () {
        // 新建一个todo项目
        await page.click('#todo-input', { delay: 500 });
        await page.type('#todo-input', 'test add todo item', { delay: 50 });
        await page.click('#submitBtn');
        // 检测table中最后一项是否为新建的todo项目
        let UndoneItems = await page.waitFor('.table tbody');
        const ExpectUndoItem = await page.evaluate(UndoneItems => UndoneItems.lastChild.querySelector('input').getAttribute("placeholder"), UndoneItems);
        expect(ExpectUndoItem).to.eql('test add todo item');
    })
})
