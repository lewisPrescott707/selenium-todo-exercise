package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ToDoStepDefinition {

	WebDriver driver;

	@Given("^user is on home Page$")
	public void user_already_on_home_page() throws Exception {
		driver = new ChromeDriver();
		driver.get("https://lambdatest.github.io/sample-todo-app/");

	}
	
	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
