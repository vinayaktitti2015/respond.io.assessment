class Laptops {

    getBrand() {
        return cy.get('[data-vars-lb="position:2 | brandName:Dell"]');
    }

    getProductHeader() {
        return cy.get('[data-vars-cgt="click_comparable_product"] h3');
    }
}

export default Laptops;