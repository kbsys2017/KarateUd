Feature: Web ui Testing

Scenario: testing the web ui

Given driver 'https://www.seleniumeasy.com/test/basic-first-form-demo.html'
#And waitFor('user-message')
And input('#user-message','testwwwwwwwwwwwwwwww')


And click('#get-input')
And match text('#display') == 'testwwwwwwwwwwwwwwww'

