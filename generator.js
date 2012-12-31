// générateur d'headlines

/*
TO DO

- possibilité de modifier la place du média dans la phrase
- ajouter la possibilité qu'un celeb twitte
- ajouter comme sujets des événements historiques venant de wikipedia
- ajouter comme sujets des films, TV shows ou livres
- ajouter des méthode pour décider des conjonctions 
- article/sujet (about, on, of) et média / article ('s , in, on, by)
*/


var medias = ["Mother Jones", 
			"Vanity Fair", 
			"The Huff Post", 
			"The Drudge Report",
			"Gizmodo",
			"WIRED",
			"The Daily Beast", 
			"Newsweek",
			"Deadline Hollywood",
			"CNN",
			"Daily Kos",
			"The Economist",
			"Der Spiegel",
			"Le Monde",
			"WSJ",
			"Gawker",
			"The Jerusalem Post",
			"The Nation",
			"New Republic",
			"The New York Times",
			"The New York Post",
			"The New Yorker",
			"Playboy",
			"Politico",
			"Talking Points Memo",
			"Rasmussen",
			"Red State",
			"TMZ",
			"Slate",
			"Salon.com",
			"Rolling Stone",
			"Sydney Morning Herald",
			"Time",
			"The Guardian",
			"Washington Post",
			"Radar",
			"Wikileak",
			"USA Today",
			"The Weekly Standard",
			"Pitchfork"
			];

var media = function () {
				return rand(medias);
			}

var articleTypes = [ 
					"takedown of", 
					"expose on", 
					"report on",
					"year-long investigation of",
					"report on",
					"piece about",
					"article about",
					"opinion paper on",
					"tell-all about",
					"behind-the-scenes of",
					"take on",
					"special report on",
					"feature on",
					"cover story about"
					];
					
var articleType = function () {
	return rand(articleTypes);
}

var reactions = ["Too long",
					"Couldn't finish it",
					"I don't buy it",
					"Same as last year's",
					"Read it twice",
					"I sent it to my mother",
					"I put it on Facebook",
					"Retweeted it",
					"I didn't like the ending",
					"I hate that author",
					"Meh",
					"Deserves a Pullitzer",
					"That's journalism!",
					"That's journalism?",
					"Is this still America?",
					"Only in America!",
					"Don't even mention it to me",
					"Garbage",
					"I pinned it on my public board",
					"Could have told you the story myself",
					"Wasn't surprised",
					"Don't care",
					"Amazing!",
					"Boring!",
					"I'll wait for the movie",
					"Couldn't sleep after that!"
					]
					

var adjectives = [ "explosive", 
					"breathtaking", 
					"very moving", 
					"heartbraking",
					"heartwarming",
					"racially tinged",
					"surprisingly graphic",
					"groundbraking",
					"unfuriating",
					"weird",
					"demagogic",
					"",
					"",
					"",
					"",
					"",
					"",
					""
					];
					
var adjective = function () {
	return rand(adjectives);
}

var completeSubjects = [
				"working conditions in Apple factories",
				"African dances",
				"dating",
				"nouvelle cuisine",
				"summer movies",
				"SNL",
				"PMS",
				"September 11",
				"the war on terror",
				"the war on drugs",
				"terrorism",
				"community farms",
				"tribal music",
				
				];
				
var peopleSubjects = ['gardening habits',
						"sex life",
						"weird fetish",
						"Mexican past",
						"incident in Vegas",
						"parents",
						"socks",
						"iPhone",
						"favorite albums",
						"weekend",
						"bizare interview",
						"role in the next Woody Allen movie",
						"rap album",
						"sex tape",
						"public meltdown",
						"coming-out",
						"memoirs",
						"private video",
						"new diet",
						"Twitter antics",
						"sex addiction",
						"drug use",
						"tax returns"
						]
						
						
						
var people = [			"Angelina Jolie",
						"Anne Hathaway",
						"Ashlee Simpson",
						"Ashley Olsen",
						"Ashton Kutcher",
						"Beyonce",
						"Blake Lively",
						"Brad Pitt",
						"Bradley Cooper",
						"Britney Spears",
						"Cameron Diaz",
						"Carrie Underwood",
						"Charlie Sheen",
						"Chris Brown",
						"Christina Aguilera",
						"Courteney Cox",
						"Dakota Fanning",
						"Daniel Radcliffe",
						"Demi Moore",
						"Emma Stone",
						"Emma Watson",
						"Eva Longoria",
						"Fergie",
						"George Clooney",
						"Gisele Bundchen",
						"Halle Berry",
						"Heidi Klum",
						"Jake Gyllenhaal",
						"Jay-Z",
						"Jennifer Aniston",
						"Jennifer Garner",
						"Jennifer Hudson",
						"Jennifer Lopez",
						"Jessica Simpson",
						"Joe Jonas",
						"Johnny Depp",
						"Justin Bieber",
						"Justin Timberlake",
						"Kanye West",
						"Kat Von D",
						"Kate Hudson",
						"Kate Middleton",
						"Kate Winslet",
						"Katie Holmes",
						"Katy Perry",
						"Kelly Osbourne",
						"Kendra Wilkinson",
						"Khloe Kardashian",
						"Kim Kardashian",
						"Kourtney Kardashian",
						"Kristen Stewart",
						"Lady Gaga",
						"LeAnn Rimes",
						"Leighton Meester",
						"Lindsay Lohan",
						"Madonna",
						"Mariah Carey",
						"Mary-Kate Olsen",
						"Matthew McConaughey",
						"Megan Fox",
						"Mila Kunis",
						"Miley Cyrus",
						"Neil Patrick Harris",
						"Nicki Minaj",
						"Nicole Richie",
						"Oprah Winfrey",
						"Paris Hilton",
						"Penelope Cruz",
						"Pink",
						"Reese Witherspoon",
						"Rihanna",
						"Robert Pattinson",
						"Russell Brand",
						"Ryan Reynolds",
						"Salma Hayek",
						"Sandra Bullock",
						"Sarah Jessica Parker",
						"Scarlett Johansson",
						"Selena Gomez",
						"Shia LaBeouf",
						"Snooki",
						"Taylor Lautner",
						"Taylor Swift",
						"Tina Fey",
						"Tom Cruise",
						"Tori Spelling",
						"Vanessa Hudgens",
						"Victoria Beckham",
						"Will Smith",
						"Zac Efron"];
						
		
var otherPeople = [	"Donald Trump",
				"Mitt Romney"]

var subject = function(){
	var random = Math.random();
	if (random > 0.8) {
		return rand(completeSubjects)
	}
	return rand(people) + "'s " + rand(peopleSubjects);
}

var intro = function() {
	return media() + "'s " + adjective() + " " + articleType(); 
} 

var articleNameGenerator = function () {
	return  intro() + " " + subject() + ".";
}


var rand = function(array) {
	return array[Math.floor(Math.random()*array.length)];
}
