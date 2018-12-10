Feature: Heroes panel
 As a user in heroes panel i would like to see, search and modify heroes list.

  Background:
    Given "heroes" page is open

  Scenario: I would like navigate to heroes panel and see the list
    Then I can see list of heroes

  Scenario: When I select a Dynama hero I would like to see Dynama details
    And I click on "Dynama" hero
    Then I see "Dynama" details

  Scenario: When I select Narco hero I would like to see Narco details
    And I click on "Narco" hero
    Then I see "Narco" details

