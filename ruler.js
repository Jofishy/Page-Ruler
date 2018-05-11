var fromX, fromY;
var svg = document.createElementNS ('http://www.w3.org/2000/svg',"svg");
svg.setAttribute("style", "position: absolute; top:0;left:0;height: 20000px;width: 100%");
var line = document.createElementNS('http://www.w3.org/2000/svg','line');
line.setAttribute("style", "stroke-width: 10; stroke: red");
var text = document.createElement('span');
text.setAttribute('style', 'position:fixed; top:5px;right:5px; background-color:white;');

svg.appendChild(line);
document.body.appendChild(svg);
document.body.appendChild(text);

var svg_elems = document.getElementsByTagName('svg');
var svg_elem = svg_elems[svg_elems.length - 1];

document.body.addEventListener("mousedown", function (e) {
  fromX = e.pageX;
  fromY = e.pageY;

});

document.body.addEventListener("mousemove", function (e) {
  if (fromX === undefined || svg_elem.style.display == "none") {
    return;
  }

  line.setAttribute("x1", fromX);
  line.setAttribute("x2", e.pageX);
  line.setAttribute("y1", fromY);
  line.setAttribute("y2", e.pageY);

  //text.setAttribute('x', e.pageX);
  //text.setAttribute('y', e.pageY);

  var x_distance = Math.abs(fromX - e.pageX);
  var y_distance = Math.abs(fromY - e.pageY);

  text.innerHTML = "x:" + x_distance + " y:" + y_distance;

//   console.log(
//     [fromX, fromY], " to ", [e.pageX, e.pageY], "Distance:",
//     Math.sqrt(Math.pow(x_distance, 2) + Math.pow(y_distance, 2)),
//     "x Distance", x_distance,
//     "y Distance:", y_distance
//   );
});

document.body.addEventListener("mouseup", function (e) {
  fromX = undefined;
  fromY = undefined;
});

var toggleRuler = function (){
    if(svg_elem.style.display == "none"){
        svg_elem.style.display = "block";
    }
    else {
        svg_elem.style.display = "none";
        text.innerHTML ='Enable ruler';
    }
}

text.addEventListener('mouseup', toggleRuler); 
