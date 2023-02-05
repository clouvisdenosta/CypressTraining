import testdata from "../../utils/testdata";
import { AccountFileSummary } from "./AccountFileSummary";
const accountFileSummary = new AccountFileSummary();

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
    

    inputRequiredFields(accountInformation){
        let details = accountInformation.rowsHash();
        this.elements.primaryEmail().type(details["email"]);
        this.elements.address1().type(details["address1"]);
        this.elements.city().type(details["city"]);
        this.elements.addressType().find('select').select(details["addressType"]);
        this.elements.selectOrganization().click();
        this.elements.organizationName().type("Enigma");
        this.elements.organizationSearchButton().click();
        this.elements.organizationSearchResults().find('div[id$=-_Select]').click();
        this.elements.producerCode().find('select').select("Standard Code Internal Producer Code - 1");
        this.elements.update().click();
        testdata.accountNumber = accountFileSummary.elements.accountNumber().find('.gw-value-readonly-wrapper').invoke('text');
        cy.log(testdata.accountNumber);
        // cy.pause();
    }    
}