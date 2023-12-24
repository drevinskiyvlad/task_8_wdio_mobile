import HomePage from "../pageobjects/home.page.js";
import DragPage from "../pageobjects/drag.page.js";

describe('Drag', () => {

    beforeEach(async function () {
        await driver.launchApp();
    });

    afterEach(async function () {
        await driver.closeApp();
    });

    it('Drag and drop', async () => {
        await HomePage.verify();
        await HomePage.dragLink.click();
        await DragPage.verify();

        await DragPage.dragAndDrop('l1');
        await DragPage.dragAndDrop('c1');
        await DragPage.dragAndDrop('r1');
        await DragPage.dragAndDrop('l2');
        await DragPage.dragAndDrop('c2');
        await DragPage.dragAndDrop('r2');
        await DragPage.dragAndDrop('l3');
        await DragPage.dragAndDrop('c3');
        await DragPage.dragAndDrop('r3');

        await expect(DragPage.congratsAlert).toBeDisplayed();
    });
});