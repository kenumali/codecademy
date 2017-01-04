/*
This is a small program that uses math to perform a mathematical magic trick.
The magic trick will involve performing arithmetic operations on any integer that you choose.
*/

public class Magic {
	public static void main(String[] args) {
		int myNumber = 3;
    int stepOne = myNumber * myNumber; 
		int stepTwo = stepOne + myNumber;
		int stepThree = stepTwo / myNumber;
    int stepFour = stepThree + 17;
    int stepFive = stepFour - myNumber;
    int stepSix = stepFive / 6;
    System.out.println(stepSix);
	}
}
