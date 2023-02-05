Feature: Account

    Anything related to the Account 

Background: 
    Given A user open the PolicyCenter
    And login using the username su and password gw

Scenario: Account Creation
    When creating a new Personal Account with the following details:
        | firstName     | Den                 |
        | lastName      | Denosta             |
        | email         | clouvis@yahoo.com   |
        | address1      | 3571 Burnside Court |
        | city          | Phoenix             |
        | state         | AZ                  |
        | zip           | 85001               |
        | addressType   | Home                |
    Then a previously created account should be displayed upon searching