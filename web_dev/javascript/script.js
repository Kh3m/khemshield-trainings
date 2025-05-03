// onload = function () {

// };

// let
// const
//           0  1  2  3  4
const arr = [1, 2, 3, 4, 5];
const names = ["John", "Jane", "Doe"];

console.log(arr[4]);
console.log(names[1]);

onload = function () {
  const textOne = document.querySelector("#text-1");
  //   const textOne = document.getElementById("text-1");
  //   const texts = this.document.getElementsByClassName("text-2");

  textOne.textContent = textOne.textContent + " Hello World!";

  textOne.style.color = "red";
  textOne.style.fontSize = "30px";

  const box2 = document.querySelector(".box-2");
  const boxButton = document.querySelector(".box-button");

  console.log("boxButton", boxButton);
  boxButton.addEventListener("click", function () {
    box2.style.backgroundColor = "blue";
    box2.style.width = "200px";
    box2.style.height = "200px";
    box2.style.borderRadius = "50%";
  });
};
