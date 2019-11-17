function addNumber(num1, num2) {
  var sum = 0;
  sum += num1;
  sum += num2;

  return sum;
}

var add = addNumber(8, 9);

var car = {
  color: "red",
  speed: "200",
  drive: function () {
    return "drive";
  },
  piston: [
    {
      maker: "BMW"
    }, {
      maker: "BMW2"
    },
    function () {
      return "drive";
    }
  ]
};

var arr = ["hi", 123, "new"];
// console.log(shoppinglist, shop());
var shoppinglist = ["apple", "orange", "pear"];

function shop() {
  return "My Shop";
}

function Apple(x, y, color, score) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

var apple = new Apple(10, 20, "Red", 200);

var res = (document.getElementById("hello").innerText = "hi");
console.log(res);