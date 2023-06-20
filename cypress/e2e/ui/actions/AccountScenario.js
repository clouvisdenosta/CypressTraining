import { AccountFileSummary } from "../pages/Account/AccountFileSummary";
import { CreateAccountScreen } from "../pages/Account/CreateAccountScreen";
import { NewAccountScreen } from "../pages/Account/NewAccountScreen";
import { TabBar } from "../pages/TabBar/TabBar";
import world from "../util/world"

const newAccountScreen = new NewAccountScreen();
const createAccountScreen = new CreateAccountScreen();
const accountFileSummary = new AccountFileSummary();
const tabBar = new TabBar();

export class AccountScenario {

    // createNewAccount(accountInformation) {
    //     let details = accountInformation.rowsHash();
    //     tabBar.elements.accountTab().find('.gw-action--expand-button').click();
    //     tabBar.elements.accountTab_NewAccount().click();
    //     newAccountScreen.elements.newAccount_InputFirstName().type(details["firstName"]);
    //     newAccountScreen.elements.newAccount_InputLastName().type(details["lastName"]);
    //     newAccountScreen.elements.newAccount_searchButton().click();

    //     if(newAccountScreen.elements.newAccount_NewAccountSearchResultsLV().find('tr').should('have.length.greaterThan', 1)){
    //         newAccountScreen.elements.newAccount_NewAccountSearchResultsLV().find('div[id$=-AccountNumber_button]').invoke('text').then((value) => {
    //             examples.accountNumber = value;
    //         });
    //         newAccountScreen.elements.newAccount_NewAccountSearchResultsLV().find('div[id$=-AccountNumber_button]').click();
    //     }else{
    //         newAccountScreen.elements.newAccount_NewAccountButton().click();
    //         newAccountScreen.elements.newAccount_NewAccountButton_NewPerson().click();
    //         createAccountScreen.elements.primaryEmail().type(details["email"]);
    //         createAccountScreen.elements.address1().type(details["address1"]);
    //         createAccountScreen.elements.city().type(details["city"]);
    //         createAccountScreen.elements.addressType().find('select').select(details["addressType"]);
    //         createAccountScreen.elements.selectOrganization().click();
    //         createAccountScreen.elements.organizationName().type("Enigma");
    //         createAccountScreen.elements.organizationSearchButton().click();
    //         createAccountScreen.elements.organizationSearchResults().find('div[id$=-_Select]').click();
    //         createAccountScreen.elements.producerCode().find('select').select("Standard Code Internal Producer Code - 1");
    //         createAccountScreen.elements.update().click();
    //         accountFileSummary.elements.accountNumber().invoke('text').then((myValue) =>{
    //             examples.accountNumber = myValue;
    //         });
    //     }
    // }

    createNewAccount() {
        tabBar.elements.accountTab().find('.gw-action--expand-button').click();
        tabBar.elements.accountTab_NewAccount().click();
        newAccountScreen.elements.newAccount_InputFirstName().type(world.contact.firstName);
        newAccountScreen.elements.newAccount_InputLastName().type(this.randomString(10));
        newAccountScreen.elements.newAccount_searchButton().click();
        newAccountScreen.elements.newAccount_NewAccountButton().click();
        newAccountScreen.elements.newAccount_NewAccountButton_NewPerson().click();
        createAccountScreen.elements.primaryEmail().type(world.contact.email);
        createAccountScreen.elements.address1().type(world.contact.address1);
        createAccountScreen.elements.city().type(world.contact.city);
        createAccountScreen.elements.state().find('select').select("Arizona");
        createAccountScreen.elements.zipCode().type("85001");
        createAccountScreen.elements.addressType().find('select').select("Home");
        createAccountScreen.elements.selectOrganization().click();
        createAccountScreen.elements.organizationName().find('input').type("Enigma");
        createAccountScreen.elements.organizationSearchButton().click();
        createAccountScreen.elements.organizationSearchResults().find('div[id$=-_Select]').click();
        createAccountScreen.elements.producerCode().find('select').select("Standard Code Internal Producer Code - 1");
        createAccountScreen.elements.update().click();
        accountFileSummary.elements.accountNumber().invoke('text').then((myValue) => {
            world.accountNumber = myValue;
        });
    }

    randomString(length){
        var rdmString = "";
        var character = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        var charLength = character.length;
        for (var i = 0; i < length; i++) { rdmString += character.charAt(Math.floor(Math.random() * charLength)); }
        return rdmString;
    }
}
