import { TabBar } from "../TabBar/TabBar";
const tabBar = new TabBar();
export class AccountFileSummary {

    elements = {
        accountNumber:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber')
    }

    // searchAccount() {
    //     testdata.accountNumber = this.elements.accountNumber().get('.gw-value-readonly-wrapper');
    //     tabBar.elements.accountTab().find('.gw-action--expand-button').click();
    //     tabBar.elements.searchItem().type(testdata.accountNumber);

    // }
}