it('create pet test', ()=> {

cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 1236789,
      category: {id: 0, name: "string"},
      name: "Muhtar",
      photoUrls: ["string"],
      tags: [{
          id: 0,
          name: "string",
        }],
      status: "available",
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
}) 
});

it('get pet test', ()=> {

  cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/1236789",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
  }) 
  });

  it('update pet test', ()=> {

  cy.request({
    method: "PUT",
    url: "https://petstore.swagger.io/v2/pet",
    body: {
      id: 1236789,
      category: {id: 0, name: "string"},
      name: "Muhtar",
      photoUrls: ["string"],
      tags: [{
          id: 0,
          name: "string",
        }],
      status: "Not available",
    }
  }).then((response) => {
    cy.log(JSON.stringify(response.body));
    expect(response.status).to.eq(200);
})
});

it('delete pet test', ()=> {

  cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/pet/1236789",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
  }) 
  });

