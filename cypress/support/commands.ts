declare namespace Cypress {
  interface Chainable {
    getUsersByPage(): Chainable<Response<any>>;
    getUsersById(): Chainable<Response<any>>;
    getUserNotFound(): Chainable<Response<any>>;
    getUnknown(): Chainable<Response<any>>;
  }
}

Cypress.Commands.add("getUsersByPage", () => {
  return cy.request({
    method: "GET",
    url: "https://reqres.in/api/users?page=2",
  });
});

Cypress.Commands.add("getUsersById", () => {
  return cy.request({
    method: "GET",
    url: "https://reqres.in/api/users/2",
  });
});

Cypress.Commands.add("getUserNotFound", () => {
  return cy.request({
    method: "GET",
    url: "https://reqres.in/api/users/23",
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("getUnknown", () => {
  return cy.request({
    method: "GET",
    url: "https://reqres.in/api/unknown",
  });
});
