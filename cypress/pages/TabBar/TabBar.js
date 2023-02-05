export class TabBar{
    elements = {
        accountTab:() => cy.get('#TabBar-AccountTab'),
        accountTab_NewAccount:() => cy.get('#TabBar-AccountTab-AccountTab_NewAccount'),
        searchItem:() => cy.get('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem'),
        moreOptions:() => cy.get('#TabBarWidget--more-options')
    }

    selectNewAccount() {
        this.elements.accountTab().find('.gw-action--expand-button').click();
        this.elements.accountTab_NewAccount().click();
    }
}