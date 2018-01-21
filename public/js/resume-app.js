var app = angular.module('resumeApp', []);

app.controller('skillController', ['$scope', '$http', function ($scope, $http) {

  $http.get("js/skillset.json")
    .then(function (response) {
      $scope.languages = response.data.skillset.languages;
      $scope.tools = response.data.skillset.tools;
      $scope.environments = response.data.skillset.environments;
    });

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

  $http.get("js/jobs.json")
    .then(function (response) {
      $scope.jobs = response.data.jobs;
    });
}]);
