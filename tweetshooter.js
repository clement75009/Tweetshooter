var play;
var interval;
var followers = 0;   
var miss = 0;
var FPS = 16;
var WIDTH = 1000;
var HEIGHT = 500;
var tweetWidth = 300;

var tweetShooterQueue = [];
var shooterTweets = [];
var keyword = "pékin";
var currentQueueIndex = 0;

$(document).ready(function () {
	init();
});

function init(){
	fetchSearchFeed(keyword);
//	fetchMySQLFeed()
	startPlay();
	//démarer le jeu
	$("#start").click(function(){
		startPlay();
		});
		
	// stop
	$("#stop").click(function(){
		clearInterval(interval);
		});
}

function loop(){
	var intervalId = webkitRequestAnimationFrame(function(){
		updateTweets();
		loop();
	} )
	
/*	setInterval(function(){
	updateTweets();
}, FPS);
	return intervalId;
*/	
}

function updateTweets (){
	for (var i = 0; i < shooterTweets.length; i++){
		var tweet = shooterTweets[i];
		var top = tweet.css('top');
		var topNb = parseInt(top.slice(0, -2));
		topNb += 1 ;
		if (topNb > HEIGHT){
			tweet.remove();
			shooterTweets.splice(i, 1);
		}
		tweet.css('top', (topNb)+"px");
	}
}

function startPlay() {
	$("#message").fadeOut('slow');
	interval = setInterval(createTweetDiv, 2500);
//	interval = setInterval(function(){console.log(shooterTweets.length);}, 2500);
	loop();
};

function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function createTweetDiv() {
	var speed = 10000;
	var tweet = tweetShooterQueue.pop();
	var tweetText = tweet[0];
	var user = tweet[2];
//	articleNameGenerator();
	var left = randomFromTo(0, WIDTH-tweetWidth);
	
	$tweet = $("<div />");
	$tweet.addClass("tweet shooter");
	$tweet.html('<div class="shooterUser">@'+user+'</div><div class=tweetText>'+tweetText+'</div>');
	$tweet.css({
	left:left+"px",
	top:"-50px"	
		});
	shooterTweets.push($tweet);
	$('#gameZone').append($tweet);

	$tweet.click(function(){
		addFollowers();
		$(this).fadeOut(600, function(){
			$(this).remove();
			});
	});
}

function addFollowers() {
	followers +=25;
	$('#followers').html(function(){
		if (followers > 1)
			return parseInt(followers) + " followers";
		return parseInt(followers) + " follower";
	})
}

// méthode pour récupérer tweets depuis MySQL (voir red tweet, blue tweet)
/*
function fetchMySQLFeed(){
		$.getJSON('json.php', function(data) {	
			var tweets = [];
			$.each(data, function(key, tweet) {	
				if (tweet.text){
					console.log (tweet.text);
					var newTweet = [tweet.text, tweet.id, tweet.from_user];	
					tweetShooterQueue.push(newTweet)
				}					
			});
			}  
			);
}			
*/
function fetchSearchFeed(keyword){
	//https://dl.dropbox.com/u/30128236/jsonfeed.txt
	$.getJSON('http://search.twitter.com/search.json?callback=?&rpp=100&q='+keyword,
		function(data) {	
		$.each(data, function(i, tweets) {
			if (tweets.length != undefined && tweets.length > 0 && tweets[0] && tweets[0].created_at != undefined && tweets[0].text != undefined )	{
				//CLEAR PREVIOUS QUEUE
				tweetShooterQueue.length = 0;
				currentQueueIndex = 0;
				for (i = 0; i < tweets.length; i++) {
					if (tweets[i].text != '') {
						tweetShooterQueue[tweetShooterQueue.length] = [tweets[i].text, tweets[i].id, tweets[i].from_user, tweets[i].created_at];
					};
				}				 
			}					
		});
		}  
		);	
}


