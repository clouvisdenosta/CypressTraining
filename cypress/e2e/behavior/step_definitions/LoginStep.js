import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginScenario } from "../../ui/actions/LoginScenario";
const loginScenario = new LoginScenario();

Given('A user open the PolicyCenter', () =>{
    cy.visit("http://3.17.237.109:8180/pc/PolicyCenter.do");
});

When('A user enter the username {string} and password {string}', (username, password) =>{
    loginScenario.login(username, password);
});

When('A user clicks on the login button', () =>{
    loginScenario.clickLogin();
});

Then('verify if the {string} page is displayed', () =>{
    loginScenario.verifySuccessfullyLogin();
});

Then(/^verify if the error message displayed$/, () =>{
    loginScenario.verifyLoginErrorMsg();
});

Given(/^login using the username (.*) and password (.*)$/, (username, password) =>{
    loginScenario.login(username, password);
    loginScenario.clickLogin();
});

Given(/^I log in PolicyCenter with (.*) and (.*)$/, (username, password) =>{
    loginScenario.login(username, password);
});

Then('I log out', () =>{
    loginScenario.logout();
});

Given('I am a user with the Producer role', () => {
    loginScenario.login("aapplegate", "gw");
});
