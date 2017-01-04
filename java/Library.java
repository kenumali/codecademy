import java.util.HashMap;

/**
* This project creates a simple Library tool to help analyze completed books in a small, personal library. 
* The tool will print out the books that a user has full read. 
* The books and their completion status will be stored in a HashMap.
*/

public class Library {
  Library(){
    
  }
  
  void getFinishedBooks(HashMap<String, Boolean> library){
    if(library.size() < 1) {
      System.out.println("Error! The HashMap is empty.");
    } else {
      for(String book : library.keySet()){
        if(library.get(book) == true) {
          System.out.println(book);
        }
      }
    }
  }
  
  void getUnfinishedBooks(HashMap<String, Boolean> library){
    if(library.size() < 1) {
      System.out.println("Error! The HashMap is empty.");
    } else {
      for(String book : library.keySet()){
        if(library.get(book) == false) {
          System.out.println(book);
        }
      }
    }
  }
  
  public static void main(String[] args) {
    HashMap<String, Boolean> myBooks = new HashMap<String, Boolean>();
    myBooks.put("Road Down The Tunnel", true);
    myBooks.put("Rat: A Biology", false);
    myBooks.put("TimeIn", true);
    myBooks.put("3D Food Printing", false);
    
    Library myLibrary = new Library();
    System.out.println("--- Finished Books ---");
    myLibrary.getFinishedBooks(myBooks);
    System.out.println("========================");
    System.out.println("--- Unfinished Books ---");
    myLibrary.getUnfinishedBooks(myBooks);
    System.out.println("========================");
  }
}
