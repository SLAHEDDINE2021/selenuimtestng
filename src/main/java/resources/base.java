package resources;

import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import atu.testrecorder.ATUTestRecorder;
import io.github.bonigarcia.wdm.WebDriverManager;

public class base {

	public static WebDriver driver;
	public static Properties prop;

	public static ExtentReports extent;
	public static ExtentTest logger;
	
	public static ATUTestRecorder recorder;

	public void initializeDriver() throws IOException {

		prop = new Properties();

		FileInputStream fis = new FileInputStream(
				"C:\\Users\\Finance\\eclipse-workspace\\ProjetAjour17052022\\src\\main\\java\\resources\\data.properties");

		prop.load(fis);

		String BrowserName = prop.getProperty("browser");

		if (BrowserName.equals("chrome")) {

			WebDriverManager.chromedriver().setup();

			driver = new ChromeDriver();

		} else if (BrowserName.equals("firefox")) {

			WebDriverManager.firefoxdriver().setup();

			driver = new FirefoxDriver();
		} else if (BrowserName.equals("IE")) {

			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
		}

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));

	}

}
