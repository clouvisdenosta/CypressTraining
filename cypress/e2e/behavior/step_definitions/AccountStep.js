import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AccountScenario } from "../../ui/actions/AccountScenario";
import { SearchScenario } from "../../ui/actions/SearchScenario";

const accountScenario = new AccountScenario();
const searchScenario = new SearchScenario();

Given('a Personal account', () =>{
    accountScenario.createNewAccount();
});

When('I search for that {string} using its {string}', (searchIdentifier, identifier) => {
    cy.log(searchIdentifier, identifier);
    searchScenario.searchByIdentifier(searchIdentifier, identifier);
});

Then('the {string} is found', identifier => {
    searchScenario.verifySearchResults(identifier);
});

Then('I can find an overview of the account', () =>{
    searchScenario.viewAccountOverview();
});

When("I search for that account with the account holder's first and last name", () => {
    searchScenario.searchByFirstAndLastName();
});