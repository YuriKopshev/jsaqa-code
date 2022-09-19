Feature: Reserve ticket by Logan film
    Scenario: Should reserve ticket
        Given user is on start page
        When user click on need hall
        When user set place "div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(3)" in hall
        When user click on submit button
        And user sees text "Вы выбрали билеты:"
        And user click on submit button
        Then user sees message "Приятного просмотра!"
