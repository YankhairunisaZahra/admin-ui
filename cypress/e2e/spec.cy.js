/* eslint-disable no-undef */
describe("User Login Flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");
  });

  it("should allow user to log in with valid credentials", () => {
    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");
    cy.get("input#password")
      .should("be.visible")
      .type("123456");
    cy.get("button")
      .contains("Login")
      .click();

    cy.url().should("include", "/");
    cy.contains("Overview", { timeout: 10000 }).should("be.visible");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");
    cy.get("input#password")
      .should("be.visible")
      .type("123");
    cy.get("button")
      .contains("Login")
      .click();

    cy.contains("Wrong Password", { timeout: 10000 }).should("be.visible");
  });
});

describe("Dashboard Access", () => {
  it("should display dashboard elements after login", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");
    cy.get("input#password")
      .should("be.visible")
      .type("123456");
    cy.get("button")
      .contains("Login")
      .click();

    cy.url().should("include", "/");
    cy.contains("Overview", { timeout: 10000 }).should("be.visible");

    cy.get(".MuiChartsGrid-root", { timeout: 10000 }).should("exist");
  });
});
