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

public class validateTitle extends base {

	@BeforeMethod
	public void initialize(Method method) throws IOException, ATUTestRecorderException {
		
		recorder = new ATUTestRecorder("C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\reports\\slah" ,method.getName(), false);
		recorder.start();
		logger = extent.startTest(method.getName());
		 initializeDriver();

		driver.get(prop.getProperty("url"));

	}

	@Test

	public void validateAppTitle() throws IOException {
		List<WebElement> afficheCase = driver.findElements(By.xpath(" //button[contains(text(),'NO THANKS')]"));
		int sizeAfficheCase = afficheCase.size();
		System.out.println(sizeAfficheCase);

		if (sizeAfficheCase > 0) {

			driver.findElement(By.xpath(" //button[contains(text(),'NO THANKS')]")).click();
		}
		// one is inheritance
		// creating object to that class and invoke methods of it
		LandingPage l = new LandingPage(driver);
		// compare the text from the browser with actual text.- Error..
		Assert.assertEquals(l.getTitle().getText(), "FEATURED COUR1SES");

		System.out.println("Test completed");

	}

	@AfterMethod
	public void teardown(Method method , ITestResult result ) throws IOException, ATUTestRecorderException {
		
if(result.getStatus()== ITestResult.SUCCESS) {
			
		logger.log(LogStatus.PASS, "test passed");
			
		}else if(result.getStatus()== ITestResult.FAILURE) {
			
			logger.log(LogStatus.FAIL, "test is failed");
			logger.log(LogStatus.FAIL, "<a href='"+result.getName() + ".png" +"'><span class='lable info'>Download snapshot </span></a>");
			logger.log(LogStatus.FAIL,  "<a href='"+result.getName() + ".mov" +"'><span class='lable info'>Download snapshot </span></a>");
			TestUtils.takesScreenShot(method.getName());
		
	}else if(result.getStatus()== ITestResult.SKIP) {
		
		
		logger.log(LogStatus.FAIL, "test is skipped");
		
	}

driver.close();
recorder.stop();
	}

}
