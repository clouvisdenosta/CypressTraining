import { LoginScreen } from "./pages/LoginScreen"
const loginScreen = new LoginScreen()

describe("Login", () => {
    it("login with valid credentials", () => {
        cy.visit("http://localhost:8180/pc/PolicyCenter.do")
        cy.get("#Login-LoginScreen-LoginDV-username").type("ssmith")
        cy.get("#Login-LoginScreen-LoginDV-password").type("gw")
        cy.get("#Login-LoginScreen-LoginDV-submit").click()
        cy.get("#Underwriter_MySummary-ttlBar").exists
    })
    it("login with wrong credentials", () => {
        cy.visit("http://localhost:8180/pc/PolicyCenter.do")
        cy.get("#Login-LoginScreen-LoginDV-username").type("smith")
        cy.get("#Login-LoginScreen-LoginDV-password").type("gw")
        cy.get("#Login-LoginScreen-LoginDV-submit").click()
        cy.get('#Login-LoginScreen-LoginFormMessage').contains("Your username or password may be incorrect. Please try again. If the problem persists, please contact your administrator.")
    })
})