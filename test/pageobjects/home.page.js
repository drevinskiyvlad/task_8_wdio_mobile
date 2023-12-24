import Page from './page.js';

class HomePage extends Page {

    get homeContent() {
        const selector = '//android.widget.ScrollView[@content-desc="Home-screen"]';
        return $(selector);
    }

    get loginLink() {
        const selector = '//android.widget.Button[@content-desc="Login"]';
        return $(selector);
    }

    get dragLink() {
        const selector = '//android.widget.Button[@content-desc="Drag"]';
        return $(selector);
    }

    async verify() {
        await super.verify(this.homeContent);
    }
}

export default new HomePage();