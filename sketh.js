$(document).ready(function() {
  var $squares;
  var mode = "default";

  function sketch(size) {
    var $sketchpad = $("#sketchpad");
    var pHeight = $($sketchpad).height();
    var pWidth = $($sketchpad).width();

    $sketchpad.html("");

    var pRow = "";

    for (var i = 0; i < size; i++) {
      pRow += "<div class='square'></div>";
    };

    for (var i = 0; i < size; i++) {
      $($sketchpad).append(pRow);
    };
    
    $squares = $("div .square");
		var squareH = (pHeight / size) + "px";
		var squareW = (pWidth / size) + "px";
		$($squares).css("height", squareH);
		$($squares).css("width", squareW);
		draw();
  };
  
  sketch(16);
  
  function draw() {
    if (mode == "default") {
      $($squares).mouseenter(function() {
				$(this).css("background-color", "darkgray");
			});
		}	else if(mode == "RNG") {
			$($squares).mouseenter(function() {
				$(this).css("background-color", getColor());
			});
		};
	};
  
  $("#clear:button").click(function(){
    do {
      var newSize = prompt("Enter new pad size in NUMBERS: ");
      sketch(newSize);
    } while (isNaN(newSize));
  });
    
  $("#default:button").click(function() {
    mode = "default";
    do {
      var newSize = prompt("Enter new pad size in NUMBERS: ");
      sketch(newSize);
    } while (isNaN(newSize));
  });
  
  $("#RNG:button").click(function() {
		mode = "RNG";
		do {
			var newSize = prompt("Enter new pad size in NUMBERS:");
			sketch(newSize);
		}
		while (isNaN(newSize));
	});
  
  function getColor() {
    	var digits = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += digits[Math.floor(Math.random() * 16)];
    	}
    	return color;
	};
  
  
});
