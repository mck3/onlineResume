/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("James McKinnes");


var formattedName = HTMLheaderName.replace("%data%", "James McKinnes");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

//var awesomeThoughts = "I am James McKinnes and I am AWESOME!"

//var newstring = awesomeThoughts.replace("AWESOME!", "FUN!")
//console.log(newstring)

//var formattedContact = HTML

//skills = ["Python","Java","Photoshop","Web Development"];

var bio = {
	"name" : "James McKinnes",
	"role" : "Web Developer",
	"contacts" : {
	"phone" : 8638675309,
	"email" : "mckinnes3@gmail.com",
	"location" : "North Carolina",
	},
	"photo" : "http://goo.gl/QJGXoH",
	"welcomeMessage" : "Hi, my name is James, thank you for taking the time to check out my website.",
	"skills" : ["Python","Java","Photoshop","Web Development"] //last value does not have a comma
};

var bioPhoto = bio.photo
var formattedPicture = HTMLbioPic.replace("%data%", bioPhoto);
$("#header").append(formattedPicture);

function appendResume(what, how, where) {

$(where).append(how.replace("%data%", what));

}

appendResume (bio.contacts.phone, HTMLmobile, "#topContacts");
appendResume (bio.contacts.email, HTMLemail, "#topContacts");
appendResume (bio.contacts.location, HTMLlocation, "#topContacts");

var work = {
	"jobs":[
	{
		"employer": "Wells Fargo",
		"position": "Teller",
		"yearStartEnd": "2016 to Current",
		"location" : "Chapel Hill, NC",
		"description" : "As a Teller for Wells Fargo it is not only my job to process deposits and withdraws but also protect the customers who walk through the door."
	},
	{
		"employer": "Picsolve",
		"position": "Senior Team Lead",
		"yearStartEnd": "2013 to 2016",
		"location" : "Winter Haven, FL",
		"description" : "Senior team leads were in charge of running operations inside the park."
	},
	{
		"employer": "Merlin Entertainments",
		"position": "Retail Associate",
		"yearStartEnd": "2011 to 2013",
		"location" : "Winter Haven, F"L, 
		"description" : "A retail assosiate ran transactions on the till"
	}
	]
};

var education= {
	"schools": [
	{
		"name": "Polk State College",
		"city": "Winter Haven, FL, US",
		"yearsAttended": "2011 to 2015"
	},
	{
		"name": "Ridge Community High",
		"city": "Davenport FL, US",
		"yearsAttended": "2008 to 2011"
	}
	],
	"onlineCourses":[
	{
		
		"courseTitlle": "Into to Programming Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},
	]
};

var projects = {
	"projects" : [
		{
			"name" : "Build your own quiz",
			"dates" : "2016",
			"description" : "The object of this project was to create a fill in the blanks quiz that can be changed in the code to match what subject your trying to learn vocabulary for.",
			"images" : "http://goo.gl/UXpz7Q"
		},
		{
			"name" : "Website Notes",
			"dates" : "2016",
			"description" : "In this project I was to create a website to organize my notes using the tools taught in the class.",
			"images" : "http://goo.gl/4gM4vR"
		}
	]
}


if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
function displayWork(){
	for(job in work.jobs) {
		//console.log(work.company[work.company.name])
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearStartEnd);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var fomrattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description) 
		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + fomrattedWorkDescription;
		$(".work-entry:last").append(formattedEmployerTitle);
	};
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


$("#main").append(internationalizeButton);

function inName(name) {
	var nameSplit = name.split(" ");
	var lastName = nameSplit[1].toUpperCase();
	var firstName = nameSplit[0];
	internationalizedName = firstName + " " + lastName;
	return internationalizedName;
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
		
	}
}
projects.display();

//add a map
$("#mapDiv").append(googleMap);
