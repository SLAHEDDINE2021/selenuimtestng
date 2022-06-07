package Academy;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import resources.base;

public class TestUtils extends base {
	
	
	public static void takesScreenShot(String name) throws IOException {
		
		

		TakesScreenshot ts = (TakesScreenshot)driver;
		
		File source = ts.getScreenshotAs(OutputType.FILE);
		
		
		
		FileUtils.copyFile(source, new File("C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\reports\\slah\\" +name+".png"));
	}
	

}
