Feature: verify the text in the home page

     Scenario Outline: validate tittle

            Given I Initialize the browser with chrome
            And I Navigate to "http://qaclickacademy.com" Site
           When I check the text message in the page
           Then the text message is equal "Features"
           And close browsers

