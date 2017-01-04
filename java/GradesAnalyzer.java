import java.util.ArrayList;

/**
* This project creates a simple tool to help analyze classrom grades stored in an ArrayList. 
* The analyzer will be able to retrieve the classroom average.
*/

public class GradeAnalyzer {
  GradeAnalyzer(){
    
  }
  
  int getAverage(ArrayList<Integer> grades){
    if(grades.size() < 1) {
      System.out.println("Error! The ArrayList is empty.");
      return 0;
    } else {
      int sum = 0;
      for(int grade : grades) {
        sum += grade;
      }
      int average = sum / grades.size();
      System.out.println("The average grade is: " + average);
      return average;
    }
  }
  
  public static void main(String[] args) {
    ArrayList<Integer> myClassroom = new ArrayList<Integer>();
    int[] grades = {98, 92, 88, 75, 61, 89, 95};
    for(int i = 0; i < grades.length; i++) {
      myClassroom.add(grades[i]);
    }
    
    GradeAnalyzer myAnalyzer = new GradeAnalyzer();
    myAnalyzer.getAverage(myClassroom);
  }
}
