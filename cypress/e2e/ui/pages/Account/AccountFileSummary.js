export class AccountFileSummary {
    elements = {
        accountNumber:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber'),
        accountHolder:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder'),
        accountDetails:() => cy.get('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile')
    }
}