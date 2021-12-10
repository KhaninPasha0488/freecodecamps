function testSize(num) {
   // Only change code below this line
 if (num < 5) {
   return "Tiny";
 } else if (num < 10) {
   return "Small";
 } else if (num < 15) {
   return "Medium";
 } else if (num <20) {
   return "Large";
 }else{
    return "Huge";
 }
 
 
   // Only change code above this line
 }
 
 testSize(7);

 const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if( strokes == 1){
  return names[0];
}else if(strokes <= par -2){
  return names[1];
}else if(strokes == par -1){
  return names[2];
  }else if(strokes == par ){
  return names[3];
  }else if(strokes == par + 1 ){
  return names[4];
  }else if(strokes == par + 2 ){
  return names[5];
  }else {
    return names[6];
  }


  
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
   let answer = ""
     switch(val){
   case 1:
   answer ="alpha";
   break;
   case 2:
   answer ="beta";
   break;
   case 3:
   answer ="gamma";
   break;
   case 4:
   answer ="delta";
   break;
     }
   return answer;
     // Only change code above this line
    
   }
   
   caseInSwitch(1);
   function switchOfStuff(val) {
      let answer = "";
     switch(val){
       case "a":
       answer = "apple";
       break;
        case "b":
       answer = "bird";
       break;
        case "c":
       answer = "cat";
       break;
       default:
      answer ="stuff";
       break;
     }
    
    
    
      // Only change code above this line
      return answer;
    }
    
    switchOfStuff(1);

    function sequentialSizes(val) {
      let answer = "";
     switch(val){
       case 1:
       case 2:
       case 3:
       answer = "Low";
       break;
       case 4:
       case 5:
       case 6:
       answer = "Mid";
       break;
       case 7:
       case 8:
       case 9:
       answer = "High";
       break;
     }
    
    
    
      // Only change code above this line
      return answer;
    }
    
    sequentialSizes(1);
    function chainToSwitch(val) {
      let answer = "";
      // Only change code below this line
    switch(val) {
      case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
         case 1:
        answer = "There is no #1";
        break;
         case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
        break;
        default:
          answer ="";
           break;
    }
    
      // Only change code above this line
      return answer;
    }
    
    chainToSwitch(7);
    function isLess(a, b) {
      // Only change code below this line
      return a<b
      // Only change code above this line
    }
    
    isLess(10, 15);