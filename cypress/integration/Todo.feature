Feature: Todos

  Scenario: เพิ่ม task
    Given I open todo page
    When I input title "Meeting"
    And I input description "learning something"
    And I click เพิ่มTask
    Then I see "Meeting" on task list
