/// <reference types="cypress" />

context('Compras', () => {
    it('Efetuar uma compra do produto - Faded Short Sleeve T-shirts', () => {
        //Já que o endereço foi informado no cypress.js, como URL padrão, é só colocar cy.visit('/');
        cy.visit('/');
        
        //localizar pelo texto que contem na tela
        //Em seguida usar comando trigger que despare um evento o mouse ouver, para passar o mouse por cima
        let nomeProduto = 'Faded Short Sleeve T-shirts';
        
        cy.contains(nomeProduto)
        .trigger('mouseover');

        //Mecanismo de busca para encontrar o botão para adicionar ao carrinho
        //nome do produto
        // h5
        //acessar a div
        //acessar os a da div
        //  acessar o span Add to cart do a
        cy.contains(nomeProduto)
        //pai
        .parent()
        //irmãos
        .siblings('div.button-container')
        //Filhos do irmão
        .children('a')
        //selecionar o primeiro elemento filho (add to cart)
        .first()
        .click();

        //validar se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
        .parent('')//h2
        .should('contain.text','Product successfully added to your shopping cart');

        //validar se o nome do produto é o mesmo informado na home page
        cy.get('span#layer_cart_product_title')
        .should('contain.text', nomeProduto);

        //#####parei 08:03s
        //cy.pause();

        //pai que tenha um filho do tipo a e que tenha um atributo href e que contenha no final o texto controller=order
        cy.get(".button-container a[href$='controller=order']").click();
        cy.get(".cart_navigation a[href$='order&step=1']").click();

        //Página de login, informar as credenciais
        cy.get('#email').type('qa@qa.com');
        cy.get('#passwd').type('12345');

        cy.get('button#SubmitLogin').click();

        //validação na tela de confirmação de endereços
        //[type=checkbox]#addressesAreEquals

        cy.get('button[name=processAddress]').click();

        //Etapa de entrega
        //marcar o tesmo de serviço
        //opção check() para marcar a opção de um checkbox
        cy.get('[type=checkbox]#cgv').check();

        //clicar no botão de prosseguir com o carrinho
        cy.get('button[name=processCarrier]').click();

        //forma de pagamento
        cy.get('.bankwire').click();

        cy.get('.cart_navigation button[type=submit]')
        .find('span')
        .contains("I confirm my order")
        .click();

        //verificar a ultima tela
        cy.get('.cheque-indent strong')
        //pode-se usar o Expect ou o should - forma explícita e implícita
        .should('contain.text', 'Your order on My Store is complete.')
    });   
    
});

//#ajuda
//1 - Geralmente se usa o describe para criar os testes, qual a diferença entre o describe e o context?


//comandos
//npx cypress open
//npx cypress run - Modo headless sem a interface mas com o vídeo