/// <reference types = "cypress" />

describe('Calculadora de índice de massa corporal (IMC)', () => {
    beforeEach(() => {
        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')
    })

it('Valida preenchimento do IMC', () => {
        cy.get('input[name="name"]').type('Amanda')
        cy.get('input[name="height"]').type('179')
        cy.get('input[name="weight"]').type('66')
        cy.get('button[id="get-offer"]').click()
    })    
})