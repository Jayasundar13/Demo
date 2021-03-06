package org.task;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page5 extends LibGlobal {
	
	public Page5() {
		 
	PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="order_no")
	private WebElement OrderId;

	public WebElement getOrderId() {
		return OrderId;
	}

	public void orderIdPage(String OrderId) {
		
		attributesGet(getOrderId(), OrderId);

	}
}
