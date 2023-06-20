import { LoginScreen } from "../pages/LoginScreen";

const loginScreen = new LoginScreen();

export class LoginScenario {

    login(username, password){
        cy.visit("http://3.17.237.109:8180/pc/PolicyCenter.do");
        loginScreen.elements.username().type(username);
        loginScreen.elements.password().type(password);
        loginScreen.elements.submitButton().click();
    }

    verifySuccessfullyLogin(){
        expect(loginScreen.elements.summary().find('.gw-TitleBar--title')).exist;
    }

    verifyLoginErrorMsg(){
        expect(loginScreen.elements.loginError()).to.exist;
    }

    logout(){
        loginScreen.elements.settings().click();
        loginScreen.elements.logout().click();
    }
}