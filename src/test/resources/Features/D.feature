Feature: Verifying the Adactin functionalities
@Reg	
Scenario Outline: Verifying Adactin login details with RoomType
	Given User is on the Adactin page with RoomType
	When User login using with RoomType"<username>" and "<password>" 
	And User should search using with RoomType"<Location>" , "<Hotels>" , "<RoomType>" ,	"<NumberofRooms>" , "<CheckInDate>" , "<CheckOutDate>" , "<AdultsperRoom>" and "<ChildrenperRoom>"
	And User should select hotel with RoomType
	And User should book hotel using with RoomType"<FirstName>" , "<LastName>" , "<BillingAddress>" ,"<CreditCardNo>" , "<CreditCardType>" , "<ExpiryMonth>" , "<ExpiryYear>" and "<CVVNumber>"
	And User should print the id with RoomType"<OrderId>"

	Examples:
	|username|password|Location|Hotels|RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|selecthotel|FirstName|LastName|BillingAddress|CreditCardNo|CreditCardType|ExpiryMonth|ExpiryYear|CVVNumber|OrderId|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
@Smoke
Scenario Outline: Verifying Adactin login details with NumberOfRooms
	Given User is on the Adactin page with NumberOfRooms
	When User login using with NumberOfRooms"<username>" and "<password>" 
	And User should search using with NumberOfRooms"<Location>" , "<Hotels>" , "<RoomType>" ,	"<NumberofRooms>" , "<CheckInDate>" , "<CheckOutDate>" , "<AdultsperRoom>" and "<ChildrenperRoom>"
	And User should select hotel with NumberOfRooms
	And User should book hotel using with NumberOfRooms"<FirstName>" , "<LastName>" , "<BillingAddress>" ,"<CreditCardNo>" , "<CreditCardType>" , "<ExpiryMonth>" , "<ExpiryYear>" and "<CVVNumber>"
	And User should print the id with NumberOfRooms"<OrderId>"

	Examples:
	|username|password|Location|Hotels|RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|selecthotel|FirstName|LastName|BillingAddress|CreditCardNo|CreditCardType|ExpiryMonth|ExpiryYear|CVVNumber|OrderId|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|2|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|3|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|4|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|5|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|6|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|7|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|8|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|9|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|10|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
@Sanity
Scenario Outline: Verifying Adactin login details with AdultsPerRoom
	Given User is on the Adactin page with AdultsPerRoom
	When User login using with AdultsPerRoom "<username>" and "<password>" 
	And User should search using with AdultsPerRoom "<Location>" , "<Hotels>" , "<RoomType>" ,	"<NumberofRooms>" , "<CheckInDate>" , "<CheckOutDate>" , "<AdultsperRoom>" and "<ChildrenperRoom>"
	And User should select hotel with AdultsPerRoom
	And User should book hotel using with AdultsPerRoom "<FirstName>" , "<LastName>" , "<BillingAddress>" ,"<CreditCardNo>" , "<CreditCardType>" , "<ExpiryMonth>" , "<ExpiryYear>" and "<CVVNumber>"
	And User should print the id with AdultsPerRoom "<OrderId>"

	Examples:
	|username|password|Location|Hotels|RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|selecthotel|FirstName|LastName|BillingAddress|CreditCardNo|CreditCardType|ExpiryMonth|ExpiryYear|CVVNumber|OrderId|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|1|24/08/2020|25/08/2020|2|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|1|24/08/2020|25/08/2020|3|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|1|24/08/2020|25/08/2020|4|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
@E2E
Scenario Outline: Verifying Adactin login details with ChildrenPerRoom
	Given User is on the Adactin page with ChildrenPerRoom
	When User login using with ChildrenPerRoom "<username>" and "<password>" 
	And User should search using with ChildrenPerRoom "<Location>" , "<Hotels>" , "<RoomType>" ,	"<NumberofRooms>" , "<CheckInDate>" , "<CheckOutDate>" , "<AdultsperRoom>" and "<ChildrenperRoom>"
	And User should select hotel with ChildrenPerRoom
	And User should book hotel using with ChildrenPerRoom "<FirstName>" , "<LastName>" , "<BillingAddress>" ,"<CreditCardNo>" , "<CreditCardType>" , "<ExpiryMonth>" , "<ExpiryYear>" and "<CVVNumber>"
	And User should print the id with ChildrenPerRoom "<OrderId>"

	Examples:
	|username|password|Location|Hotels|RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|selecthotel|FirstName|LastName|BillingAddress|CreditCardNo|CreditCardType|ExpiryMonth|ExpiryYear|CVVNumber|OrderId|	
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|1|24/08/2020|25/08/2020|1|0|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|1|24/08/2020|25/08/2020|2|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|1|24/08/2020|25/08/2020|3|2|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|1|24/08/2020|25/08/2020|4|3|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|1|24/08/2020|25/08/2020|4|4|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	
Scenario Outline: Verifying Adactin login details with CreditCardNo
	Given User is on the Adactin page with CreditCardNo
	When User login using with CreditCardNo "<username>" and "<password>" 
	And User should search using with CreditCardNo "<Location>" , "<Hotels>" , "<RoomType>" ,	"<NumberofRooms>" , "<CheckInDate>" , "<CheckOutDate>" , "<AdultsperRoom>" and "<ChildrenperRoom>"
	And User should select hotel with CreditCardNo
	And User should book hotel using with CreditCardNo "<FirstName>" , "<LastName>" , "<BillingAddress>" ,"<CreditCardNo>" , "<CreditCardType>" , "<ExpiryMonth>" , "<ExpiryYear>" and "<CVVNumber>"
	And User should print the id with CreditCardNo "<OrderId>"

	Examples:
	|username|password|Location|Hotels|RoomType|NumberofRooms|CheckInDate|CheckOutDate|AdultsperRoom|ChildrenperRoom|selecthotel|FirstName|LastName|BillingAddress|CreditCardNo|CreditCardType|ExpiryMonth|ExpiryYear|CVVNumber|OrderId|	
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Standard|1|24/08/2020|25/08/2020|1|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|VISA|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Double|1|24/08/2020|25/08/2020|2|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|AMEX|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Deluxe|1|24/08/2020|25/08/2020|3|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|MAST|April|2020|2222|value|
	|jayasundar13|Mugunth13@|Melbourne|Hotel Sunshine|Super Deluxe|1|24/08/2020|25/08/2020|4|1|selecthotel|Mugunthan|Balachandran|chennai|1234567891234567|OTHR|April|2020|2222|value|
	
	
	
	