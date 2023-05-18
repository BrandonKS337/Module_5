let buttons = document.querySelector(".buttons"); // setting new variable buttons to query buttons clicked
let btn = buttons.querySelectorAll("span"); //opens query search to all span elements
let value = document.getElementById("value"); //adds event listener for the value input by user
// let clearBtn = document.getElementById("clear");        //this even listener is used to clear the results or should be a solution regarding clearing strings of "Clear"
// clearBtn.addEventListener("click", function () {
//   value.innerHTML = "";
// });

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    // if (this.innerHTML == 'Clear') {                  // duplicating the below if statement and adding it here ACTUALLY clears the screen.......I feel like I did something wrong here.
    //     value.innerHTML = "";
    //   }

    if (this.innerHTML === "=") {
      const expression = document.getElementById("value").innerHTML;
      let operator = "";
      for (let j = 0; j < expression.length; j++) {
        console.log(expression[j]);
        if (
          expression[j] === "+" ||
          expression[j] === "-" ||
          expression[j] === "*" ||
          expression[j] === "/"
        ) {
          operator = expression[j];
        }
      }
      console.log("operator:", operator);
      // console.log(value.innerHTML, "operator:", operator);
      const nums = value.innerHTML.split(operator);
      console.log(nums);
      toServer(nums); /// 1111 NOTES by Robert: pass in operator to  toServer func 11111
      // value.innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML === "Clear") {
        value.innerHTML = "";
      } else {
        value.innerHTML += this.innerHTML;
      }
    }
  });
  /////consider switch statement instead of nested ifs//////
}
function toServer(nums) { /// 2222 NOTES by Robert: fetch based on operator 2222 of ex: if operator = + will fetch to add route if subtract => subt route etc etc
  fetch(`http://localhost:3000/calculator/add?num1=${nums[0]}&num2=${nums[1]}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // console.log(context)
      document.getElementById("value").innerHTML = data.result;
    });
}

// try to rewrite for when click = extract num1/num2 and run them through fetch on server side


//for ex 3 slide 37 take into account  /// NOTES by Robert: in order to help solve for the request on slide 37
// Time stamp 6PM - 7:30PM  follow over to calc routes.js


// DO NOT USE eval() because security requestIdleCallback. String = security risk

 /// NOTES by Robert: