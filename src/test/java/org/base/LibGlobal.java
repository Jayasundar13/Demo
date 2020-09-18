package org.base;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;

public class LibGlobal {

	public static final String AUTOMATE_USERNAME = "mugunthansundar1";
	public static final String AUTOMATE_ACCESS_KEY = "Scyxy3YGzwe28BpMyz8z";
	public static final String URL = "https://" + AUTOMATE_USERNAME + ":" + AUTOMATE_ACCESS_KEY
			+ "@hub-cloud.browserstack.com/wd/hub";
	public static WebDriver driver;

	public void getCloudDriver() throws MalformedURLException {
		if (driver == null) {

			DesiredCapabilities caps = new DesiredCapabilities();
			caps.setCapability("os_version", "10");
			caps.setCapability("resolution", "1920x1080");
			caps.setCapability("browser", "Chrome");
			caps.setCapability("browser_version", "86.0 beta");
			caps.setCapability("os", "Windows");
			driver = new RemoteWebDriver(new java.net.URL(URL), caps);

		}
	}

	public static WebDriver getDriver() {
		if (driver == null) {
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\MUGUNTH\\Desktop\\New folder\\Cucumber2nd\\Driver\\chromedriver2.exe");

			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
		return driver;

	}

	public WebDriver getChrome() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\MUGUNTH\\Desktop\\New folder\\TestProject\\Browsers\\chromedriver.exe");

		driver = new ChromeDriver();
		return driver;

	}

	public WebDriver getMozillaFirefox() {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\MUGUNTH\\Desktop\\New folder\\TestProject\\Browsers\\geckodriver.exe");

		driver = new FirefoxDriver();
		return driver;

	}

	public WebDriver getinternetExplorer() {
		System.setProperty("webdriver.ie.driver",
				"C:\\Users\\MUGUNTH\\Desktop\\New folder\\TestProject\\Browsers\\IEDriverServer1.exe");

		driver = new InternetExplorerDriver();
		return driver;

	}

	public WebDriver getEdge() {
		System.setProperty("webdriver.edge.driver",
				"C:\\Users\\MUGUNTH\\Desktop\\New folder\\TestProject\\Browsers\\msedgedriver1.exe");

		driver = new EdgeDriver();
		return driver;

	}

	public void loadUrl(String url) {
		driver.get(url);
		driver.manage().window().maximize();

	}

	public String attributesGet(WebElement element, String data) {

		String attribute = element.getAttribute(data);
		System.out.println("\n");
		System.out.println(attribute);
		System.out.println("\n");
		return attribute;

	}

	public void type(WebElement element, String data) {
		element.sendKeys(data);

	}

	public void btnClick(WebElement element) {
		element.click();

	}

	public void selectbyValue(WebElement element, String data) {
		Select s = new Select(element);
		s.selectByValue(data);

	}

	private void selectIndex(WebElement element, int nos) {
		Select s = new Select(element);
		s.selectByIndex(nos);
	}

	public static void quitBrowser() {
		driver.quit();

	}

	public void typeJs(WebElement element, String data) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','" + data + "')", element);

	}

	public void clickJs(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", element);

	}

	public String currentUrl(WebDriver driver, String data) {
		return driver.getCurrentUrl();
	}

	public String textGet(WebElement element, String data) {
		return element.getText();
	}

	public String titleGet(WebDriver driver, String data) {
		return driver.getTitle();
	}

	public boolean containsWrong(WebDriver driver, String data) {
		return driver.getCurrentUrl().contains("login_attempt");
	}

	public void actionMove(WebElement element) {
		Actions act = new Actions(driver);
		act.moveToElement(element).perform();
	}

	public void actionDragDrop(WebElement element1, WebElement element2) {
		Actions act = new Actions(driver);
		act.dragAndDrop(element1, element2).perform();
	}

	public void actionContext(WebElement element) {
		Actions act = new Actions(driver);
		act.contextClick(element).perform();
	}

	public void actionDouble(WebElement element, String data) {
		Actions act = new Actions(driver);
		act.doubleClick(element).perform();
	}

	public void refreshPage(WebDriver driver) {
		driver.navigate().refresh();

	}

}
