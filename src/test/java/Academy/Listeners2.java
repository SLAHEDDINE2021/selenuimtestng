package Academy;

import java.lang.reflect.Method;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import resources.base;

public class Listeners2 extends base implements ITestListener {

	public void onTestStart(ITestResult result) {
		// TODO Auto-generated method stub
		
		System.out.println(result.getMethod().getMethodName()+ ": test is started");
	}

	public void onTestSuccess(ITestResult result) {
		// TODO Auto-generated method stub
		
		System.out.println(result.getMethod().getMethodName()+ ": test is Passed");
	
	}

	public void onTestFailure(ITestResult result  ) {
		// TODO Auto-generated method stub
		System.out.println(result.getMethod().getMethodName()+  ": test is failure");
		
	}

	public void onTestSkipped(ITestResult result) {
		// TODO Auto-generated method stub
		
		System.out.println(result.getMethod().getMethodName()+ " + test is skipped");
	}

	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		// TODO Auto-generated method stub
		
		
	}

	public void onTestFailedWithTimeout(ITestResult result) {
		// TODO Auto-generated method stub
		
	}

	public void onStart(ITestContext context) {
		// TODO Auto-generated method stub
		
	}

	public void onFinish(ITestContext context) {
		// TODO Auto-generated method stub
		
	}

}
