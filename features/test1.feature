Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  @test
  Scenario: POST request for the SampleAPI /SampleAPI/notification endpoint
    Given I authenticate to the Sample API
    And I prepare a request with "default" header and body as "notifications"
    When I send a POST request to the "/notification" endpoint
    Then I should get "status" field as "200"

  @test
  Scenario: POST request for fail scenario of the SampleAPI /SampleAPI/notification endpoint
    Given I authenticate to the Sample API
    And I prepare a request with "default" header and body as "notifications"
    When I send a POST request to the "/notification" endpoint
    Then I should get "status" field as "201"

  Scenario: GET request for another WorldClockAPI /est/now endpoint
    Given I authenticate to the WorldClockAPI
    When I send a GET request to the "/est/now" endpoint
    Then I should get "timeZoneName" field as "Eastern Standard Time"
