var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider, $locationProvider){
//		$locationProvider.html5Mode(true);
      $routeProvider
//          .when('/',{
//                templateUrl: 'pages/home.html'
//          })
          .when('/about',{
                templateUrl: 'pages/about.html'
          });

});

app.controller('cfgController',function($scope){
//app.navbarURL='include/navbar.html';
});