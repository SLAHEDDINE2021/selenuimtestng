package Academy;

import java.io.IOException;
import java.lang.reflect.Method;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;

import org.testng.annotations.BeforeMethod;

import org.testng.annotations.Test;

import com.relevantcodes.extentreports.LogStatus;

import atu.testrecorder.ATUTestRecorder;
import atu.testrecorder.exceptions.ATUTestRecorderException;
import pageObjects.LandingPage;

import resources.base;

//Adding logs 
//Generating html reports
//Screenshots on failure
//JEnkins integration
public class validateNavigationBar extends base {

	@BeforeMethod

	public void initialize(Method method) throws IOException, ATUTestRecorderException {
		recorder = new ATUTestRecorder("C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\reports\\slah" ,method.getName(), false);
		recorder.start();
		logger = extent.startTest(method.getName());
		 initializeDriver();

		driver.get(prop.getProperty("url"));

	}

	@Test

	public void validateAppNavBar() throws IOException {

		List<WebElement> afficheCase = driver.findElements(By.xpath(" //button[contains(text(),'NO THANKS')]"));

		int sizeAfficheCase = afficheCase.size();
		System.out.println(sizeAfficheCase);

		if (sizeAfficheCase > 0) {
			System.out.println("the popup s'affiche ");
			driver.findElement(By.xpath(" //button[contains(text(),'NO THANKS')]")).click();
		}
		// one is inheritance
		// creating object to that class and invoke methods of it
		LandingPage l = new LandingPage(driver);

		// compare the text from the browser with actual text.- Error..
		Assert.assertTrue(l.getNavigationBar().isDisplayed());

		System.out.println("Test completed");
		// Assert.assertFalse(false);

	}

	@AfterMethod
	public void teardown(Method method , ITestResult result) throws IOException, ATUTestRecorderException {
if(result.getStatus()== ITestResult.SUCCESS) {
			
			logger.log(LogStatus.PASS, "test passed");
			
		}else if(result.getStatus()== ITestResult.FAILURE) {
			
			
			logger.log(LogStatus.FAIL, "test is failed");
			
			
			TestUtils.takesScreenShot(method.getName());
			
			logger.log(LogStatus.FAIL, "<a href='"+result.getName() + ".png" +"'><span class='lable info'>Download snapshot </span></a>");
			logger.log(LogStatus.FAIL,  "<a href='"+result.getName() + ".mov" +"'><span class='lable info'>Download snapshot </span></a>");
	}else if(result.getStatus()== ITestResult.SKIP) {
		
		
		logger.log(LogStatus.FAIL, "test is skipped");
	}

driver.close();
recorder.stop();

	}

}
