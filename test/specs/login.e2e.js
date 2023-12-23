import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import RegistrationPage from "../pageobjects/registration.page.js";
import Faker from "../helper/faker.js";

describe('Login', () => {

    beforeEach(async function () {
        await driver.launchApp();
        await HomePage.verify();
        await HomePage.loginLink.click();
        await LoginPage.verify();
    });

    afterEach(async function () {
        await driver.closeApp();
    });

    it('Registration with valid credentials', async () => {
        const validEmail = Faker.generateValidEmail();
        const validPassword = Faker.generateRandomString(8);

        await LoginPage.signUpButton.click();
        await RegistrationPage.verify();

        await RegistrationPage.register(validEmail, validPassword, validPassword);
        await expect(RegistrationPage.registrationAlert).toHaveText(RegistrationPage.successfulLoginMessage);
    });

    it('Registration with invalid credentials', async () => {
        const invalidEmail = Faker.generateInvalidEmail();
        const invalidPassword = Faker.generateRandomString(3);
        const invalidPasswordConfirm = Faker.generateRandomString(4);

        await LoginPage.signUpButton.click();
        await RegistrationPage.verify();

        await RegistrationPage.register(invalidEmail, invalidPassword, invalidPasswordConfirm);
        await expect(RegistrationPage.invalidEmailAlert).toHaveText(RegistrationPage.invalidEmailMessage);
        await expect(RegistrationPage.invalidPasswordAlert).toHaveText(RegistrationPage.invalidPasswordMessage);
        await expect(RegistrationPage.invalidPasswordConfirmAlert).toHaveText(RegistrationPage.invalidPasswordConfirmMessage);
    });

    it('Login with valid credentials', async () => {
        const validEmail = Faker.generateValidEmail();
        const validPassword = Faker.generateRandomString(8);

        await LoginPage.login(validEmail, validPassword);
        await expect(LoginPage.loginAlert).toHaveText(LoginPage.successfulLoginMessage);
    });

    it('Login with invalid credentials', async () => {
        const invalidEmail = Faker.generateInvalidEmail();
        const invalidPassword = Faker.generateRandomString(3);

        await LoginPage.login(invalidEmail, invalidPassword);
        await expect(LoginPage.invalidEmailAlert).toHaveText(LoginPage.invalidEmailMessage);
        await expect(LoginPage.invalidPasswordAlert).toHaveText(LoginPage.invalidPasswordMessage);
    });
});