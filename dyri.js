/*

var followers = 0;   //score  (hit)
var miss = 0


$(document).ready(function () {

	var play;
	var interval;
	//démarer le jeu
	$("#start").click(function(){
		startPlay();
		});
	

	// stop (pour devlpmt)
	$("#stop").click(function(){
		clearInterval(interval);
		});
});

function startPlay() {
	$("#message").fadeOut('slow');
	createArticleDiv();
	interval = setInterval(function(){createArticleDiv();}, 2500);
	
};

function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}


function createArticleDiv() {
	var speed = 10000;
	var text = articleNameGenerator();
	var left = randomFromTo(0, 480);
	$myNewDiv = $("<div />");
	$myNewDiv.addClass("article");
	$myNewDiv.html(text).css({
	left:left+"px",
	top:"-50px"	
		});
	$('#gameZone').append($myNewDiv);
/*
	this.descente = $myNewDiv.animate({
	        top: 400,
	        left: left
	        }, speed, "linear", function() {
	    }).show();
	
	this.setTimeout(function(){
		console.log("time"); 
	}, speed);
*/
/*
	descente2($myNewDiv);
	
	$myNewDiv.click(function(){
		addFollowers();
//		$(this).fadeOut(600, function(){
			$(this).remove();
//			});
	});
	
}

var descente2 = function(element){
	var top = element.css('top');
	var topNb = top.slice(0, -2);
	console.log(topNb);

	setInterval(function(){
		console.log("tick");
		topNb+=5;
		element.css('top', (topNb)+"px");
	}, 25);
}

function addFollowers() {
	followers+=25;
	$('#followers').html(function(){
		if (followers > 1)
			return followers + " followers";
		return followers + " follower";
	})
}

*/
