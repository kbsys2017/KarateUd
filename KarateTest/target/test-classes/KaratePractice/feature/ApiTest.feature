 Scenario: Sample 3 Test
    Given url 'https://reqres.in/api/users/3'
    When method get
    Then status 200
    #* print response
    #* print response test
    #* print response test 3
    #* print response test 4
     #* print response test 5
     #* print response test 6
     #* print response test 7
    And match response == resultop[1]
    Then print 'result---',result
    * def first_name = result.response.data.first_name
    And match first_name == '#string'
    Then print 'first_name valus is --' , first_name
    Then print 'read yaml --' ,foo.url
