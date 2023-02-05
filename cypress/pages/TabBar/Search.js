import testdata from "../../utils/testdata";
import { TabBar } from "./TabBar";

const tabBar = new TabBar();
export class Search {

    elements = {
        searchTab:() => cy.get('#TabBar-SearchTab'),
        accountSearchTabMenu:() => cy.get('#TabBar-SearchTab-Search_AccountSearch'),
        accountSearchAccountNumber:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchDV-AccountNumber'),
        accountSearchResults:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchResultsLV'),
        searchMenuLinksSearch_AccountSearch:() => cy.get('#Search-MenuLinks-Search_AccountSearch')
    }

    searchByAccount(){
        tabBar.elements.moreOptions().click();
        this.elements.searchTab().click();
        this.elements.searchMenuLinksSearch_AccountSearch().click();
        this.elements.accountSearchAccountNumber().type(testdata.accountNumber);
        // expect(this.elements.accountSearchResults().find('tr')).gt(1);
    }
}