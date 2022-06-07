package Academy;

import java.io.IOException;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import com.relevantcodes.extentreports.ExtentReports;

import resources.base;

public class BASuite extends base {



@BeforeSuite

public void star() throws IOException {
	
	extent = new ExtentReports(
			"C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\reports\\slah\\index.html", true);

	extent.addSystemInfo("test manager", "Slah Eddine Jeder");
	extent.addSystemInfo("first project", "slah project");
	

}

@AfterSuite
public void end() {

	extent.flush();

	driver.quit();

}

}
