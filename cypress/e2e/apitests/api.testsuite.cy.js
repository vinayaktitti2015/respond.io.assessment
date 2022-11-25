const paylod = require('../../fixtures/createBooking.json')
const invalidpaylod = require('../../fixtures/invalidPayload.json')
const blankpaylod = require('../../fixtures/blankPayload.json')
describe('Booking - CreateBooking', () => {
    it('test create booking with valid payload by passing all data', () => {
        cy.request({
            method: "POST",
            url: Cypress.env("host") + Cypress.env("createBooking"),
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                fixtures: paylod,
            },
            retryOnStatusCodeFailure: true
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("firstname", "Jim");
            expect(res.body).to.have.property("lastname", "Brown");
            expect(res.body).to.have.property("totalprice", 111);
        })
    });


    it('test create booking with invalid payload without passing firstname & lastname', () => {
        cy.request({
            method: "POST",
            url: Cypress.env("host") + Cypress.env("createBooking"),
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                fixtures: invalidpaylod,
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.equal(500);

        })
    });

    it('test create booking with blank payload by passing empty values', () => {
        cy.request({
            method: "POST",
            url: Cypress.env("host") + Cypress.env("createBooking"),
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                fixtures: blankpaylod,
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.equal(500);

        })
    });


    it('test create booking without payload', () => {
        cy.request({
            method: "POST",
            url: Cypress.env("host") + Cypress.env("createBooking"),
            header: {
                "Content-Type": "application/json"
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.equal(500);

        })
    });
});