package org.task;

import org.base.LibGlobal;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Page1 extends LibGlobal{
	
	public Page1() {
		
		PageFactory.initElements(driver, this);
	}

	
	@FindBy(id="username")
	private WebElement username;
	
	@FindBy(id="password")
	private WebElement password;
	
	@FindBy(id="login")
	private WebElement loginbtn;

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginbtn() {
		return loginbtn;
	}
	
	public void loginPage(String username, String password) {
		type(getUsername(), username);
		type(getPassword(), password);
		btnClick(getLoginbtn());

	}
}
