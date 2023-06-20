export class LoginScreen {
    
    elements = {
        username: () => cy.get("#Login-LoginScreen-LoginDV-username"),
        password: () => cy.get("#Login-LoginScreen-LoginDV-password"),
        submitButton: () => cy.get("#Login-LoginScreen-LoginDV-submit"),
        summary: () => cy.get("#Underwriter_MySummary-ttlBar"),
        loginError: () => cy.get('#Login-LoginScreen-LoginFormMessage'),
        settings: () => cy.get("#gw-TabBarWidget--settings"),
        logout: () => cy.get("#TabBar-LogoutTabBarLink")
    }
}