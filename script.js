document.addEventListener("mousemove", function (event) {
  var sparkle = document.querySelector(".sparkle");
  var x = event.clientX;
  var y = event.clientY;

  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
});
