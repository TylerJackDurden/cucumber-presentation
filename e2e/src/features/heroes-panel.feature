Feature: Heroes details
  As a USER I would like to choose hero form hero list and check his details

  Background:
    Given "dashboard" page is open

  Scenario: I would like navigate to heroes panel and see the list
    When I click on Heroes button
    Then I can see list of heroes

  Scenario: When I select a MAGNETA hero I would like to see her details
    When I click on Heroes button
    When I click on "Magneta" hero
    Then I see "Magneta" details
    And I see "15" id

  # Scenario: When I select a BOMBASTO hero I would like to see his details
  #   When I click on Heroes button
  #   When I click on "Bombasto" hero
  #   Then I see "Bombasto" details
  #   And I see "13" id