export class NewAccountScreen{

    elements = {
        newAccount_InputFirstName:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName'),
        newAccount_InputLastName:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName'),
        newAccount_searchButton:() => cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search'),
        newAccount_NewAccountButton:() => cy.get('#NewAccount-NewAccountScreen-NewAccountButton'),
        newAccount_NewAccountButton_NewPerson:() => cy.get('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person'),
    }
    
    
    createNewAccount(accountInformation) {
        let details = accountInformation.rowsHash();
        this.elements.newAccount_InputFirstName().type(details["firstName"]);
        this.elements.newAccount_InputLastName().type(details["lastName"]);
        this.elements.newAccount_searchButton().click();
        this.elements.newAccount_NewAccountButton().click();
        this.elements.newAccount_NewAccountButton_NewPerson().click();
        
    }

}