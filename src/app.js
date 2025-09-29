import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // generateAllSandwhiches()
  gerateTax()
};

//first
//second 
//extention ['.com','.edu','.org']

const generateAllSandwhiches = () => {
  let bread = ['Italian','rye','wheat','potato','flatbread'];
  let meat = ['ham','turkey','tuna','chicken','roast beef'];
  let cheese = ['American','Swiss','cheddar','provolone','mozzerella'];
  let sauce = ['mayo','mustard','ranch','oil','vinegar'];
  let veggie = ['lettuce','spinach','tomato','onion','peppers'];

  //start at the beginning, end at the end, iterate forward
  for(let i = 0; i < bread.length; i++) {
    for(let a = 0; a < meat.length; a ++) {
      for(let b = 0; b < cheese.length; b ++) {
        for(let c = 0; c < sauce.length; c ++) {
          for(let d = 0; d < veggie.length; d ++) {
            console.log(bread[i] + " " + meat[a] + " " + cheese[b] + " " + sauce[c] + " " + veggie[d])
          }
        }
      }
    }
  }
}

const gerateTax = () => {
              //0       1           2      3         4             5
  let cart = ['milk', 'mascara', 'eggs', 'bread', 'cheese', 'trash bags'];
  let total = 0;
  for(let i = 0; i < cart.length; i++) {
    if(cart[i] == "milk" || cart[i] == "eggs" || cart[i] == 'bread' || cart[i] == "cheese" || cart[i] == "apples") {
      total += 2.5 * .3
    }
    else {
      total += 5 * .7
    }
  }
  console.log(total)
}