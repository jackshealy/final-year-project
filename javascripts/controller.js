//Controller for Angular.

var app = angular.module('SenTool',['ngRoute','chart.js']);

// Creating a controller for each view injecting Angular's $scope

app.controller('mainController', function($scope) {
    $scope.message = 'Welcome to SenTool!';
    $scope.slogan = 'Sentence diagramming can be a complicated process.';
    $scope.slogan1 = 'Simplify it with SenTool.'

});

app.controller('viewController', function($scope) {
    $scope.message = 'Display various types of sentence diagrams!';
});

app.controller('treeController', function($scope) {
    $scope.message = 'View the syntax tree representation of various sentences!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Learn about Sentence Diagrams!';
});

// configuring view routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home view
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the display view
        .when('/display', {
            templateUrl : 'pages/display.html',
            controller  : 'viewController'
        })

        // route for the tree view
        .when('/tree', {
            templateUrl : 'pages/tree.html',
            controller  : 'treeController'
        })

        // route for the about view
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        });
});


//Controller to display syntax trees. $scope variables store Treant constructors
app.controller('treantController', function($scope){
    $scope.simpleSentence = new Treant(simple_sentence_syn);
    $scope.adjSentence = new Treant(adj_sentence_syn);
    $scope.advSentence = new Treant(adv_sentence_syn);
    $scope.prepSentence = new Treant(prep_sentence_syn);
});

//Controller to create bar chart on about view
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
                      backgroundColor: 'rgba(76,83,96,0.2)',
                      pointBackgroundColor: 'rgba(76,83,96,1)',
                      pointHoverBackgroundColor: 'rgba(76,83,96,1)',
                      borderColor: 'rgba(76,83,96,1)',
                      pointBorderColor: '#fff',
                      pointHoverBorderColor: 'rgba(76,83,96,0.8)'
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




