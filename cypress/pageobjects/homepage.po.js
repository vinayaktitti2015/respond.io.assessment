class Homepage {

    getSearchBox() {
        return cy.get('#term-desktop')
            .clear();
    }

    getSearchIcon() {
        return cy.get('.sprite-icons.cI.i-search-orange-desk');
    }

    getProductHeader() {
        return cy.get('[data-vars-cgt="click_comparable_product"] h3');
    }
}

export default Homepage;