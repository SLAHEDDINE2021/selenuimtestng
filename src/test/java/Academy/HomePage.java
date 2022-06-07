package Academy;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.LogStatus;

import atu.testrecorder.ATUTestRecorder;
import atu.testrecorder.exceptions.ATUTestRecorderException;
import pageObjects.LandingPage;
import pageObjects.LoginPage;
import resources.base;

public class HomePage extends base {

	@BeforeMethod
	public void initialize(Method method) throws IOException, ATUTestRecorderException {
		
		recorder = new ATUTestRecorder("C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\reports\\slah" ,method.getName(), false);
		recorder.start();
		logger = extent.startTest(method.getName());
		 initializeDriver();
		driver.get(prop.getProperty("url"));

	}

	@Test(dataProvider = "getData")

	public void basePageNavigation(String Username, String Password, String text, Method method) throws IOException, ATUTestRecorderException {

		// one is inheritance

		// creating object to that class and invoke methods of it
		 
		List<WebElement> afficheCase = driver.findElements(By.xpath(" //button[contains(text(),'NO THANKS')]"));

		int sizeAfficheCase = afficheCase.size();
		

		if (sizeAfficheCase > 0) {

			System.out.println("the popup s'affiche ");
			driver.findElement(By.xpath(" //button[contains(text(),'NO THANKS')]")).click();
		}

		LandingPage l = new LandingPage(driver);
		
		
		l.getLogin().click(); // driver.findElement(By.css()
		LoginPage lp = new LoginPage(driver);
		lp.getEmail().sendKeys(Username);
		lp.getPassword().sendKeys(Password);

		lp.getLogin().click();
		
	}

	@AfterMethod
	public void teardown(Method method , ITestResult result) throws IOException, ATUTestRecorderException {
		
		
		if(result.getStatus()==ITestResult.FAILURE) {
			
			
			logger.log(LogStatus.FAIL, "test is failed");
			
			logger.log(LogStatus.FAIL, result.getThrowable());
			
			TestUtils.takesScreenShot(method.getName());
			logger.log(LogStatus.FAIL,  "<a href='"+result.getName() + ".png" +"'><span class='lable info'>Download snapshot </span></a>");
			logger.log(LogStatus.FAIL,  "<a href='"+result.getName() + ".mov" +"'><span class='lable info'>Download snapshot </span></a>");
			}else if(result.getStatus()==ITestResult.SUCCESS) {
				
				
				logger.log(LogStatus.PASS, "test is passed");
			
			
		}else if(result.getStatus()==ITestResult.SKIP) {
			
			
			logger.log(LogStatus.PASS, "test is skipped");
		
		 
		}
		
		driver.close();
		recorder.stop();
	}

	@DataProvider
	public Object[][] getData() {
		// Row stands for how many different data types test should run
		// coloumn stands for how many values per each test

		// Array size is 2
		// 0,1
		Object[][] data = new Object[2][3];
		// 0th row
		data[0][0] = "nonrestricteduser@qw.com";
		data[0][1] = "123456";
		data[0][2] = "Restrcited User";
		// 1st row
		data[1][0] = "restricteduser@qw.com";
		data[1][1] = "456788";
		data[1][2] = "Non restricted user";

		return data;

	}

}
