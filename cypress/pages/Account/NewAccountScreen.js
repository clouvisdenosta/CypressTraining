import { AccountFileSummary } from "./AccountFileSummary";
import { CreateAccountScreen } from "./CreateAccountScreen";
import examples from "../../fixtures/example.json";
const accountFileSummary = new AccountFileSummary();
const createAccountScreen = new CreateAccountScreen();
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
    
    createNewAccount(accountInformation) {
        let details = accountInformation.rowsHash();
        this.elements.newAccount_InputFirstName().type(details["firstName"]);
        this.elements.newAccount_InputLastName().type(details["lastName"]);
        this.elements.newAccount_searchButton().click();

        if(this.elements.newAccount_NewAccountSearchResultsLV().find('tr').should('have.length.greaterThan', 1)){
            this.elements.newAccount_NewAccountSearchResultsLV().find('div[id$=-AccountNumber_button]').invoke('text').then((value) => {
                examples.accountNumber = value;
            });
            this.elements.newAccount_NewAccountSearchResultsLV().find('div[id$=-AccountNumber_button]').click();
        }else{
            this.elements.newAccount_NewAccountButton().click();
            this.elements.newAccount_NewAccountButton_NewPerson().click();
            createAccountScreen.elements.primaryEmail().type(details["email"]);
            createAccountScreen.elements.address1().type(details["address1"]);
            createAccountScreen.elements.city().type(details["city"]);
            createAccountScreen.elements.addressType().find('select').select(details["addressType"]);
            createAccountScreen.elements.selectOrganization().click();
            createAccountScreen.elements.organizationName().type("Enigma");
            createAccountScreen.elements.organizationSearchButton().click();
            createAccountScreen.elements.organizationSearchResults().find('div[id$=-_Select]').click();
            createAccountScreen.elements.producerCode().find('select').select("Standard Code Internal Producer Code - 1");
            createAccountScreen.elements.update().click();
            accountFileSummary.elements.accountNumber().invoke('text').then((myValue) =>{
                cy.log(myValue);
                examples.accountNumber = myValue;
            });

        }
    }
}