export class Search {

    elements = {
        searchTab:() => cy.get('#TabBar-SearchTab'),
        accountSearchTabMenu:() => cy.get('#TabBar-SearchTab-Search_AccountSearch'),
        accountSearchAccountNumber:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchDV-AccountNumber'),
        accountSearchResults:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchResultsLV'),
        searchMenuLinksSearch_AccountSearch:() => cy.get('#Search-MenuLinks-Search_AccountSearch'),
        accountSearchSearchButton:() => cy.get('#AccountSearch-AccountSearchScreen-AccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search')
    }
}