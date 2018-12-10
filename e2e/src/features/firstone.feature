Feature: firstone
 Jako uzytkownik chce po nacisnieciu przycisku na dashbordzie zobaczyc liste herosow.

  Background:
    Given Dashboard page is open

  Scenario: Simple Google search for pandas
    When I click on Heroes button
    Then I can see list of heroes

