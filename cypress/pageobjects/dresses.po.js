class Dresses {

    getPrice() {
        return cy.get('[data-vars-lb="Price"]')
            .contains('Price');
    }

    getPriceIconSorting() {
        return cy.get('[data-vars-lb="Price"] i');
    }

    getAscOrDescResult() {
        return 'sprite-icons cI i-descending-green-active i-descending-green';
    }

    getProductHeader() {
        return cy.get("a[data-vars-action='shop'] div:nth-child(3) div");
    }
}

export default Dresses;