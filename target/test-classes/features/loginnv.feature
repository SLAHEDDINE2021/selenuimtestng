Feature: test the login fuctionnality

Scenario: login with valid username and valid password

Given  user open the website 
When  user enter the username and password and click login
Then user should be navigate to login page
And the url sould be 
