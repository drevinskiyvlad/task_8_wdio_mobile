import Page from './page.js';

class RegistrationPage extends Page {

    successfulLoginMessage = 'You successfully signed up!';
    invalidEmailMessage = 'Please enter a valid email address';
    invalidPasswordMessage = 'Please enter at least 8 characters';
    invalidPasswordConfirmMessage = 'Please enter the same password';

    get emailInput() {
        const selector = '//android.widget.EditText[@content-desc="input-email"]';
        return $(selector);
    }

    get passwordInput() {
        const selector = '//android.widget.EditText[@content-desc="input-password"]';
        return $(selector);
    }

    get passwordConfirmInput() {
        const selector = '//android.widget.EditText[@content-desc="input-repeat-password"]';
        return $(selector);
    }

    get submitButton() {
        const selector = '//android.view.ViewGroup[@content-desc="button-SIGN UP"]';
        return $(selector);
    }

    get registrationAlert() {
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

    get invalidPasswordConfirmAlert() {
        const selector = '//android.widget.TextView[@text="Please enter the same password"]';
        return $(selector);
    }

    async register(email, password, passwordConfirm) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.passwordConfirmInput.setValue(passwordConfirm);
        await this.submitButton.click();
    }

    async verify() {
        await super.verify(this.passwordConfirmInput);
    }
}

export default new RegistrationPage();
