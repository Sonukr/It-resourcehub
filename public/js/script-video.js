
'use strict';

var app = angular.module("myApp", []);

// Main controller   
  app.controller("Main", function($scope, $http, $sce){
    // set  title for default video on load 
        $scope.Name ="AngularJS NYC Meetup"; 
    // set Iframe embed url for  default video on load 
        $scope.embedUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/bxIqp3CNKig?rel=0&showinfo=0&modestbranding=1&autohide=1&theme=light&hd=1");
      // set download url 1  for default video on load 
        $scope.downUrl = $sce.trustAsResourceUrl("http://en.savefrom.net/?url=http://www.youtube.com/embed/bxIqp3CNKig");
      // set download url 2 for  default video on load 
        $scope.downUrl2 = $sce.trustAsResourceUrl("http://keepvid.com/?url=http://www.youtube.com/embed/bxIqp3CNKig");
       
// set playlist download url by click on the course list
        $scope.setPlist = function(id){
            var dwnurlplist = "http://en.savefrom.net/?url=https://www.youtube.com/playlist?list=" + id;
            $scope.downUrlplist = $sce.trustAsResourceUrl(dwnurlplist);
        }
        
// set playlist download url by click on the search btn to get and set youtube plist ID
        $scope.setPlistUrl = function(){
            var list = $scope.list;
            var dwnurlplist = "http://en.savefrom.net/?url=https://www.youtube.com/playlist?list=" + list;
            $scope.downUrlplist = $sce.trustAsResourceUrl(dwnurlplist);
         }
        
// set default iframe  player video and download link from video list by click over it after new playlist load. 
        $scope.setVideo = function(id){
          // define Iframe embed url after click over  new playlist name or searched playlist id.
			var url = "https://www.youtube.com/embed/" + id+"?rel=0&showinfo=0&modestbranding=1&autohide=1&theme=light&hd=1";
          // set Iframe embed url by click over a video name after new playlist load
              $scope.embedUrl = $sce.trustAsResourceUrl(url);
            var dwnurl = "http://en.savefrom.net/?url=http://www.youtube.com/embed/" + id ;
          // set download url 1  by click over a video name after new playlist load
              $scope.downUrl = $sce.trustAsResourceUrl(dwnurl);
          // set download url 2  by click over a video name after new playlist load 
            var dwnurl2 = "http://keepvid.com/?url=http://www.youtube.com/embed/" + id;
              $scope.downUrl2 = $sce.trustAsResourceUrl(dwnurl2);
              console.log(dwnurl);
            }
        
// Set the title by click on video list        
        $scope.setTitle = function(id){
            var Title = "" + id;
            $scope.Name = Title;  
        }
        
// clear the value of serach bar after entering the playlist id, when click on search
        $scope.clearSearch = function () {
        $scope.list = "";
        };
      
// set default video, and get video from playlist
        $scope.videos = [
            {name:"AngularJS NYC Meetup", url:"bxIqp3CNKig"}
        ];
      
 // playlist of the courses     
    $scope.playlist = [
     // JAva Script Playlist
    {    
    name: "Java Script ",
    tutorials: [
        {name:"TutsPlus JavaScript Fundamentals 101 ", url:"PLOxOmO43E6JvLzUBTbc9dkNw7xv9BMTnW"},
        {name:"Validating and Processing Forms with Javascript", url:"PL0nAjsjYSfCESqWC0b0eP6bqTe54XCqpX"},
        {name:"JavaScript and jQuery Tutorials by CodeAcademy", url:"PLQUMc4-0pHw64xFXGFtebKJqLHnF4NmbL"},
        {name:"Up And Run With TypeScript",url:"PLHfLBrRzKS4oop27O1zpkvFeX7yr48arX"},
        {name:"Getting Started With Ember.js", url:"PLHfLBrRzKS4prvmFSd6aW7RgR0rDUX_jZ"},
        {name:"Introduction to d3.js", url:"PLHfLBrRzKS4q4cU4ewZ2Q1pnJZ2WiKAPq"}
         
    ]},
        
    // JQuery Playlist
    {
    name: "JQuery",
	tutorials: [
         {name:"TutsPlus - 30 Days  to Learn jQuery", url:"PLaQXlPB7DGM_YC5IxreMYpIEs8l70rGHo"}
    ]},
        
    // HTML Playlist
    {
    name: "Html & Css",
	tutorials: [
         {name:"TutsPlus - 30 Days to Learn HTML & CSS", url:"PL25A23BCABD9033FA"},
         {name:"HTML5 and CSS3 beginners tutorials", url:"PL41lfR-6DnOruqMacTfff1zrEcqtmm7Fv"},
        {name:"HTML5 and JavaScript tutorial by CodeAcademy", url:"PLQUMc4-0pHw5yMi_k9Dnu351y9ipGcH_M"}
    ]},
        
    // CSS Playlist
    {
    name: "CSS",
	tutorials: [
         {name:"TutsPlus CSS Tips & Tricks", url:"PLAp0wnsFekKzBdbMAoLT9PrqBBAKOv9kv"},
         {name:"Tutsplus CSS3 Animations", url:"PLaZp2zXwZQ-mQGbj_LQl8wv_CzZ4Xr9l0"},
         {name:"Tutsplus Advanced CSS3 Animations", url:"PLaQXlPB7DGM9N8s2R9HN3dA1SNJSj041c"},
         {name:"TutsPlus CSS3 Essentials", url:"PLaQXlPB7DGM8Q9s66MjacEPrSJWzldl-s"}
    ]},
    // Angular Playlist
    {
    name: "Angular JS",
	tutorials: [
         {name:"TutsPlus Build Apps with AngularJS", url:"PLHfLBrRzKS4pdVKVm9wX46TNwSiZbruU0"},
        {name:"AngularJS by Joe Maddalone", url:"PLKiuVKZics1d1rjTROMyprMQbJLNsLCoS"},
        {name:"Egghead.io - AngularJS", url:"PLP6DbQBkn9ymGQh2qpk9ImLHdSH5T7yw7"},
        {name:"All You Need To Know About AngularJS", url:"PLzJZ3ahfm9Q8pwP88ZRSdjwlwn6lrHzrT"},
        {name:"AngularJs - Advanced",url:"PLXMfBR4sjQkkpEygoxoC3h_93AafIssmh"},
    ]},
    // Backbone Playlist
    {
    name: "Backbone JS",
	tutorials: [
         {name:"TutsPlus Backbone JS", url:"PLB4CvSodcHlIB4lm8_e-lnjmL7KUCWuNa"},
        {name:"Introduction to Backbone.js", url:"PLCE344BDBD8FAC282"},
        {name:"Backbone.js tutorial by CodeAcademy" ,url:"PLQUMc4-0pHw6_vUL1ty11EvDIgydBI_BL"},
        {name:"Lynda - Up and Running with Backbone.js", url:"PLUf0Ku8uReVLFybY0RacwEWAqL1bM7cO"},
    ]},
    
   //Bootstrap Playlist
    {
    name:"Bootstrap",
    tutorials:[
        {name:"Learning Bootstrap - Bootstrap 3 Tutorial", url:"PLVDYxb1dYhnqUn0_liNeONyicF1Y3ajLp"},
        {name:"Learn Twitter Bootstrap in 2 Hours",url:"PLKlA1QwYBcmcEUUBSmkl8_kgwn-_zuy-W"},
        {name:"Twitter Bootstrap - CSS Framework",url:"PL7029EEFC21D2DC58"},
    ]},
   
    //Sublime Playlist
    {
    name:"Sublime Text",
    tutorials:[
        {name:"Sublime Text 2", url:"PLmJpVU-TdmVtTLooKvX3jcrOziPjlWrD4"},
    ]}, 
    //Joomla Playlist
    {
    name:"Joomla",
    tutorials:[
        {name:"Lynda Joomla 3 Essential Training  ", url:"PLHRTFGKXJwGH_CNQVCUhDGOwcF0L_01Fk"},   
    ]},
    //Java Playlist
    {
    name:"Java",
    tutorials:[
        {name:"Lynda Java Essential Training  ", url:"PLsDvSc5B2M_Z9U38TQWTHaDePzdCg3A-d"},   
    ]},
    //PHP Playlist
    {
    name:"PHP & MySQL",
    tutorials:[
        {name:"Lynda PHP with MySQL Essential Training  ", url:"PL0nAjsjYSfCGKfDn7OMQVO_Gq-KRU8tR5"},
        {name:"TutsPlus PHP", url:"PLYdoNmlKfG4bt9gaHU2eyVnuAaGN1xSeK"},
        {name:"File Uploading Using PHP", url:"PLHfLBrRzKS4ogmc73DzLarDsQrPnbiaWR"},
    ]},              
     //SEO Playlist
    {
    name:"SEO",
    tutorials:[
        { name:"TutsPlus SEO WEB ", url:"PLagg-4T9evGhjKA3NzSsDEHTV0Qxcs7DR"},
    ]},
    //DCCN Playlist
    {
    name :"Dccn",
    tutorials:[
        {name:"Data Communication & Networking", url:"PL374944B232C0B48E"},   
    ]},
   //MP & MC Playlist
    {
    name:"Mp & Mc",
    tutorials:[
        {name:"Microprocessors & Microcontrollers", url:"PL0E131A78ABFBFDD0"},   
    ]},

    //CodeIgniter Playlist
    {
    name:"CodeIgniter",
    tutorials:[
        {name:"TutsPlus CodeIgniter Essentials", url:"PLqEB9TT9wSdhTdARvyS_dTxNp6JMLP8t4"},
    ]},
    // Laravel Playlist
    {
    name:"Laravel",
        tutorials:[
            {name:"TutsPlus Laravel", url:"PLW-wtStupLefLKLlOtcc_ChVnDSDdgEMn"},
            {name:"Setting Up Laravel", url:"PLHfLBrRzKS4ooTQ2FHzfCcWW_uQOnsCVh"}
            
    ]},
        
    //Express.js playlist    
    {
        name:"Express.JS",
        tutorials:[
            {name:"Express.js for beginners", url:"PLHfLBrRzKS4rU4zt5vUyIMI77YL8wbnic"}
    ]},
    //Security Playlist
    {
        name:"Security",
        tutorials:[
            {name:"Web Security",url:"PLHfLBrRzKS4oeVxpy9vNVYZF0KmrHJ-yZ"},
    ]},
    //Unknown Playlist
    {name:"Unknown",
    tutorials:[
        
    ]},    
    // c# Playlist
    {name:"C#",
     tutorials:[
         {name:"Tutsplus - 30 Days to Learn C#", url:"PLMUNVW3VsMWUB9mPN10vU6jvc_jbHvs1g"},
     ]},
        
    // c Programming Playlist
    {name:"C Programming",
     tutorials:[
         {name:"Objective C Fundamentals and Advanced tutorials by CodeAcademy",                                url:"PLQUMc4-0pHw7J95pk6TaGauodKEiQ98CF"},
     
     ]},
    //python Playlist
    {
      name:"Python",
      tutorials:[
          {name:"PyGame Tutorial by CodeAcademy.", url:"PLQUMc4-0pHw4D7siu8BJMbwXCHm74muqk"}, 
      ]},    
    //Visual Basic Playlist
    {
    name:"Visual Basic",
    tutorials:[
        {name:"Lynda Visual Basic ", url:"PLF8jPKVWTKhZcEoXBFAYsgK0yx55wZHXd"},   
    ]},
    //Mean stack Playlist
    {
    name:"MeanStack",
    tutorials:[
        {name:"30 day to learn Mean Stack ", url:"PL6rhBJX0L3TWYrwrQIi1_MzQDvVhkUVPI"},   
    ]},
     //Photoshop Playlist
    {
    name:"Photoshop",
    tutorials:[
        {name:"TutsPlus Advanced Photoshop Tutorials ", url:"PLqEB9TT9wSdg88DKv-a6sSOKJ82Grre54"},   
    ]},    
   ];
  
// fetch playlist video by playlist ID
      $scope.fetchPlaylist = function(id) {
        var plid = id || $scope.list; //fetch playlist from both method (Course list and playlist ID)
        $http.get('/fetchplaylist', { params: { list: plid} })
          .success(function(res) {
            $scope.playlistName = res.playlistName; // set playlist name
            $scope.videos = res.videos;  //after fetch set videos in default videos list
          });  
      };
    });

//=========================JQuery====================================================//
//Bootstrap tooltip
$(function () { $("[data-toggle='tooltip']").tooltip(); });
        
// call the sidr and fitvid on document ready
$(document).ready(function() {
    $('#side-menu').sidr();
    $("#iframe").fitVids();
    
});

// for loading sidr on ready by preventing default sidr hidden function, or click that sidr btn
$(document).ready(function() {
    $("#side-menu").click();
});

// prevent default colloapsed up function and call that by sidr 
$(document).ready(function() {
   $(".collapsed").sidr();
});

// Nprogress for searching state 
$("#search").click(function() {
$('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 5000);
		});

// Nprogress for default page loading  state
$('body').show();
    $('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 2000);


//plugin for outdated  function, place inside DOM ready function
 $( document ).ready(function() {outdatedBrowser({
     bgColor: '#f25648',
     color: '#ffffff',
     lowerThan: 'transform',
     languagePath: '/partials/outdated-Browser.html'
 })
  });
    
// For change the backgrund-color of disqus
   $('#disqus').css("backgroundColor","White");
      
// For change the iframe shadow of disqus



                        
 