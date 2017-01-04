/**
* Combines a few concepts: conditionals, Boolean expressions, and arithmetic expressions.
* This program will calculate the monthly car payment a user should expect to make after taking out a car loan.
* The program will include the following:
* 1. Car loan amount
* 2. Interest rate of the loan
* 3. Length of the loan (in years)
* 4. Down payment
*/

public class CarLoan {
	public static void main(String[] args) {
		int carLoan = 10000;
    int loanLength = 3;
    int interestRate = 5;
    int downPayment = 2000;
		if(loanLength <= 0 || interestRate <= 0){
      System.out.println("Error! You must take out a valid car loan");
    } else if (downPayment >= carLoan){
      System.out.println("The car can be paid in full.");
    } else {
      int remainingBalance = carLoan - downPayment;
      int months = loanLength * 12;
      int monthlyBalance = remainingBalance / months;
      int interest = (monthlyBalance * interestRate) / 100;
      int monthlyPayment = monthlyBalance + interest;
    	System.out.println(monthlyPayment);
    }
	}
}
