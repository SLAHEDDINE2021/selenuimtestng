package stepDefinations;


import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;


import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import resources.base;





public class Hooks extends base {
	
	
	
	@Before
	public void runBeforeScenario() throws IOException {
		
	}

	@After(order =1)
	public void runAfterScenario(Scenario scenario) {
		
		if (scenario.isFailed()) {
			
			TakesScreenshot ts =(TakesScreenshot)driver;
			byte[] src = ts.getScreenshotAs(OutputType.BYTES);
			
			scenario.attach(src, "image/png","screenshot :" + scenario.getName());;
	       
			
	          
			
	}
	}
		@After(order = 0)
		public void tearDown() {
			
			driver.quit();
			
			
			
	
		
	
	}
}
