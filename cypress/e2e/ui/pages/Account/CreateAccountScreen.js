export class CreateAccountScreen {
    elements = {
        primaryEmail:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-EmailAddress1'),
        address1:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1'),
        city:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City'),
        state:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State'),
        zipCode:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode'),
        addressType:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType'),
        selectOrganization:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer-SelectOrganization'),
        producerCode:() => cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode'),
        update:() => cy.get('#CreateAccount-CreateAccountScreen-Update'),
        organizationName:() => cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-GlobalContactNameInputSet-Name'),
        organizationSearchButton:() => cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search'),
        organizationSearchResults:() => cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchResultsLV')
    }
    
    
    // inputRequiredFields(accountInformation){
    //     let details = accountInformation.rowsHash();
    //     this.primaryEmail.type(details["email"]);
    //     this.address1.type(details["address1"]);
    //     this.city.type(details["city"]);
    //     this.addressType.find('select').select(details["addressType"]);
    //     this.selectOrganization.click();
    //     this.organizationName.type("Enigma");
    //     this.organizationSearchButton.click();
    //     this.organizationSearchResults.find('div[id$=-_Select]').click();
    //     this.producerCode.find('select').select("Standard Code Internal Producer Code - 1");
    //     this.update.click();
    //     accountFileSummary.accountNumber.invoke('text').then((myValue) =>{
    //         cy.log(myValue);
    //         examples.accountNumber = myValue;
    //     });
    // } 
}