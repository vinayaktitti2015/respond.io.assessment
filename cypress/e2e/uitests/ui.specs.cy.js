import Laptops from '../../pageobjects/laptops.po'
import Dresses from '../../pageobjects/dresses.po'
import Homepage from '../../pageobjects/homepage.po';
const testdata = require('../../fixtures/iPriceData.json')
describe('iPrice website', () => {

  const laptopPage = new Laptops();
  const dresses = new Dresses();
  const homepage = new Homepage();
  it('Users are able to filter for an item by brand under the Computing > Laptop section', () => {
    cy.visit('/computing/laptops');
    cy.viewport('macbook-16')
    laptopPage.getBrand()
      .contains(testdata.brandName)
      .click()
      .then(() => {
        laptopPage.getProductHeader()
          .each(($el, index) => {
            const actual = $el.text();
            const actualToUppercase = actual.toUpperCase()
            const expected = testdata.brandExpected;
            expect(actualToUppercase).to.contains(expected)
          })
      })
  })

  it('Users are able to sort results under dresses by price in descending order', () => {
    cy.visit('/clothing/dresses');
    cy.viewport('macbook-16')
    dresses.getPrice()
      .click()
      .then(() => {
        dresses.getPriceIconSorting()
          .click()
        dresses.getPriceIconSorting()
          .should('have.class', dresses.getAscOrDescResult())
        dresses.getProductHeader()
          .each(($el, index) => {
            const actualPrice = $el.text();
            const priceConvertToInt = parseInt(actualPrice);
            expect(priceConvertToInt).to.be.greaterThan(0);
          })
      })
  })

  it('Users are able to search for an item', () => {
    cy.visit('/');
    cy.viewport('macbook-16')
    homepage.getSearchBox()
      .type(testdata.mobile)
      .then(() => {
        homepage.getSearchIcon()
          .click()
          .then(() => {
            homepage.getProductHeader()
              .each(($el, index) => {
                const actual = $el.text();
                const expected = testdata.mobile;
                expect(actual).to.contains(expected)
              })
          })
      })
  })
})