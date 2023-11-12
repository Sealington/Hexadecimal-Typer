/ /================================================================\
// || This thing gets updated a lot, and I am creative, but I      ||
// || have trouble coming up with ideas a lot, so, if you want     ||
// || a custom preset to be made for you, just comment, and I'll   ||
// || probably make it! You also get your own custom comment on    ||
// || on the preset, and you can choose what it is!                ||
// || e.g var pre_msg = ["foo","bar"]; // [your custom comment]    ||
// || so, if you want something included in this, then please      ||
// || comment. This is the end of this Public Service Announcment  ||
// \================================================================/

// From https://stackoverflow.com/questions/45359261/how-would-you-make-pre-written-text-appear-when-typing-something/45359564#45359564
// Always give credit to stackoverflow, kids.

var pre_msg = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
// if you want others go to the presets comment below the typeFunction help comment


function typeFunction() {
  var index = Math.floor(Math.random() * pre_msg.length);
  document.getElementById("text").value +=pre_msg[index];
}


/*
If you need to reset typeFunction, delete everything inside of typeFunction & replace it with this:

  var index = Math.floor(Math.random() * pre_msg.length);
  document.getElementById("text").value +=pre_msg[index]+" ";

Hope this stops someone from wanting to smash their computer if they want to remix this.
*/

/*
+====================|  PRESETS  |====================+
var pre_msg = ["0","1"]; // binary
var pre_msg = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // gibberish
var pre_msg = ["firetruck ","house ","girl ","boy ","jolly ","bread ","look ","found ","person ","money ","can ","animal ","zebra ","president ","instruct ","very ","xylophone ","dream ","hair ","know ","out ","under ","you ","the ","road ","engineer ","whose ","quiet "]; // random words
var pre_msg = ["0","1","2","3","4","5","6","7","8","9"]; // numbers
var pre_msg = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"]; // base64
var pre_msg = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",".","!",","]; // base32
var pre_msg = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; // UPPER CASE ONLY
var pre_msg = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // lower case only
var pre_msg = [".","-"," / "]; // morse code (dont ask)
var pre_msg = [" | ","-"," / "]; // maze generator
var pre_msg = ["!","@","#","$","%","^","&","*","(",")"]; // dont ask
var pre_msg = ["!","#","$","&","*"]; // curse generator
var pre_msg = ["Alfa ","Bravo ","Charlie ","Delta ","Echo ","Foxtrot ","Golf ","Hotel ","India ","Juliett ","Kilo ","Lima ","Mike ","November ","Oscar ","Papa ","Quebec ","Romeo ","Sierra ","Tango ","Uniform ","Victor ","Whiskey ","X-ray ","Yankee ","Zulu "]; // NATO Spelling Alphabet
var pre_msg = ["|","|","|","|","|"," "]; // Loading
var pre_msg = ["o","y"," "]; // yo, oy or space
var pre_msg = ["walmart ","target ","rite-aid ","giant "]; // store
*/
