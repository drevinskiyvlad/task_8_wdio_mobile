import Page from './page.js';

class LoginPage extends Page {

    successfulLoginMessage = 'You are logged in!';
    invalidEmailMessage = 'Please enter a valid email address';
    invalidPasswordMessage = 'Please enter at least 8 characters';

    get emailInput() {
        const selector = '//android.widget.EditText[@content-desc="input-email"]';
        return $(selector);
    }

    get passwordInput() {
        const selector = '//android.widget.EditText[@content-desc="input-password"]';
        return $(selector);
    }

    get submitButton() {
        const selector = '//android.view.ViewGroup[@content-desc="button-LOGIN"]';
        return $(selector);
    }

    get signUpButton() {
        const selector = '//android.view.ViewGroup[@content-desc="button-sign-up-container"]';
        return $(selector);
    }

    get loginAlert() {
        const selector = '//android.widget.TextView[@resource-id="android:id/message"]';
        return $(selector);
    }

    get invalidEmailAlert() {
        const selector = '//android.widget.TextView[@text="Please enter a valid email address"]';
        return $(selector);
    }

    get invalidPasswordAlert() {
        const selector = '//android.widget.TextView[@text="Please enter at least 8 characters"]';
        return $(selector);
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async verify() {
        await super.verify(this.emailInput);
    }
}

export default new LoginPage();
