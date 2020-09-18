package org.task;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page4 extends LibGlobal{
	
	public Page4() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="first_name")
	private WebElement Firstname;
	
	@FindBy(id="last_name")
	private WebElement Lastname;
	
	@FindBy(id="address")
	private WebElement BillingAddress;
	
	@FindBy(id="cc_num")
	private WebElement CreditCardNo;
	
	@FindBy(id="cc_type")
	private WebElement CreditCardType;
	
	@FindBy(id="cc_exp_month")
	private WebElement ExpiryMonth;
	
	@FindBy(id="cc_exp_year")
	private WebElement ExpiryYear;
	
	@FindBy(id="cc_cvv")
	private WebElement CvvNo;
	
	@FindBy(id="book_now")
	private WebElement booknow;

	public WebElement getFirstname() {
		return Firstname;
	}

	public WebElement getLastname() {
		return Lastname;
	}

	public WebElement getBillingAddress() {
		return BillingAddress;
	}

	public WebElement getCreditCardNo() {
		return CreditCardNo;
	}

	public WebElement getCreditCardType() {
		return CreditCardType;
	}

	public WebElement getExpiryMonth() {
		return ExpiryMonth;
	}

	public WebElement getExpiryYear() {
		return ExpiryYear;
	}

	public WebElement getCvvNo() {
		return CvvNo;
	}

	public WebElement getBooknow() {
		return booknow;
	}

	public void userDetailsPage(String FirstName, String LastName, String BillingAddress, String CreditCardNo, String CreditCardType, String ExpiryMonth, String ExpiryYear, String CVVNumber) {
		
		type(getFirstname(), FirstName);
		type(getLastname(), LastName);
		type(getBillingAddress(), BillingAddress);
		type(getCreditCardNo(), CreditCardNo);
		type(getCreditCardType(), CreditCardType);
		type(getExpiryMonth(), ExpiryMonth);
		type(getExpiryYear(), ExpiryYear);
		type(getCvvNo(), CVVNumber);
		btnClick(getBooknow());

	}
}
