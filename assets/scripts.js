

function w3_open(y) {
  var x = document.getElementById(y)
  
  
  if (x.classList.contains("fadein")) {
    w3_close(y)

  } else {
        closeall()
        document.getElementById(y +"link").classList.add("active")
        x.classList.add("fadein")
        x.classList.remove("hidden")
    // x.style.display = "block";
  }
  // document.getElementById("menu").style.display = "none";

}
function w3_close(y) {
    var x = document.getElementById(y)
    document.getElementById(y +"link").classList.remove("active")
    x.classList.add("hidden")
   x.classList.remove("fadein")
   
}
function closeall() {
    w3_close("work")
    w3_close("info")
    document.getElementById("worklink").classList.remove("active")
    document.getElementById("infolink").classList.remove("active")
}
window.onload = function() {
    var hash = window.location.hash.substr(1);
    console.log(hash);
    if (hash == "work"){
        w3_open("work")
        document.getElementById("worklink").classList.add("active")
    }
    if (hash == "info"){
        w3_open("info")
        document.getElementById("infolink").classList.add("active")
    }
  };


window.addEventListener('wheel', function (scroll) {
  if (scroll.deltaX == 0) {
    background()
  }
  else if (scroll.deltaY > 0) {
    background()
  }
});

// var intervalID = window.setInterval(background, 2000);
var i = 0;
var BackgroundImg = ["assets/bk.jpg",
"assets/bk2.jpg",
"assets/bk3.jpg"
];

function background() {
if (document.getElementById("background").classList.contains("fadeinfast")){ return;}
    i = i + 1;
    if (i >= 3) {
        i = 0;
      }
  console.log(i);
  document.getElementById("background").classList.add("fadeinfast")
  document.getElementById("background").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),url("' + BackgroundImg[i] + '")'
  //document.getElementById("wrapper").style.backgroundPosition = "center";
  setTimeout(function(){ document.getElementById("background").classList.remove("fadeinfast") }, 500);
  
    }

    function removefade(){
      document.body.classList.remove("fadein")
    }