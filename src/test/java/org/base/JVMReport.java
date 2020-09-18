package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static void generateJVMReport(String jsonFile) {
		
		File loc = new File("C:\\Users\\MUGUNTH\\Desktop\\New folder\\Cucumber2nd\\src\\test\\resources\\Reporting");
		
		Configuration configuration = new Configuration(loc, "Adactin Hotel Automation");
		configuration.addClassifications("Spirint", "20");
		configuration.addClassifications("Browser", "Chrome");
		configuration.addClassifications("Environment", "UAT");
		configuration.addClassifications("OS", "WIN-10");	
		
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonFile);
		
		ReportBuilder builder = new ReportBuilder(jsonFiles, configuration);
		builder.generateReports();
		

	}

}
