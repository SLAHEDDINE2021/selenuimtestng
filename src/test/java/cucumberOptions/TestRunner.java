
package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(  
	    features = "src/test/java/features",
	    glue="stepDefinations" , plugin ="html:reports/reports.html", monochrome = true)
public class TestRunner extends AbstractTestNGCucumberTests  {

}
