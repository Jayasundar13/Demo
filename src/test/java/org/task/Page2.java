package org.task;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page2 extends LibGlobal{
	
	public Page2() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "location")
	private WebElement location;
	
	@FindBy(id = "hotels")
	private WebElement hotels;
	
	@FindBy(id = "room_type")
	private WebElement RoomType;
	
	@FindBy(id = "room_nos")
	private WebElement Numberofrooms;
	
	@FindBy(id = "datepick_in")
	private WebElement CheckInDate;
	
	@FindBy(id = "datepick_out")
	private WebElement CheckOutDate;
	
	@FindBy(id = "adult_room")
	private WebElement AdultPerRoom;
	
	@FindBy(id = "child_room")
	private WebElement ChildPerRoom;
	
	@FindBy(id = "Submit")
	private WebElement submit;

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRoomType() {
		return RoomType;
	}

	public WebElement getNumberofrooms() {
		return Numberofrooms;
	}

	public WebElement getCheckInDate() {
		return CheckInDate;
	}

	public WebElement getCheckOutDate() {
		return CheckOutDate;
	}

	public WebElement getAdultPerRoom() {
		return AdultPerRoom;
	}

	public WebElement getChildPerRoom() {
		return ChildPerRoom;
	}

	public WebElement getSubmit() {
		return submit;
	}
	
	public void searchHotelPage(String Location, String Hotels, String RoomType, String NumberofRooms, String CheckInDate, String CheckOutDate, String AdultsperRoom, String ChildrenperRoom) {
		
		type(getLocation(), Location);
		type(getHotels(), Hotels);
		type(getRoomType(), RoomType);
		type(getNumberofrooms(), NumberofRooms);
		type(getCheckInDate(), CheckInDate);
		type(getCheckOutDate(), CheckOutDate);
		type(getAdultPerRoom(), AdultsperRoom);
		type(getChildPerRoom(), ChildrenperRoom);
		btnClick(getSubmit());

	}
}
