function w3_open(y) {
  document.getElementById("imginfo").classList.add("hidden")
  var x = document.getElementById(y);

  if (x.classList.contains("fadein")) {
    w3_close(y);
  } else {
    closeall();
    document.getElementById(y + "link").classList.add("active");
    x.classList.add("fadein");
    x.classList.remove("hidden");
    // x.style.display = "block";
  }
  // document.getElementById("menu").style.display = "none";
}
function w3_close(y) {
  var x = document.getElementById(y);
  document.getElementById(y + "link").classList.remove("active");
  x.classList.add("hidden");
  x.classList.remove("fadein");
}
function closeall() {
  w3_close("work");
  w3_close("info");
  document.getElementById("worklink").classList.remove("active");
  document.getElementById("infolink").classList.remove("active");
}
window.onload = function () {
  var hash = window.location.hash.substr(1);
  console.log(hash);
  if (hash == "work") {
    w3_open("work");
    document.getElementById("worklink").classList.add("active");
  }
  if (hash == "info") {
    w3_open("info");
    document.getElementById("infolink").classList.add("active");
  }
};

window.addEventListener("wheel", function (scroll) {
  if (scroll.deltaX == 0) {
    background(-1);
  } else if (scroll.deltaY > 0) {
    background(1);
  }
});

// var intervalID = window.setInterval(background, 2000);
var i = 0;
var BackgroundImg = ["assets/bk.jpg", "assets/bk2.jpg", "assets/bk3.jpg"];


var Key = [1,2,3,4,5,6,7];

var Images = ["assets/constructed/RJCALOW-altcamerainlandscape-2.jpg",
 "assets/darkpeak/RJCALOW_peak_district_holga-8.jpg",
 "assets/pandemicsketchbook/14.jpg",
"assets/snag/2.jpg",
"assets/unpitched/0007.jpg",
"assets/zone.gif"]

var Imginfo = [
'<a href="https://rjcalow.co.uk/constructed">Constructed</a>',
'<a href="https://rjcalow.co.uk/darkpeak">Dark Peak</a>',
'<a href="https://rjcalow.co.uk/pandemicsketchbook">Pandemic Sketchbook</a>',
' <a href="https://rjcalow.co.uk/snag">Snag / Inflorescence</a>',
'<a href="https://rjcalow.co.uk/unpitched">Unpitched</a>',
' <a href="https://rjcalow.co.uk/zone">Zone</a>'
]


function background(x) {
  if (document.getElementById("background").classList.contains("fadeinfast")) {
    return;
  }
  i = i + x;
  if (i >= 6) {
    i = 0;
  } else if(i< 0){
    i = 5;
  }
  console.log(i)
  document.getElementById("imginfo").classList.remove("hidden")
  document.getElementById("background").classList.add("fadeinfast");
  document.getElementById("background").style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url("' +
    Images[i] +
    '")';
  //document.getElementById("wrapper").style.backgroundPosition = "center";
  document.getElementById("imginfo").innerHTML = Imginfo[i];
  setTimeout(function () {
    document.getElementById("background").classList.remove("fadeinfast");
  }, 500);
}

function removefade() {
  document.body.classList.remove("fadein");
}

function changebk(x) {
  document.getElementById("imginfo").classList.add("hidden")
  document.getElementById("background").style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),url("' +
    x +
    '")';

    

}