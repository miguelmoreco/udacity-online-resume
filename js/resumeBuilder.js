var DATA = '%data%';

var bio = {
  name: 'Miguel Moreno',
  role: 'Web Developer',
  contacts: {
    mobile: '(708) 937-3997',
    email: 'miguelmoreco@gmail.com',
    github: 'miguelmoreco',
    twitter: '@miguelmoreco',
    location: 'Chicago, IL'
  },
  welcomeMessage: 'IT',
  skills: ['HTML', 'CSS', 'JavaScript'],
  biopic: 'images/milo.jpg',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'National Autonomous University of Mexico',
      'location': 'Mexico City',
      'degree': 'Bachelor of Computer Science',
      'majors': ['Information Technology'],
      'dates': '2005 - 2009',
    }
  ],
  onlineCourses: [
   {
     'title': 'Cisco Certified Network Associate (CCNA)',
     'school': 'National Able Carrer Lab',
     'dates': 'May 2020',
     'url': 'https://www.itcareerlab.org/',
   }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

var work = {
  jobs: [
    {
      employer: 'Packaging Corporation of America',
      title: 'Cut Die Assistant',
      location: 'Bedford Park, IL',
      dates: 'March 2008 - Present',
      description: 'Assist the operator in the 7 color machine  ' +
                   '(ink Print/ Die Cut). Responsible for ensuring a high ' +
                   'quality product is coming off the machine. Conduct ' +
                   'quality checks to ensure boxes have required dimensions ' +
                   'and zero material defects.'
    },
    {
      employer: 'Law Firm of Manuel E Solis',
      title: 'Legal Assistant',
      location: 'Cicero, IL',
      dates: 'February 2017 - March 2018',
      description: 'Assist clients with the help of the Lawyer ' +
                   'with immigration cases.'
    },
    {
      employer: 'Shop & Save Market',
      title: 'Pricing Coordinator & IT Technician',
      location: 'Bridgeview, IL ',
      dates: 'July 2015 - February 2017',
      description: 'I dealt with corresponding in regards to the sale of the week. ' +
                   'As a IT I provided assistance to computer users ' +
                   'resolving technical problems and maintaining the companys ' +
                   'software and computer equipment.'
    },
    {
      employer: 'Mendez Group',
      title: 'Programmer',
      location: 'Mexico City',
      dates: 'February 2012 - May 2013',
      description: 'I programmed a super template in Microsoft Excel for auditors ' +
                   'class schedules, notes and fill institutional forms.'
    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};

var projects = {
  projects: [
    {
      'title': 'Web Page',
      'dates': 'June 2012',
      'description': 'I created a web page for a friend ',
      'images': ['images/project-2.jpg']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
