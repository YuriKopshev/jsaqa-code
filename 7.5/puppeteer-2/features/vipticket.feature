Feature: Reserve VIP ticket on Film 3
    Scenario: Should reserve VIP ticket
        Given user is on start page
        When user click on needs date 
        When user click on needs hall
        When user set place in VIP hall
        When user click on reserve VIP place
        And user sees next text "Вы выбрали билеты:"
        When user click on getCode and get QRcode
        Then user sees next message "Приятного просмотра!"