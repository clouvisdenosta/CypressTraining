export class NewAccountScreen{

    elements = {
        newAccount_InputFirstName:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName'),
        newAccount_InputLastName:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName'),
        newAccount_searchButton:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search'),
        newAccount_NewAccountButton:() => cy.get('#NewAccount-NewAccountScreen-NewAccountButton'),
        newAccount_NewAccountButton_NewPerson:() => cy.get('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person'),
        newAccount_NewAccountSearchResultsLV:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchResultsLV'),
        newAccount_NewAccountScreen:() => cy.get('#NewAccount-NewAccountScreen')
    }
    
}