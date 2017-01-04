/*
This project creates a simple Droid(robot) that can be activated, charged, and hover above the ground. 
This project creates some baseline behaviors of the droid.
*/

public class Droid {
  int batteryLevel;
  
  Droid(){
    batteryLevel = 100;
  }
  
  void activate(){
    System.out.println("Activated. How can I help you?");
    batteryLevel -= 5;
    System.out.println("Battery level is: " + batteryLevel + " percent.");
  }
  
  void chargeBattery(int hours){
    System.out.println("Droid charging...");
    batteryLevel += hours;
    if(batteryLevel > 100){
      batteryLevel = 100;
      System.out.println("Battery level is: " + batteryLevel + " percent.");
    } else {
      System.out.println("Battery level is: " + batteryLevel + " percent.");
    }
  }
  
  int checkBatterLevel(){
    System.out.println("Battery level is: " + batteryLevel + " percent.");
    return batteryLevel;
  }
  
  void hover(int feet) {
    if(feet > 2) {
      System.out.println("Error! I cannot hover about 2 feet.");
    } else {
      System.out.println("Hovering...");
      batteryLevel -= 20;
      System.out.println("Battery level is: " + batteryLevel + " percent.");
    }
  }
  
  public static void main(String[] args) {
    Droid droid = new Droid();
    droid.activate();
    droid.chargeBattery(5);
    droid.hover(1);
  }
}
