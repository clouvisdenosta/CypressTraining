import { LoginScreen } from "../../pages/LoginScreen";
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginScreen = new LoginScreen();

Given('A user open the PolicyCenter', () =>{
    cy.visit("http://localhost:8180/pc/PolicyCenter.do");
});

When('A user enter the username {string} and password {string}', (username, password) =>{
    loginScreen.login(username, password);
});

When('A user clicks on the login button', () =>{
    loginScreen.clickLogin();
});

Then('verify if the {string} page is displayed', (pageName) =>{
    loginScreen.verifySuccessfullyLogin(pageName);
});

Then(/^verify if the error message displayed$/, () =>{
    loginScreen.verifyLoginErrorMsg();
});

Given(/^login using the username (.*) and password (.*)$/, (username, password) =>{
    loginScreen.login(username, password);
    loginScreen.clickLogin();
});
