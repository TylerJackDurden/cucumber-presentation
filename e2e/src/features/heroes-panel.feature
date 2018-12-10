Feature: Heroes panel
 As a user in heroes panel i would like to see, search and modify heroes list.

  Background:
    Given Dashboard page is open

  Scenario: I would like navigate to heroes panel and see the list
    When I click on Heroes button
    Then I can see list of heroes

  Scenario: When I select a hero I would like to see his details
    When I click on Heroes button
    And I click on Magenta hero
    Then I see Magenta details

