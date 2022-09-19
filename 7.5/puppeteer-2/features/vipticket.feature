Feature: Reserve VIP ticket on Film 3
    Scenario: Should reserve VIP ticket
        Given user is on page
        When user click on needs date 
        When user click on needs hall
        When user set place "div.buying-scheme__wrapper > div:nth-child(3) > span.buying-scheme__chair.buying-scheme__chair_vip" in VIP hall
        When user click on submit button
        And user sees next text "Вы выбрали билеты:"
        And user click on submit button
        Then user sees next message "Приятного просмотра!"