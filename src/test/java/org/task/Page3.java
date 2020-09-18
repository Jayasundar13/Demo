package org.task;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page3 extends LibGlobal{
	
	public Page3() {
		PageFactory.initElements(driver, this);
	}
	@FindBy( id = "radiobutton_0")
	private WebElement selectRadio;
	
	@FindBy( id = "continue")
	private WebElement search;

	public WebElement getSelectRadio() {
		return selectRadio;
	}

	public WebElement getSearch() {
		return search;
	}

	public void selectHotelPage() {
		
		btnClick(getSelectRadio());
		btnClick(getSearch());

	}
}
