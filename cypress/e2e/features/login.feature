Feature: Login
Background: 
    Given A user open the PolicyCenter

#positive testing
Scenario: Log-in with valid credentials
    When A user enter the username "ssmith" and password "gw"
    And  A user clicks on the login button
    Then verify if the "My Summary" page is displayed

#negative testing
Scenario: Log-in with wrong credentials
    When A user enter the username "test" and password "gw"
    And  A user clicks on the login button
    Then verify if the error message displayed