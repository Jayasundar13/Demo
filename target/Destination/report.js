$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/D.feature");
formatter.feature({
  "name": "Verifying the Adactin functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login details with RoomType",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with RoomType",
  "keyword": "Given "
});
formatter.step({
  "name": "User login using with RoomType\"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should search using with RoomType\"\u003cLocation\u003e\" , \"\u003cHotels\u003e\" , \"\u003cRoomType\u003e\" ,\t\"\u003cNumberofRooms\u003e\" , \"\u003cCheckInDate\u003e\" , \"\u003cCheckOutDate\u003e\" , \"\u003cAdultsperRoom\u003e\" and \"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select hotel with RoomType",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel using with RoomType\"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cBillingAddress\u003e\" ,\"\u003cCreditCardNo\u003e\" , \"\u003cCreditCardType\u003e\" , \"\u003cExpiryMonth\u003e\" , \"\u003cExpiryYear\u003e\" and \"\u003cCVVNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the id with RoomType\"\u003cOrderId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "selecthotel",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVVNumber",
        "OrderId"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login details with RoomType",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with RoomType",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with RoomType\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_RoomType_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with RoomType\"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with RoomType",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with RoomType\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with RoomType\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_RoomType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with RoomType",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with RoomType",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with RoomType\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_RoomType_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with RoomType\"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with RoomType",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with RoomType\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with RoomType\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_RoomType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with RoomType",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with RoomType",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with RoomType\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_RoomType_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with RoomType\"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with RoomType",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with RoomType\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with RoomType\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_RoomType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with RoomType",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with RoomType",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with RoomType\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_RoomType_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with RoomType\"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with RoomType",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_RoomType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with RoomType\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_RoomType_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with RoomType\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_RoomType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.step({
  "name": "User login using with NumberOfRooms\"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"\u003cLocation\u003e\" , \"\u003cHotels\u003e\" , \"\u003cRoomType\u003e\" ,\t\"\u003cNumberofRooms\u003e\" , \"\u003cCheckInDate\u003e\" , \"\u003cCheckOutDate\u003e\" , \"\u003cAdultsperRoom\u003e\" and \"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cBillingAddress\u003e\" ,\"\u003cCreditCardNo\u003e\" , \"\u003cCreditCardType\u003e\" , \"\u003cExpiryMonth\u003e\" , \"\u003cExpiryYear\u003e\" and \"\u003cCVVNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"\u003cOrderId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "selecthotel",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVVNumber",
        "OrderId"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "2",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "3",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "4",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "5",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "6",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "7",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "8",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "9",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "10",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"2\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"3\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"4\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"5\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"6\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"7\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"8\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"9\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with NumberOfRooms",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with NumberOfRooms",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with NumberOfRooms\"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_NumberOfRooms_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with NumberOfRooms\"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"10\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with NumberOfRooms",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_NumberOfRooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with NumberOfRooms\"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_NumberOfRooms_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with NumberOfRooms\"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_NumberOfRooms(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login details with AdultsPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with AdultsPerRoom",
  "keyword": "Given "
});
formatter.step({
  "name": "User login using with AdultsPerRoom \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should search using with AdultsPerRoom \"\u003cLocation\u003e\" , \"\u003cHotels\u003e\" , \"\u003cRoomType\u003e\" ,\t\"\u003cNumberofRooms\u003e\" , \"\u003cCheckInDate\u003e\" , \"\u003cCheckOutDate\u003e\" , \"\u003cAdultsperRoom\u003e\" and \"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select hotel with AdultsPerRoom",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel using with AdultsPerRoom \"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cBillingAddress\u003e\" ,\"\u003cCreditCardNo\u003e\" , \"\u003cCreditCardType\u003e\" , \"\u003cExpiryMonth\u003e\" , \"\u003cExpiryYear\u003e\" and \"\u003cCVVNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the id with AdultsPerRoom \"\u003cOrderId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "selecthotel",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVVNumber",
        "OrderId"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "1",
        "24/08/2020",
        "25/08/2020",
        "2",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "3",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "4",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login details with AdultsPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with AdultsPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with AdultsPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_AdultsPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with AdultsPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with AdultsPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with AdultsPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with AdultsPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_AdultsPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with AdultsPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with AdultsPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with AdultsPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_AdultsPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with AdultsPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"2\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with AdultsPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with AdultsPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with AdultsPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_AdultsPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with AdultsPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with AdultsPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with AdultsPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_AdultsPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with AdultsPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"3\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with AdultsPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with AdultsPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with AdultsPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_AdultsPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with AdultsPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with AdultsPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with AdultsPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_AdultsPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with AdultsPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"4\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with AdultsPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_AdultsPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with AdultsPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_AdultsPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with AdultsPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_AdultsPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"\u003cLocation\u003e\" , \"\u003cHotels\u003e\" , \"\u003cRoomType\u003e\" ,\t\"\u003cNumberofRooms\u003e\" , \"\u003cCheckInDate\u003e\" , \"\u003cCheckOutDate\u003e\" , \"\u003cAdultsperRoom\u003e\" and \"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cBillingAddress\u003e\" ,\"\u003cCreditCardNo\u003e\" , \"\u003cCreditCardType\u003e\" , \"\u003cExpiryMonth\u003e\" , \"\u003cExpiryYear\u003e\" and \"\u003cCVVNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"\u003cOrderId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "selecthotel",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVVNumber",
        "OrderId"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "0",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "1",
        "24/08/2020",
        "25/08/2020",
        "2",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "3",
        "2",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "4",
        "3",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "4",
        "4",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_ChildrenPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_ChildrenPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_ChildrenPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"2\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_ChildrenPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_ChildrenPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"3\" and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_ChildrenPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_ChildrenPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"4\" and \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_ChildrenPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with ChildrenPerRoom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with ChildrenPerRoom",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with ChildrenPerRoom \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_ChildrenPerRoom_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with ChildrenPerRoom \"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"4\" and \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with ChildrenPerRoom",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_ChildrenPerRoom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with ChildrenPerRoom \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_ChildrenPerRoom_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with ChildrenPerRoom \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_ChildrenPerRoom(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login details with CreditCardNo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with CreditCardNo",
  "keyword": "Given "
});
formatter.step({
  "name": "User login using with CreditCardNo \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should search using with CreditCardNo \"\u003cLocation\u003e\" , \"\u003cHotels\u003e\" , \"\u003cRoomType\u003e\" ,\t\"\u003cNumberofRooms\u003e\" , \"\u003cCheckInDate\u003e\" , \"\u003cCheckOutDate\u003e\" , \"\u003cAdultsperRoom\u003e\" and \"\u003cChildrenperRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should select hotel with CreditCardNo",
  "keyword": "And "
});
formatter.step({
  "name": "User should book hotel using with CreditCardNo \"\u003cFirstName\u003e\" , \"\u003cLastName\u003e\" , \"\u003cBillingAddress\u003e\" ,\"\u003cCreditCardNo\u003e\" , \"\u003cCreditCardType\u003e\" , \"\u003cExpiryMonth\u003e\" , \"\u003cExpiryYear\u003e\" and \"\u003cCVVNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should print the id with CreditCardNo \"\u003cOrderId\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsperRoom",
        "ChildrenperRoom",
        "selecthotel",
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CreditCardType",
        "ExpiryMonth",
        "ExpiryYear",
        "CVVNumber",
        "OrderId"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Standard",
        "1",
        "24/08/2020",
        "25/08/2020",
        "1",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "VISA",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Double",
        "1",
        "24/08/2020",
        "25/08/2020",
        "2",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "AMEX",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "3",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "MAST",
        "April",
        "2020",
        "2222",
        "value"
      ]
    },
    {
      "cells": [
        "jayasundar13",
        "Mugunth13@",
        "Melbourne",
        "Hotel Sunshine",
        "Super Deluxe",
        "1",
        "24/08/2020",
        "25/08/2020",
        "4",
        "1",
        "selecthotel",
        "Mugunthan",
        "Balachandran",
        "chennai",
        "1234567891234567",
        "OTHR",
        "April",
        "2020",
        "2222",
        "value"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login details with CreditCardNo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with CreditCardNo",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with CreditCardNo \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_CreditCardNo_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with CreditCardNo \"Melbourne\" , \"Hotel Sunshine\" , \"Standard\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"1\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with CreditCardNo",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with CreditCardNo \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"VISA\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with CreditCardNo \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_CreditCardNo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with CreditCardNo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with CreditCardNo",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with CreditCardNo \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_CreditCardNo_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with CreditCardNo \"Melbourne\" , \"Hotel Sunshine\" , \"Double\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"2\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with CreditCardNo",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with CreditCardNo \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"AMEX\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with CreditCardNo \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_CreditCardNo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with CreditCardNo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with CreditCardNo",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with CreditCardNo \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_CreditCardNo_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with CreditCardNo \"Melbourne\" , \"Hotel Sunshine\" , \"Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"3\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with CreditCardNo",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with CreditCardNo \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"MAST\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with CreditCardNo \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_CreditCardNo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin login details with CreditCardNo",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Adactin page with CreditCardNo",
  "keyword": "Given "
});
formatter.match({
  "location": "D.user_is_on_the_Adactin_page_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login using with CreditCardNo \"jayasundar13\" and \"Mugunth13@\"",
  "keyword": "When "
});
formatter.match({
  "location": "D.user_login_using_with_CreditCardNo_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search using with CreditCardNo \"Melbourne\" , \"Hotel Sunshine\" , \"Super Deluxe\" ,\t\"1\" , \"24/08/2020\" , \"25/08/2020\" , \"4\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_search_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select hotel with CreditCardNo",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_select_hotel_with_CreditCardNo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should book hotel using with CreditCardNo \"Mugunthan\" , \"Balachandran\" , \"chennai\" ,\"1234567891234567\" , \"OTHR\" , \"April\" , \"2020\" and \"2222\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_book_hotel_using_with_CreditCardNo_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should print the id with CreditCardNo \"value\"",
  "keyword": "And "
});
formatter.match({
  "location": "D.user_should_print_the_id_with_CreditCardNo(String)"
});
formatter.result({
  "status": "passed"
});
});