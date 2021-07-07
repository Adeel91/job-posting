describe("List", () => {
  it("displays postings", () => {
    cy.visit("/");

    cy.get('[data-test="posting"]').within(() => {
      cy.get('[data-test="posting-name"]');
      cy.get('[data-test="posting-location"]');
      cy.get('[data-test="posting-department"]');
    });
  });

  it("contains filters on the screen", () => {
    cy.visit("/");

    cy.get('[data-test="department-filter"]');
    cy.get('[data-test="country-filter"]');
  });

  it("fetch job postings from the server", () => {
    cy.visit("/");

    cy.fetchPostingsEpic();

    cy.wait(5000);
  });

  it("contains links to details", () => {
    cy.visit("/");

    cy.get('[data-test="posting"]').first().click();

    cy.get('[data-test="posting-logo"]');
    cy.get('[data-test="posting-banner"]');
    cy.get('[data-test="posting-name"]');
    cy.get('[data-test="posting-location"]');
    cy.get('[data-test="company-description"]');
    cy.get('[data-test="job-description"]');
    cy.get('[data-test="job-qualifications"]');
    cy.get('[data-test="additional-description"]');
  });
});
