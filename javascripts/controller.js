//Controller for Angular.

var app = angular.module('SenTool',['ngRoute','chart.js']);

// Creating a controller for each page injecting Angular's $scope
app.controller('mainController', function($scope) {
    $scope.message = 'Welcome to SenTool!';
    $scope.slogan = 'A slogan to go here that summarises the app';

});

app.controller('buildController', function($scope) {
    $scope.message = 'Create your own Sentence Diagrams!';
});

app.controller('treeController', function($scope) {
    $scope.message = 'View the syntax tree representation of various sentences!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Learn about Sentence Diagrams!';
});

app.controller('treantController', function($scope){
    $scope.simpleSentence = new Treant(simple_sentence_syn);
    $scope.adjSentence = new Treant(adj_sentence_syn);
    $scope.advSentence = new Treant(adv_sentence_syn);
    $scope.prepSentence = new Treant(prep_sentence_syn);
});

app.controller('barChartController', function($scope){
    $scope.labels = ['English', 'Spanish', 'Chinese', 'Arabic', 'French', 'Portuguese'];
    $scope.series = ['Native Language', 'Second Language','Total'];
    $scope.options = { legend: { display: true }};
    $scope.colors = [
                     { //CyanBlue
                      backgroundColor: 'rgba(95,158,160,0.2)',
                      pointBackgroundColor: 'rgba(95,158,160,1)',
                      pointHoverBackgroundColor: 'rgba(95,158,160,1)',
                      borderColor: 'rgba(95,158,160,1)',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: 'rgba(95,158,160,0.8)'
                     },
                     { //DarkGray
                      backgroundColor: 'rgba(77,83,96,0.2)',
                      pointBackgroundColor: 'rgba(77,83,96,1)',
                      pointHoverBackgroundColor: 'rgba(77,83,96,1)',
                      borderColor: 'rgba(77,83,96,1)',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: 'rgba(77,83,96,0.8)'
                     },
                     { //DarkRed
                      backgroundColor: 'rgba(153,0,0,0.2)',
                      pointBackgroundColor: 'rgba(153,0,0,1)',
                      pointHoverBackgroundColor: 'rgba(153,0,0,1)',
                      borderColor: 'rgba(153,0,0,1)',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: 'rgba(153,0,0,0.8)'
                     }
                    ];

    $scope.data = [
                    [371959910, 436667750, 897902930 , 295783650, 76096430, 218765470],  //native language
                    [611563010, 91308400, 193880000, 89435983, 153485770, 11180000],  //second language
                    [983522920, 527976150, 1091782930, 385219633, 229582200, 229945470]  //total
                  ];
               });




// configuring the routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the build page
        .when('/build', {
            templateUrl : 'pages/build.html',
            controller  : 'buildController'
        })

        // route for the tree page
        .when('/tree', {
            templateUrl : 'pages/tree.html',
            controller  : 'treeController'
        })

        // route for the tools div
        .when('/tools', {
            templateUrl : 'pages/about.html#tools',
            controller  : 'aboutController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        });
});
