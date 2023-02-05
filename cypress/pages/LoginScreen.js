export class LoginScreen {

    elements = {
        username: () => cy.get("#Login-LoginScreen-LoginDV-username"),
        password: () => cy.get("#Login-LoginScreen-LoginDV-password"),
        submitButton: () => cy.get("#Login-LoginScreen-LoginDV-submit"),
        summary: () => cy.get("#Underwriter_MySummary-ttlBar"),
        loginError: () => cy.get('#Login-LoginScreen-LoginFormMessage')
    }
   
    login(username, password){
        this.elements.username().type(username);
        this.elements.password().type(password);
    }

    clickLogin(){
        this.elements.submitButton().click();
    }

    verifySuccessfullyLogin(pageName){
        expect(this.elements.summary().find('.gw-TitleBar--title')).exist;
    }

    verifyLoginErrorMsg(){
        expect(this.elements.loginError()).to.exist;
    }

}