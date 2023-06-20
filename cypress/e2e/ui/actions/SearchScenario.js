import { AccountFileSummary } from "../pages/Account/AccountFileSummary";
import { Search } from "../pages/TabBar/Search";
import world from "../util/world";

const search = new Search();
const accountFileSummary = new AccountFileSummary();
export class SearchScenario {
    searchByIdentifier(searchIdentifier, identifier){
        cy.log(identifier);
        cy.log(searchIdentifier);
        search.elements.searchTab().click();
        if(searchIdentifier == "account"){
            if(identifier == "Account Number"){
                search.elements.searchMenuLinksSearch_AccountSearch().click();
                search.elements.accountSearchAccountNumber().type(world.accountNumber);
                search.elements.accountSearchSearchButton().click();
                cy.log(world.accountNumber);
            }
        }
        if(searchIdentifier == "policy"){
            if(identifier == "Policy Number"){
                
            }
        }
    }

    verifySearchResults(identifier){
        if(identifier == "Account"){
            search.elements.accountSearchResults().find('tr').its('length').should('be.gt' , 1);
        }
        else if(identifier == "Policy"){
            
        }
    }

    viewAccountOverview(){
        search.elements.accountSearchResults().find('td[id$=-AccountNumber_Cell]').find('div[id$=-AccountNumber]').click();
        accountFileSummary.elements.accountDetails().should('be.visible');
    }
}