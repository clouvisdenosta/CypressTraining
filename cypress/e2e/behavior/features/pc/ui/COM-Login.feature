@DesignatedFunction @common
Feature: Logging-in PolicyCenter

  @login
  Scenario Outline: Logging in PolicyCenter with a user <username>
    Given I log in PolicyCenter with <username> and <password>
    Then I log out

    Examples:
      | username      | password    |
      | aapplegate    | gw          |
      | ssmith        | gw          |