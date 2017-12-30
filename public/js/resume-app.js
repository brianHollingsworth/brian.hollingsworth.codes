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
      "Description": "Test"
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
