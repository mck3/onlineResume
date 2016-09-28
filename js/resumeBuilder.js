/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("James McKinnes");
//var awesomeThoughts = "I am James McKinnes and I am AWESOME!"
//var newstring = awesomeThoughts.replace("AWESOME!", "FUN!")
//console.log(newstring)
//var formattedContact = HTML
//skills = ["Python","Java","Photoshop","Web Development"];
var bio = {
    "name": "James Mc",
    "role": "Web Developer",
    "contacts": {
        "mobile": "919-867-5309",
        "email": "theAmazingGlob@gmail.com",
        "github": "https://github.com/mck3/onlineResume",
        "location": "Raleigh, NC",
    },
    "welcomeMessage": "Hi, my title is James, thank you for taking the time to check out my website.",
    "biopic": "http://goo.gl/QJGXoH",
    "skills": ["Python", "Java", "Photoshop", "Web Development"] //last value does not have a comma
};


var education = {
    "schools": [{
        "name": "Polk State College",
        "location": "Winter Haven, FL",
        "degree": "Micromanaging",
        "majors": ["Pop Culture ", " Floral Management"],
        "dates": "2011 to 2015",
        "url": "https://www.polk.edu/"
    }, {
        "title": "University Of North Carolina",
        "location": "Chaple Hill, NC",
        "degree": "Unfinished",
        "majors": ["International Communication ", " Peace, War, and Defense"],
        "dates": "2015 to 2016",
        "url": "http://www.unc.edu/"
    }],
    "onlineCourses": [{

        "title": "Into to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, ]
};

var work = {
    "jobs": [{
        "employer": "The Iron Bank of Braavos",
        "title": "Teller",
        "dates": "2016 to Current",
        "location": "Chapel Hill, NC",
        "description": "I am in charge of managing day to day transactions and counting coin."
    }, {
        "employer": "Picsolve",
        "title": "Senior Team Lead",
        "dates": "2013 to 2016",
        "location": "Winter Haven, FL",
        "description": "Senior team leads were in charge of running operations inside the park."
    }, {
        "employer": "Merlin Entertainments",
        "title": "Retail Associate",
        "dates": "2011 to 2013",
        "location": "Orlando, FL",
        "description": "As a retail associate it is my job to make sure customers purchase the correct promoted items and tried all the new cola flavors."
    }]
};



var projects = {
    "projects": [{
        "title": "Build your own quiz",
        "dates": "2016",
        "description": "The object of this project was to create a fill in the blanks quiz that can be changed in the code to match what subject your trying to learn vocabulary for.",
        "images": ["http://goo.gl/UXpz7Q,", "https://goo.gl/EfCVls" ]
    }, {
        "title": "Website Notes",
        "dates": "2016",
        "description": "In this project I was to create a website to organize my notes using the tools taught in the class.",
        "images": ["http://goo.gl/4gM4vR", "https://goo.gl/0Ed8hr"]
    }]
};


 function displayBioDetails() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var bioPhoto = bio.bioPic;
    var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPicture);
    $("#header").prepend(formattedName);
    $("#header").append(formattedRole);
     $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);

    });


}

displayBioDetails();

function appendResume(what, how, where) {

    $(where).append(how.replace("%data%", what));

}

appendResume(bio.contacts.mobile, HTMLmobile, "#topContacts, #footerContacts");
appendResume(bio.contacts.email, HTMLemail, "#topContacts, #footerContacts");
appendResume(bio.contacts.location, HTMLlocation, "#topContacts, #footerContacts"); 


function displayEducation() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", school.title);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedEducation = formattedSchool + formattedDates + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolMajor;
        $(".education-entry:last").append(formattedEducation);
    });

    $(".education-entry:last").append(HTMLonlineClasses) 
        education.onlineCourses.forEach(function(classes) {
        $("education").append(HTMLonlineClasses);
        var FormattedOnlineClassesTitle = HTMLonlineTitle.replace("%data%", classes.title);
        var formattedOnlineSchooltitle = HTMLonlineSchool.replace("%data%", classes.school);
        var formattedURL = HTMLonlineURL.replace("%data%", classes.url);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", classes.dates);
        var printOnlineClasses = FormattedOnlineClassesTitle + formattedOnlineSchooltitle + formattedURL + formattedonlineDates;
        $(".education-entry:last").append(printOnlineClasses);
    });
}

displayEducation();


function displayWork() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
    });
    $
}
displayWork();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);

    project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedProjectImage);

    });

    });
};

projects.display();
/*
$("#main").append(internationalizeButton);

function intitle(title) {
    var titleSplit = title.split(" ");
    var lasttitle = titleSplit[1].toUpperCase();
    var firsttitle = titleSplit[0];
    internationalizedtitle = firsttitle + " " + lasttitle;
    return internationalizedtitle;
}
*/
//add a map
$("#mapDiv").append(googleMap);