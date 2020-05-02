//Header with pageTitle and pageDescription
class Header {
    constructor(pageTitle, pageDescription) {
        this.pageTitle = pageTitle;
        this.pageDescription = pageDescription;
    }
}

// Variable with new header
export const headerText = new Header('What/s in your lunch?');
