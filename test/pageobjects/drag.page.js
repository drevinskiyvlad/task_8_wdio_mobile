import Page from './page.js';

class DragPage extends Page {

    get dragDropScreen() {
        const selector = '//android.view.ViewGroup[@content-desc="Drag-drop-screen"]';
        return $(selector);
    }

    get congratsAlert() {
        const selector = '//android.view.ViewGroup[@content-desc="Drag-drop-screen"]';
        return $(selector);
    }

    dragElement(index) {
        const selector = `//android.view.ViewGroup[@content-desc="drag-${index}"]`;
        return $(selector);
    }

    dropElement(index) {
        const selector = `//android.view.ViewGroup[@content-desc="drop-${index}"]`;
        return $(selector);
    }

    async dragAndDrop(index) {
        const dragElementLocation = await this.dragElement(index).getLocation();
        const dropElementLocation = await this.dropElement(index).getLocation();

        await browser.touchAction([
            {action: 'press', x: dragElementLocation.x, y: dragElementLocation.y},
            {action: 'moveTo', x: dropElementLocation.x, y: dropElementLocation.y},
            'release'
        ]);
    }

    async verify() {
        await super.verify(this.dragDropScreen);
    }
}

export default new

DragPage();
