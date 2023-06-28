@DesignatedFunction @common
Feature: Account Search

  Background:
    Given I am a user with the Producer role

  @account_search
  Scenario: Search for an account using Account Number
    Given a Personal account
    When I search for that "account" using its "Account Number"
    Then the "Account" is found

  @account_search
  Scenario: Search for an account using account holder's First and Last name
    Given a Personal account
    When I search for that account with the account holder's first and last name
    Then the "Account" is found