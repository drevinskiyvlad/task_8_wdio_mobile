import {expect} from '@wdio/globals'

export default class Page {
    async verify(element) {
        await expect(element).toBeDisplayed()
    }
}
