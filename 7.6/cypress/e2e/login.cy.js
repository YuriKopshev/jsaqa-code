it("Should successfully login", () => {
  cy.visit("/booksNode");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Should not login with empty login", () => {
  cy.visit("/booksNode");
  cy.login(" ","test");
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
  cy.get("#mail")
    .then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле.");
});

it("Should not login with empty password", () => {
  cy.visit("/booksNode");
  cy.login("test@test.com");
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should add book to favorite", () =>{
  cy.visit("/booksNode");
  cy.login("test@test.com", "test");
  cy.addNewBook("Войнa и Мир","А.Толстой");
  cy.get('.card-title').should("contain","Война и Мир")
});

it("Should delete last added book from favorite", () =>{
  cy.visit("/booksNode");
  cy.login("test@test.com", "test");
  cy.addNewBook("Войнa миров","Г.Уэлс");
  cy.get('h4').click();
  cy.get('#root > div > div > a:last-child > div > div.card-footer > button').click();
  cy.get('.card-title').should("not.exist","Война миров");
});

it.only("Should upload and download book from favorite", () =>{
  cy.visit("/booksNode");
  cy.login("test@test.com", "test");
  cy.wait(3000);
  cy.get('.text-light > .ml-2').click();
  cy.get('.p-0 > .btn').click();
  cy.get('#title').click();
  cy.get('#title').type("aaa");
  cy.get('#authors').click();
  cy.get('#authors').type("bbb");
  cy.get('#fileBook').selectFile('cypress/fixtures/budda.docx');
  cy.get('#favorite').check();
  cy.get('form > .ml-2').click();
  cy.get('h4').click();
  cy.get('#root > div > div > a:last-child').click();
  cy.get('.col-md-7 > .btn');
  cy.readFile('cypress\\Downloads\\download.docx')
  .should('exist')
});

