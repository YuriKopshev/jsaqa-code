Feature: Reserve ticket by Logan film
    Scenario: Should success reserve ticket
        Given user is on start page
        When user click on need hall
        When user set place in hall
        When user click on submit button
        Then user sees text "Вы выбрали билеты:"
        When user click on get QR code button
        Then user sees message "Приятного просмотра!"
    
    Scenario: Should success reserve VIP ticket
        Given user is on start page
        When user click on needs date 
        When user choose need hall
        When user set place in VIP hall
        When user click on submit button
        Then user sees text "Вы выбрали билеты:"
        