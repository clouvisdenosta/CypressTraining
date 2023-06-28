@DesignatedFunction @common
Feature: Viewing Account Summary

  Background:
    Given I am a user with the Producer role

  @view_account_summary
  Scenario: Viewing an account overview
    Given a Personal account
    When I search for that "account" using its "Account Number"
    Then the "Account" is found
    And I can find an overview of the account