function outer(outerParam) {
  var outerVar = "I am from outer";
  function inner(innerParam) {
    console.log(outerParam + " " + outerVar + " " + innerParam);
  }
  return inner;
}
var innerFunc = outer("Hello");
innerFunc("World"); // Prints: Hello I am from outer World

