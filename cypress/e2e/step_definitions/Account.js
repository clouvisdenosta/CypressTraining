import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CreateAccountScreen } from "../../pages/Account/CreateAccountScreen";
import { NewAccountScreen } from "../../pages/Account/NewAccountScreen";
import { Search } from "../../pages/TabBar/Search";
import { TabBar } from "../../pages/TabBar/TabBar";
const tabBar = new TabBar();
const newAccountScreen = new NewAccountScreen();
const createAccountScreen = new CreateAccountScreen();
const search = new Search();

When('creating a new Personal Account with the following details:', (table) =>{
    tabBar.selectNewAccount();
    newAccountScreen.createNewAccount(table);
    // createAccountScreen.inputRequiredFields(table);
});

When('i search the previously created account', () =>{
    search.searchByAccount();
});

Then('a previously created account should be displayed upon searching', () =>{
    search.verifyAccount();
});