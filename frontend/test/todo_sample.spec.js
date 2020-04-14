describe("敏捷web开发测试", function () {
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
    it("change the new todo item", async function (){
        // 修改上面提交的todo项目的值
        await page.click(".table tbody tr:last-child input",{delay:500});
        await page.type(".table tbody tr:last-child input","change",{delay: 50});
        await page.click(".table tbody tr:last-child td:last-child button",{delay: 500})
        // 检测table中最后一项是否为修改后的todo项目
        let UndoneItems = await page.waitFor('.table tbody');
        const ExpectUndoItem = await page.evaluate(UndoneItems => UndoneItems.lastChild.querySelector('input').getAttribute("placeholder"), UndoneItems);
        expect(ExpectUndoItem).to.eql('change');
    })
    it("delete the new todo item", async function (){
        // 得到倒数第二个todo项目的值
        let UndoneItems = await page.waitFor('.table tbody');
        const penultTodoItem = await page.evaluate(function getpenultTodoItem(UndoneItems){
            penultIndex = UndoneItems.childNodes.length-2;
            return UndoneItems.childNodes[penultIndex].querySelector('input').getAttribute("placeholder")
        },UndoneItems )
        // 删除最后一个todo item
        await page.click(".table tbody tr:last-child td:nth-last-child(2) button",{delay: 500})
        // 判断目前最后一个todo的值是不是刚才倒数第二个todo的值
        let newUndoneItems = await page.waitFor('.table tbody');
        const lastTodoItem = await page.evaluate(newUndoneItems => newUndoneItems.lastChild.querySelector('input').getAttribute("placeholder"), newUndoneItems);
        expect(lastTodoItem).to.eql(penultTodoItem)
    })
})
