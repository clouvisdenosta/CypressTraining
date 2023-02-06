import examples from "../../fixtures/example.json";
import { TabBar } from "./TabBar";

const tabBar = new TabBar();
export class Search {

    elements = {
        searchTab:() => cy.get('#TabBar-SearchTab'),
        accountSearchTabMenu:() => cy.get('#TabBar-SearchTab-Search_AccountSearch'),
        accountSearchAccountNumber:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchDV-AccountNumber'),
        accountSearchResults:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchResultsLV'),
        searchMenuLinksSearch_AccountSearch:() => cy.get('#Search-MenuLinks-Search_AccountSearch'),
        accountSearchSearchButton:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search')
    }

    searchByAccount(){
        tabBar.elements.moreOptions().click();
        this.elements.searchTab().click();
        this.elements.searchMenuLinksSearch_AccountSearch().click();
        this.elements.accountSearchAccountNumber().type(examples.accountNumber);
        this.elements.accountSearchSearchButton().click();
    }

    verifyAccount(){
        this.elements.accountSearchResults().find('tr').its('length').should('be.gt' , 1);
        // expect(this.elements.accountSearchResults().find('tr').its('length')).to.be.gt(1);
    }
}