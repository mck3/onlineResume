/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("James McKinnes");
var formattedName = HTMLheaderName.replace("%data%", "James McKinnes");
var formattedRole = HTMLheaderRole.replace("%data%", "Be Awesome");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

//var awesomeThoughts = "I am James McKinnes and I am AWESOME!"

//var newstring = awesomeThoughts.replace("AWESOME!", "FUN!")
//console.log(newstring)

//var formattedContact = HTML

//skills = ["Python","Java","Photoshop","Web Development"];

var bio = {
    "name": "Chris Merger",
    "role": "Web Developer",
    "contacts": {
        "mobile": 9198675309,
        "email": "theAmazingGlob@gmail.com",
        "location": "Chapel Hill, NC"
    },
    "photo": "http://goo.gl/QJGXoH",
    "welcomeMessage": "Hi, my name is James, thank you for taking the time to check out my website.",
    "skills": ["Python", "Java", "Photoshop", "Web Development"] //last value does not have a comma
};

var bioPhoto = bio.photo;
var formattedPicture = HTMLbioPic.replace("%data%", bioPhoto);
$("#header").append(formattedPicture);

function appendResume(what, how, where) {

    $(where).append(how.replace("%data%", what));

}

appendResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendResume(bio.contacts.email, HTMLemail, "#topContacts");
appendResume(bio.contacts.location, HTMLlocation, "#topContacts");

var work = {
    "jobs": [{
        "employer": "The Iron Bank of Braavos",
        "position": "Teller",
        "yearStartEnd": "2016 to Current",
        "location": "Chapel Hill, NC",
        "description": "I am in charge of managing day to day transactions and counting coin."
    }, {
        "employer": "Picsolve",
        "position": "Senior Team Lead",
        "yearStartEnd": "2013 to 2016",
        "location": "Winter Haven, FL",
        "description": "Senior team leads were in charge of running operations inside the park."
    }, {
        "employer": "Nuka World",
        "position": "Retail Associate",
        "yearStartEnd": "2011 to 2013",
        "location": "Boston, MA",
        "description": "As a retail associate it is my job to make sure customers purchase the correct promoted items and tried all the new cola flavors."
    }]
};

var education = {
    "school": [{
        "name": "Polk State College",
        "location": "Winter Haven, FL, US",
        "yearsAttended": "2011 to 2015"
    }, {
        "name": "Ridge Community High",
        "location": "Davenport FL, US",
        "yearsAttended": "2008 to 2011"
    }],
    "onlineCourses": [{

        "courseTitle": "Into to Programming Nanodegree",
        "school": "Udacity",
        "yearsAttended": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, ]
};

var project = {
    "projects": [{
        "name": "Build your own quiz",
        "dates": "2016",
        "description": "The object of this project was to create a fill in the blanks quiz that can be changed in the code to match what subject your trying to learn vocabulary for.",
        "images": "http://goo.gl/UXpz7Q"
    }, {
        "name": "Website Notes",
        "dates": "2016",
        "description": "In this project I was to create a website to organize my notes using the tools taught in the class.",
        "images": "http://goo.gl/4gM4vR"
    }]
};




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

function displayEducation() {
    education.school.forEach(function(schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", schools.name);
        var formattedDates = HTMLschoolDates.replace("%data%", schools.yearsAttended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools.location);
        var formattedEducation = formattedSchool + formattedDates + formattedSchoolLocation;
        $(".education-entry:last").append(formattedEducation);
    });
}

displayEducation();

function displayOnlineEducation() {
    education.onlineCourses.forEach(function(classes) {
        $("education").append(HTMLonlineClasses);
        var FormattedOnlineClassesTitle = HTMLonlineTitle.replace("%data%", classes.courseTitle);
        var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", classes.school);
        var formattedURL = HTMLonlineURL.replace("%data%", classes.url);
        var printOnlineClasses = FormattedOnlineClassesTitle + formattedOnlineSchoolName + formattedURL;
        $(".education-entry:last").append(printOnlineClasses);
    });
}

displayOnlineEducation();


function displayWork() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.position);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.yearStartEnd);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
    });
}
displayWork();

projects.display = function() {
    project.projects.forEach(function(projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.name);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.images);
        $(".project-entry:last").append(formattedProjectImage);

    });
};

projects.display();
/*
$("#main").append(internationalizeButton);

function inName(name) {
	var nameSplit = name.split(" ");
	var lastName = nameSplit[1].toUpperCase();
	var firstName = nameSplit[0];
	internationalizedName = firstName + " " + lastName;
	return internationalizedName;
}
*/
//add a map
$("#mapDiv").append(googleMap);