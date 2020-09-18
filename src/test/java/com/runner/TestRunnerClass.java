package com.runner;

import org.base.JVMReport;
import org.base.LibGlobal;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = { "com.stepdefinition" }, dryRun = false, tags = {
		"@Reg" }, monochrome = true, plugin = { "pretty", "json:src\\test\\resources\\Reporting\\Cucumber.json",
				"html:src\\test\\resources\\Reporting\\" }, strict = true)
public class TestRunnerClass extends LibGlobal{

	@AfterClass
	public static void afterClass() {
		JVMReport.generateJVMReport(
				"C:\\Users\\MUGUNTH\\Desktop\\New folder\\Cucumber2nd\\src\\test\\resources\\Reporting\\Cucumber.json");
		
		
	}

}
