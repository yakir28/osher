function fnc() {
    var btn = document.getElementById("btn");
    var div = document.getElementById("div");

    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }