const goodAdmin= require("../fixtures/happy_admin.json");
const wrongAdmin= require("../fixtures/bad_admin.json");

it("Should check title", () => {
  cy.visit("qamid.tmweb.ru");
  cy.title().should('eq','ИдёмВКино');
});

it("Check success admin login",()=>{
cy.visit("http://qamid.tmweb.ru/admin/");
cy.get('[type="email"]').type(goodAdmin.login);
cy.get(('[for="pwd"]')).type(goodAdmin.password);
cy.get('[type="submit"]').click();
cy.get(".conf-step__title").should('contain.text','Управление залами');
});

it("Check wrong admin password",()=>{
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.get('[type="email"]').type(wrongAdmin.login);
  cy.get(('[for="pwd"]')).type(wrongAdmin.password);
  cy.get('[type="submit"]').click();
  cy.get("body").should('contain.text','Ошибка авторизации!');
  });

it("Should be possible to book", () => {
  cy.visit("qamid.tmweb.ru");
  cy.get("a.page-nav__day:nth-of-type(4)").click();
  cy.get(".movie").first().contains("19:00").click();
  const seats = require("../fixtures/seats.json");
  seats.forEach((seat) => {
    cy.get(
      `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
    ).click();
  });
  cy.get(".acceptin-button").click();
  cy.contains("Вы выбрали билеты:").should("be.visible");
});

it("Book ticket film name from admin",()=>{
  let text ="";
  cy.visit("http://qamid.tmweb.ru/admin/");
  cy.get('[type="email"]').type(goodAdmin.login);
  cy.get(('[for="pwd"]')).type(goodAdmin.password);
  cy.get('[type="submit"]').click();
  cy.get('div.conf-step__seances > div:nth-child(4) > div > div > p.conf-step__seances-movie-title').
   then(($el) => $el.textContent).should('have.text','Логан');
  cy.get('div.conf-step__seances > div:nth-child(4) > div > div > p.conf-step__seances-movie-title').invoke('text').then((text) => {
    //expect(text.equal('Логан')); 
    // ёще вариант
    // it.only('aaa', function() {
    //   cy.visit('http://qamid.tmweb.ru/');
  
    //   cy.get('.movie__title').first().invoke('text').as('title');
    //   cy.get('@title').then((title) => {
    //     cy.log(title)
    //   })
    // })
    cy.visit("qamid.tmweb.ru");
    cy.get('h2.movie__title').first().should('have.text', text); 
    cy.get(".movie").first().contains("19:00").click();
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(".acceptin-button").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
 });
 });
  
