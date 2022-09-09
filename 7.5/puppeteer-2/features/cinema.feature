Feature: Reserve ticket by Logan film
    Scenario: Should reserve ticket
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user click on need hall
        When user set place in hall
        When user click on reserve
        And user sees text "Вы выбрали билеты:"
        When user click on getCode
        Then user sees message "Приятного просмотра!"
