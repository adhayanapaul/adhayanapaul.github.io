var points = 0;
var gall=0;
var kg = 0;

var addRecycle = function(){
	points = points +1;
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });
	grow();
	alert(points);
}

var addCompost = function(){
	points = points + 2;
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });
	grow();
	alert(points);
}

var addTrash = function(){
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });
	grow();
	alert(points);
}

var grow = function(){
	if (points <= 3){
		var filename = "tree1.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points >3){
		var filename = "tree2.jpg";
		$("#pot").attr('src',filename);
	}
}



var searchpage = function(){
	$.mobile.changePage( "#searchPage", { transition: "pop", changeHash: true });
}

var carbon = function(){
	$.mobile.changePage( "#carbon", { transition: "pop", changeHash: true });
}

var calculations = function(){
	var distance;
    distance = document.getElementById("distance").value;
    var mpg;
    mpg = document.getElementById("mpg").value;
    var gall =distance/mpg;
    var kg = gall * 8.887
    if (distance<=1){
    	$.mobile.changePage( "#footprintShort", { transition: "pop", changeHash: true });
    	points=points-4;
    	alert(points+" "+gall+" "+" "+ kg);
    }
    else{
	    $.mobile.changePage( "#footprintMain", { transition: "pop", changeHash: true });
	    points=points-4;
	    alert(points+" "+gall+" "+" "+ kg);
	}
}


var PageToMaterial = function(){
		if ($("#select-choice-1m").val() == "Metals"){
			$.mobile.changePage( "#MetalCan", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Plastic"){
			$.mobile.changePage( "#pagePlastic", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Glass"){
			$.mobile.changePage( "#pageGlass", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Styrofoam"){
			$.mobile.changePage( "#t", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Food"){
			$.mobile.changePage( "#c", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Paper/Cardboard"){
			$.mobile.changePage( "#paper", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#Select A Material", { transition: "pop", changeHash: true });
		}
	}
  
	var CanToDestiny = function(){
		if ($("#select-choice-2m").val() == "Yes"){
			$.mobile.changePage( "#r", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#MetalFoil", { transition: "pop", changeHash: true });
		}
	}

	var FoilToDestiny = function(){
		if ($("#select-choice-3m").val() == "Yes"){
			$.mobile.changePage( "#t", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#MetalScrap", { transition: "pop", changeHash: true });
		}
	}

	var changeGlassPage = function (){
			if ($("#select-choice-1g").val() == "Yes"){
				$.mobile.changePage( "#t", { transition: "pop"} );
			}
			else if ($("#select-choice-1g").val() == "No"){
				$.mobile.changePage( "#pageNotBroken", { transition: "pop"} );
			}
		}

	var changePlasticPage = function (){
		if ($("#select-choice-2p").val() == "Yes"){
			$.mobile.changePage( "#c", { transition: "pop"} );
		}
		else if ($("#select-choice-2p").val() == "No"){
			$.mobile.changePage( "#r", { transition: "pop"} );
		}
	}

	var changePlasticRecPage = function (){
		if ($("#select-choice-3p").val() == "Yes"){
			$.mobile.changePage( "#r", { transition: "pop"} );
		}
		else if ($("#select-choice-3p").val() == "No"){
			$.mobile.changePage( "#t", { transition: "pop"} );
		}
	}

	var changePaper =function(){
	if ($("#select-choice-1c").val()=="yes"){
		$.mobile.changePage( "#c", { transition: "pop"} );
	}
	else if ($("#select-choice-1c").val()=="no"){
		$.mobile.changePage( "#r", { transition: "pop"} );
	}

}