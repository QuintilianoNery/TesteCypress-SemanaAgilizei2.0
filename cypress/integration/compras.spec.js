/// <reference types="cypress" />

context('Compras', () => {
    it('Efetuar uma compra de produto', () => {
        //Já que o endereço foi informado no cypress.js, como URL padrão, é só colocar cy.visit('/');
        cy.visit('/');
        
        //localizar pelo texto que contem na tela
        //Em seguida usar comando trigger que despare um evento o mouse ouver, para passar o mouse por cima
        cy.contains('Faded Short Sleeve T-shirts')
        .trigger('mouseover');

        //Mecanismo de busca para encontrar o botão para adicionar ao carrinho
        //nome do produto
        // h5
        //acessar a div
        //acessar os a da div
        //  acessar o span Add to cart do a
        cy.contains('Faded Short Sleeve T-shirts')
        //pai
        .parent()
        //irmãos
        .siblings('div.button-container')
        //Filhos do irmão
        .children('a')
        //selecionar o primeiro elemento filho
        .first()
        
    });
});

//#ajuda
//1 - Geralmente não deve se usar o describe para criar os testes, qual a diferença entre o describe e o context?