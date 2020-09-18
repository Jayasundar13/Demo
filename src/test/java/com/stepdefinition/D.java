package com.stepdefinition;

import java.net.MalformedURLException;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.task.Page1;
import org.task.Page2;
import org.task.Page3;
import org.task.Page4;
import org.task.Page5;

import com.manager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class D extends LibGlobal{
	PageObjectManager pageObjectManager;
	Page1 page1;
	Page2 page2;
	Page3 page3;
	Page4 page4;
	Page5 page5;
	
	@Given("User is on the Adactin page with RoomType")
	public void user_is_on_the_Adactin_page_with_RoomType() throws MalformedURLException {
		getCloudDriver();
		loadUrl("http://adactinhotelapp.com/");
	}

	@When("User login using with RoomType{string} and {string}")
	public void user_login_using_with_RoomType_and(String username, String password) {
		pageObjectManager = PageObjectManager.getInstance();
		page1 = pageObjectManager.getPage1();
		page1.loginPage(username, password);
	}

	@When("User should search using with RoomType{string} , {string} , {string} ,	{string} , {string} , {string} , {string} and {string}")
	public void user_should_search_using_with_RoomType_and(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		pageObjectManager = PageObjectManager.getInstance();
		page2 = pageObjectManager.getPage2();
		page2.searchHotelPage(Location, Hotels, RoomType, NumberofRooms, CheckInDate, CheckOutDate, AdultsperRoom, ChildrenperRoom);
	}

	@When("User should select hotel with RoomType")
	public void user_should_select_hotel_with_RoomType() {
		pageObjectManager = PageObjectManager.getInstance();
		page3 = pageObjectManager.getPage3();
		page3.selectHotelPage();
	}

	@When("User should book hotel using with RoomType{string} , {string} , {string} ,{string} , {string} , {string} , {string} and {string}")
	public void user_should_book_hotel_using_with_RoomType_and(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		pageObjectManager = PageObjectManager.getInstance();
		page4 = pageObjectManager.getPage4();
		page4.userDetailsPage(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryMonth, ExpiryYear, CVVNumber);
	}

	@When("User should print the id with RoomType{string}")
	public void user_should_print_the_id_with_RoomType(String OrderId) {
		pageObjectManager = PageObjectManager.getInstance();
		page5 = pageObjectManager.getPage5();
		page5.orderIdPage(OrderId);
	}

	@Given("User is on the Adactin page with NumberOfRooms")
	public void user_is_on_the_Adactin_page_with_NumberOfRooms() throws MalformedURLException {
		getCloudDriver();
		loadUrl("http://adactinhotelapp.com/");
	}

	@When("User login using with NumberOfRooms{string} and {string}")
	public void user_login_using_with_NumberOfRooms_and(String username, String password) {
		pageObjectManager = PageObjectManager.getInstance();
		page1 = pageObjectManager.getPage1();
		page1.loginPage(username, password);
	}

	@When("User should search using with NumberOfRooms{string} , {string} , {string} ,	{string} , {string} , {string} , {string} and {string}")
	public void user_should_search_using_with_NumberOfRooms_and(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		pageObjectManager = PageObjectManager.getInstance();
		page2 = pageObjectManager.getPage2();
		page2.searchHotelPage(Location, Hotels, RoomType, NumberofRooms, CheckInDate, CheckOutDate, AdultsperRoom, ChildrenperRoom);
	}

	@When("User should select hotel with NumberOfRooms")
	public void user_should_select_hotel_with_NumberOfRooms() {
		pageObjectManager = PageObjectManager.getInstance();
		page3 = pageObjectManager.getPage3();
		page3.selectHotelPage();
	}

	@When("User should book hotel using with NumberOfRooms{string} , {string} , {string} ,{string} , {string} , {string} , {string} and {string}")
	public void user_should_book_hotel_using_with_NumberOfRooms_and(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		pageObjectManager = PageObjectManager.getInstance();
		page4 = pageObjectManager.getPage4();
		page4.userDetailsPage(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryMonth, ExpiryYear, CVVNumber);
	}

	@When("User should print the id with NumberOfRooms{string}")
	public void user_should_print_the_id_with_NumberOfRooms(String OrderId) {
		pageObjectManager = PageObjectManager.getInstance();
		page5 = pageObjectManager.getPage5();
		page5.orderIdPage(OrderId);
	}

	@Given("User is on the Adactin page with AdultsPerRoom")
	public void user_is_on_the_Adactin_page_with_AdultsPerRoom() throws MalformedURLException {
		getCloudDriver();
		loadUrl("http://adactinhotelapp.com/");
	}

	@When("User login using with AdultsPerRoom {string} and {string}")
	public void user_login_using_with_AdultsPerRoom_and(String username, String password) {
		pageObjectManager = PageObjectManager.getInstance();
		page1 = pageObjectManager.getPage1();
		page1.loginPage(username, password);
	}

	@When("User should search using with AdultsPerRoom {string} , {string} , {string} ,	{string} , {string} , {string} , {string} and {string}")
	public void user_should_search_using_with_AdultsPerRoom_and(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		pageObjectManager = PageObjectManager.getInstance();
		page2 = pageObjectManager.getPage2();
		page2.searchHotelPage(Location, Hotels, RoomType, NumberofRooms, CheckInDate, CheckOutDate, AdultsperRoom, ChildrenperRoom);
	}

	@When("User should select hotel with AdultsPerRoom")
	public void user_should_select_hotel_with_AdultsPerRoom() {
		pageObjectManager = PageObjectManager.getInstance();
		page3 = pageObjectManager.getPage3();
		page3.selectHotelPage();
	}

	@When("User should book hotel using with AdultsPerRoom {string} , {string} , {string} ,{string} , {string} , {string} , {string} and {string}")
	public void user_should_book_hotel_using_with_AdultsPerRoom_and(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		pageObjectManager = PageObjectManager.getInstance();
		page4 = pageObjectManager.getPage4();
		page4.userDetailsPage(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryMonth, ExpiryYear, CVVNumber);
	}

	@When("User should print the id with AdultsPerRoom {string}")
	public void user_should_print_the_id_with_AdultsPerRoom(String OrderId) {
		pageObjectManager = PageObjectManager.getInstance();
		page5 = pageObjectManager.getPage5();
		page5.orderIdPage(OrderId);
	}

	@Given("User is on the Adactin page with ChildrenPerRoom")
	public void user_is_on_the_Adactin_page_with_ChildrenPerRoom() throws MalformedURLException {
		getCloudDriver();
		loadUrl("http://adactinhotelapp.com/");
	}

	@When("User login using with ChildrenPerRoom {string} and {string}")
	public void user_login_using_with_ChildrenPerRoom_and(String username, String password) {
		pageObjectManager = PageObjectManager.getInstance();
		page1 = pageObjectManager.getPage1();
		page1.loginPage(username, password);
	}

	@When("User should search using with ChildrenPerRoom {string} , {string} , {string} ,	{string} , {string} , {string} , {string} and {string}")
	public void user_should_search_using_with_ChildrenPerRoom_and(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		pageObjectManager = PageObjectManager.getInstance();
		page2 = pageObjectManager.getPage2();
		page2.searchHotelPage(Location, Hotels, RoomType, NumberofRooms, CheckInDate, CheckOutDate, AdultsperRoom, ChildrenperRoom);
	}

	@When("User should select hotel with ChildrenPerRoom")
	public void user_should_select_hotel_with_ChildrenPerRoom() {
		pageObjectManager = PageObjectManager.getInstance();
		page3 = pageObjectManager.getPage3();
		page3.selectHotelPage();
	}

	@When("User should book hotel using with ChildrenPerRoom {string} , {string} , {string} ,{string} , {string} , {string} , {string} and {string}")
	public void user_should_book_hotel_using_with_ChildrenPerRoom_and(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		pageObjectManager = PageObjectManager.getInstance();
		page4 = pageObjectManager.getPage4();
		page4.userDetailsPage(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryMonth, ExpiryYear, CVVNumber);
	}

	@When("User should print the id with ChildrenPerRoom {string}")
	public void user_should_print_the_id_with_ChildrenPerRoom(String OrderId) {
		pageObjectManager = PageObjectManager.getInstance();
		page5 = pageObjectManager.getPage5();
		page5.orderIdPage(OrderId);
	}

	@Given("User is on the Adactin page with CreditCardNo")
	public void user_is_on_the_Adactin_page_with_CreditCardNo() throws MalformedURLException {
		getCloudDriver();
		loadUrl("http://adactinhotelapp.com/");
	}

	@When("User login using with CreditCardNo {string} and {string}")
	public void user_login_using_with_CreditCardNo_and(String username, String password) {
		pageObjectManager = PageObjectManager.getInstance();
		page1 = pageObjectManager.getPage1();
		page1.loginPage(username, password);
	}

	@When("User should search using with CreditCardNo {string} , {string} , {string} ,	{string} , {string} , {string} , {string} and {string}")
	public void user_should_search_using_with_CreditCardNo_and(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		pageObjectManager = PageObjectManager.getInstance();
		page2 = pageObjectManager.getPage2();
		page2.searchHotelPage(Location, Hotels, RoomType, NumberofRooms, CheckInDate, CheckOutDate, AdultsperRoom, ChildrenperRoom);
	}

	@When("User should select hotel with CreditCardNo")
	public void user_should_select_hotel_with_CreditCardNo() {
		pageObjectManager = PageObjectManager.getInstance();
		page3 = pageObjectManager.getPage3();
		page3.selectHotelPage();
	}

	@When("User should book hotel using with CreditCardNo {string} , {string} , {string} ,{string} , {string} , {string} , {string} and {string}")
	public void user_should_book_hotel_using_with_CreditCardNo_and(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		pageObjectManager = PageObjectManager.getInstance();
		page4 = pageObjectManager.getPage4();
		page4.userDetailsPage(FirstName, LastName, BillingAddress, CreditCardNo, CreditCardType, ExpiryMonth, ExpiryYear, CVVNumber);
	}

	@When("User should print the id with CreditCardNo {string}")
	public void user_should_print_the_id_with_CreditCardNo(String OrderId) {
		pageObjectManager = PageObjectManager.getInstance();
		page5 = pageObjectManager.getPage5();
		page5.orderIdPage(OrderId);
	}

}

