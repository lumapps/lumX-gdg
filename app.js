/* global angular */
'use strict'; // jshint ignore:line


var app = angular.module('gdg', ['lumx']);

app.controller('AppController', function($scope, Layout, LxDialogService, LxNotificationService)
{   
    $scope.Layout = Layout;

    $scope.data = {
        filter: undefined
    };

    $scope.users = [
        { name: 'Adam',      email: 'adam@email.com',      age: 10, picture: "http://placehold.it/100x100" },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, picture: "http://placehold.it/100x100" },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, picture: "http://placehold.it/100x100" },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 31, picture: "http://placehold.it/100x100" },
        { name: 'Estefanía', email: 'estefanía@email.com', age: 16, picture: "http://placehold.it/100x100" },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, picture: "http://placehold.it/100x100" },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, picture: "http://placehold.it/100x100" },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, picture: "http://placehold.it/100x100" }
    ];

    $scope.files = [
        {
            "_id": "5485d18f73177229e2b4c3f3",
            "title": "Zu excepteur dolore minim",
            "description": "Pariatur velit excepteur enim id nulla esse proident elit id",
            "created": "Tuesday, November 18, 2014 4:16 PM",
            "updated": "Wednesday, June 18, 2014 5:35 AM",
            "picture": "http://placehold.it/640x480",
            "location": "nisi laboris",
            "size": 5.7637,
            "isActive": false,
            "owner": $scope.users[0],
            "users": [$scope.users[0], $scope.users[1], $scope.users[3], $scope.users[7]]
        },
        {
            "_id": "5485d18f7695366e30af07b7",
            "title": "Minim tempor quis voluptate",
            "description": "Tempor velit est cillum laboris do laborum quis officia sit",
            "created": "Tuesday, July 1, 2014 5:47 PM",
            "updated": "Sunday, August 31, 2014 5:17 AM",
            "picture": "http://placehold.it/640x480",
            "location": "Lorem exercitation",
            "size": 9.8158,
            "isActive": false,
            "owner": $scope.users[1],
            "users": [$scope.users[1], $scope.users[2], $scope.users[4], $scope.users[5], $scope.users[7]]
        },
        {
            "_id": "5485d18fa01a5fa4883d5869",
            "title": "Esse dolor aliqua culpa",
            "description": "Dolore consectetur excepteur ipsum velit nisi ex mollit eu mollit",
            "created": "Friday, August 1, 2014 12:29 PM",
            "updated": "Friday, February 14, 2014 11:43 AM",
            "picture": "http://placehold.it/640x480",
            "location": "qui irure",
            "size": 9.3761,
            "isActive": false,
            "owner": $scope.users[2],
            "users": [$scope.users[2], $scope.users[3]]
        },
        {
            "_id": "5485d18f7df8b5c83e2f3e18",
            "title": "Sit duis sit mollit",
            "description": "Amet eiusmod in pariatur minim anim sunt ad elit anim",
            "created": "Monday, June 2, 2014 9:31 PM",
            "updated": "Thursday, May 1, 2014 12:56 PM",
            "picture": "http://placehold.it/640x480",
            "location": "amet anim",
            "size": 9.6424,
            "isActive": false,
            "owner": $scope.users[3],
            "users": [$scope.users[3], $scope.users[7], $scope.users[8]]
        },
        {
            "_id": "5485d18fa43a8743545859ed",
            "title": "Veniam Lorem mollit ad",
            "description": "Lorem duis deserunt et cupidatat sit velit sit adipisicing adipisicing",
            "created": "Wednesday, March 5, 2014 3:56 PM",
            "updated": "Monday, November 24, 2014 6:51 AM",
            "picture": "http://placehold.it/640x480",
            "location": "veniam ea",
            "size": 2.4898,
            "isActive": true,
            "owner": $scope.users[4],
            "users": [$scope.users[4]]
        },
        {
            "_id": "5485d18fa2201e398db1b2c4",
            "title": "Exercitation reprehenderit aliqua ex",
            "description": "Veniam voluptate sunt ea voluptate proident incididunt officia enim eiusmod",
            "created": "Thursday, December 4, 2014 5:10 PM",
            "updated": "Wednesday, March 26, 2014 10:34 PM",
            "picture": "http://placehold.it/640x480",
            "location": "eiusmod ex",
            "size": 2.6681,
            "isActive": true,
            "owner": $scope.users[5],
            "users": [$scope.users[5], $scope.users[2], $scope.users[4], $scope.users[7]]
        },
        {
            "_id": "5485d18f0f03c2518bce221e",
            "title": "Duis anim lorem aute",
            "description": "Nulla non cupidatat veniam aliquip ut commodo minim irure non",
            "created": "Thursday, October 16, 2014 11:45 AM",
            "updated": "Sunday, March 30, 2014 2:08 PM",
            "picture": "http://placehold.it/640x480",
            "location": "excepteur veniam",
            "size": 5.7152,
            "isActive": false,
            "owner": $scope.users[6],
            "users": [$scope.users[6], $scope.users[1]]
        }
    ];

    $scope.selectedFile = $scope.files[0];

    $scope.selectFile = function(file)
    {
        $scope.selectedFile = file;

        Layout.openPanel();
    };

    $scope.newFile = function()
    {
        $scope.editingFile = {
            "_id": undefined,
            "title": undefined,
            "description": undefined,
            "created": "Tuesday, November 18, 2014 4:16 PM",
            "updated": "Wednesday, June 18, 2014 5:35 AM",
            "picture": "http://placehold.it/640x480",
            "location": undefined,
            "size": undefined,
            "isActive": false,
            "owner": $scope.users[1],
            "users": []
        };

        LxDialogService.open('file-managment');
    };

    $scope.editFile = function(file)
    {
        $scope.editingFile = file;
        
        LxDialogService.open('file-managment');
    };

    $scope.deleteFile = function(file)
    {
        LxNotificationService.confirm('Delete file', 'Are you sure you wan to delete thid file?', { cancel:'Disagree', ok:'Agree' }, function(answer)
        {
            console.log(answer);
        });
    };
});

app.service('Layout', function()
{
    var service = {
        sidebarIsOpened: false,
        panelIsOpened: false
    };

    /*
     * Toggle visibility of the sidebar.
     */
    service.toggleSidebar = function()
    {
        service.sidebarIsOpened = !service.sidebarIsOpened;
    };

    /*
     * Open sidebar.
     */
    service.openSidebar = function()
    {
        service.sidebarIsOpened = true;
    };

    /*
     * Close sidebar.
     */
    service.closeSidebar = function()
    {
        service.sidebarIsOpened = false;
    };

    /*
     * Toggle visibility of the panel.
     */
    service.togglePanel = function()
    {
        service.panelIsOpened = !service.panelIsOpened;
    };

    /*
     * Open panel.
     */
    service.openPanel = function()
    {
        service.panelIsOpened = true;
    };

    /*
     * Close panel.
     */
    service.closePanel = function()
    {
        service.panelIsOpened = false;
    };

    return service;
});