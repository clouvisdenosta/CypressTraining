export class AccountFileSummary {
    elements = {
        accountNumber:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber'),
        accountDetails:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile')
    }
}