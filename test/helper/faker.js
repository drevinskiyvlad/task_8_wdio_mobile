class Faker {
    generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    generateValidEmail() {
        const username = this.generateRandomString(8);
        const domain = this.generateRandomString(4);
        const tlds = ['com', 'net', 'org', 'gov', 'edu'];
        const randomTLD = tlds[Math.floor(Math.random() * tlds.length)];
        return `${username}@${domain}.${randomTLD}`;
    }

    generateInvalidEmail() {
        const username = this.generateRandomString(8);
        const domain = this.generateRandomString(6);
        const tlds = ['com', 'net', 'org', 'gov', 'edu'];
        const randomTLD = tlds[Math.floor(Math.random() * tlds.length)];
        return `${username}#${domain}.${randomTLD}`;
    }
}

export default new Faker();