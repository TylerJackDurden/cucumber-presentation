Feature: Heroes panel
  As a user in heroes panel i would like to see, search and modify heroes list.

  Background:
    Given "heroes" page is open

  Scenario: I would like navigate to heroes panel and see the list
    Then I can see list of heroes

  Scenario Outline: When I select a here I would like to see hero details (all in table)
    When I click on "<hero_button>" hero
    Then I see "<hero_header>" details
    And I see "<id>" id

    Examples:
      | hero_button | hero_header | id  |
      | Mr. Nice    | Mr. Nice    | 11  |
      | Narco       | Narco       | 12  |
      | Bombasto    | Bombasto    | 13  |
      | Celeritas   | Celeritas   | 14  |
      | Magneta     | Magneta     | 15  |
      | RubberMan   | RubberMan   | 16  |
      | Dynama      | Dynama      | 17  |
      | Dr IQ       | Dr IQ       | 18  |
      | Magma       | Magma       | 19  |
      | Tornado     | Tornado     | 20  |
