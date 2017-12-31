var app = angular.module('resumeApp', []);

app.controller('skillController', ['$scope', '$http', function ($scope, $http) {

  $scope.languages = [{
    "Name": "C++",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/C++.png"
  }, {
    "Name": "Java",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/Java.png"
  }, {
    "Name": "C#",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/CSharp.png"
  }, {
    "Name": "Perl",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/Perl.png"
  }, {
    "Name": "HTML",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/HTML.png"
  }, {
    "Name": "CSS",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/CSS.png"
  }, {
    "Name": "JavaScript",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/JavaScript.png"
  }, {
    "Name": "Node.js",
    "Proficiency": 4,
    "Icon": "images/Language_Icons/Nodejs.png"
  }, {
    "Name": "Python",
    "Proficiency": 3,
    "Icon": "images/Language_Icons/Python.png"
  }, {
    "Name": "jQuery",
    "Proficiency": 3,
    "Icon": "images/Language_Icons/jQuery.png"
  }]

  $scope.tools = [{
    "Name": "Visual Studio",
    "Proficiency": 4,
    "Icon": "images/Tool_Icons/Visual_Studio.png"
  }, {
    "Name": "Visual Studio Code",
    "Proficiency": 4,
    "Icon": "images/Tool_Icons/Visual_Studio_Code.png"
  }, {
    "Name": "Git",
    "Proficiency": 4,
    "Icon": "images/Tool_Icons/Git.png"
  }, {
    "Name": "SQL Server",
    "Proficiency": 3,
    "Icon": "images/Tool_Icons/SQL_Server.png"
  }, {
    "Name": "OpenShift",
    "Proficiency": 3,
    "Icon": "images/Tool_Icons/OpenShift.png"
  }, {
    "Name": "Xcode",
    "Proficiency": 3,
    "Icon": "images/Tool_Icons/Xcode.png"
  }, {
    "Name": "JBoss",
    "Proficiency": 3,
    "Icon": "images/Tool_Icons/JBoss.png"
  }, {
    "Name": "Toad for Oracle",
    "Proficiency": 3,
    "Icon": "images/Tool_Icons/Toad_for_Oracle.png"
  }]

  $scope.environments = [{
    "Name": "macOS",
    "Proficiency": 5,
    "Icon": "images/Environment_Icons/macOS.png"
  }, {
    "Name": "Windows",
    "Proficiency": 5,
    "Icon": "images/Environment_Icons/Windows_7.png"
  }, {
    "Name": "Windows Server 2012",
    "Proficiency": 4,
    "Icon": "images/Environment_Icons/Windows_Server_2012.png"
  }, {
    "Name": "Red Hat",
    "Proficiency": 4,
    "Icon": "images/Environment_Icons/Red_Hat.png"
  }, {
    "Name": "SUSE Linux",
    "Proficiency": 2,
    "Icon": "images/Environment_Icons/SUSE_Linux.png"
  }, {
    "Name": "Ubuntu",
    "Proficiency": 2,
    "Icon": "images/Environment_Icons/Ubuntu.png"
  }]

  $scope.getProficiency = function (proficiency) {
    return new Array(proficiency);
  }
}]);

app.filter('trustAsHTML', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
});

app.controller('jobController', ['$scope', '$http', function ($scope, $http) {

  $scope.jobs = [{
    "Role": "Technology Development Program Senior Associate",
    "Company": "Optum",
    "Site": "https://www.optum.com/",
    "Description": "Test",
    "Icon": "images/Company_Icons/Optum.png"
  }, {
    "Company": "Optum",
    "Role": "Technology Development Program Intern",
    "Site": "https://www.optum.com/",
    "Icon": "images/Company_Icons/Optum.png",
    "Description": "Test"
  }, {
    "Company": "Maverick Software Consulting",
    "Role": "Software Engineering Intern",
    "Site": "http://www.mavericksoftware.com/",
    "Icon": "images/Company_Icons/Maverick.png",
    "Description": "The most important job I had during college. I started working for Maverick as a Student Software Engineer from the spring semester of my sophomore year to the penultimate week of my senior year. Maverick contracts with<a href=\"https://www.veritas.com/\" target=\"_blank\">Veritas Technologies</a> (formerly Symantec) to give college students the opportunity to gain crucial real-world experience by working as SQA developers.<br> I wrote countless Perl scripts to automate the test scenarios for <a href=\"https://www.veritas.com/product/backup-and-recovery/netbackup-8.html?inid=us_veritas_home_products_netbackup-8\" target=\"_blank\">NetBackup</a>, the world's leading backup and recovery solution for enterprise data centers and hybrid clouds.<br> When I wasn't coding for Maverick, I was out promoting future \"Mavs\" to take a chance and apply. I still advocate for Maverick whenever I can, like when I return to St. Cloud State for CSCI Club, or when I bump into a TDP summer intern at Optum who's looking for advice before they return to school."
  }, {
    "Company": "Symantec",
    "Role": "Software Quality Assurance Intern",
    "Site": "https://www.symantec.com/",
    "Icon": "images/Company_Icons/Symantec.png",
    "Description": "Test"
  }, {
    "Company": "Marnanteli's Pizza",
    "Role": "Manager",
    "Site": "http://www.marnantelispizza.com/",
    "Icon": "images/Company_Icons/Marnanteli's.png",
    "Description": "Test"
  }, {
    "Company": "Merrill Corporation",
    "Role": "Fulfillment Associate",
    "Site": "https://www.merrillcorp.com/en/",
    "Icon": "images/Company_Icons/Merrill.png",
    "Description": "Test"
  }]
}]);
