var Main = function ($scope, $http) {
    $scope.pageNo = 1;
    $scope.totalBook = false;
    $scope.Nextbtn = false;
    $scope.Author = false;
    $scope.Top = false;
    $scope.hr = false;
    $scope.disqus = false;
    $scope.facebook = false;
    
  $scope.search = function (evt) {
        var query = $scope.query;
        var url = 'http://it-ebooks-api.info/v1/search/' + query;
        $http.get(url)
                .success(function (data) {
                    $scope.totalBook = true;
                    $scope.Nextbtn=true;
                    $scope.Author=false;
                    $scope.Top=false;
                    $scope.hr=true;
                    $scope.disqus = true;
                    $scope.facebook=true;
                    $scope.total = data.Total;
                    $scope.books = data.Books;
                });
    };

    $scope.next = function () {
        $scope.pageNo++;

        var query = $scope.query;
        var url = 'http://it-ebooks-api.info/v1/search/' + query + '/page/' + $scope.pageNo;

        $http
                .get(url)
                .success(function (data) {
                    $scope.books = data.Books;
            
                });
    };
     

    $scope.prev = function () {
        if ($scope.pageNo >= 2) {
            $scope.pageNo--;
        }

    var query = $scope.query;
    var url = 'http://it-ebooks-api.info/v1/search/' + query + '/page/' + $scope.pageNo;

        $http
                .get(url)
                .success(function (data) {
                    $scope.books = data.Books;
                });
    };
    
    $scope.download = function (id) {
                var url = 'http://it-ebooks-api.info/v1/book/' + id;

                $http.get(url)
            .success(function (data) {
                console.log(id);
                window.open(data.Download);
                
            });
            }
    
    $scope.tag = [
            {name:"Css", query:"css"},
            {name:"html", query:"html"},
            {name:"java", query:"java"}
        ];
  
///////////////////////////////////////////////////////////////////////////
  
  $scope.setquery = function(q){
  var url = 'http://it-ebooks-api.info/v1/search/' + q;
        $http.get(url)
                .success(function (data) {
                    $scope.totalBook = true;
                    $scope.Nextbtn=true;
                    $scope.Author=false;
                    $scope.Top=false;
                    $scope.hr=true;
                    $scope.disqus = true;
                    $scope.facebook=true;
                    $scope.total = data.Total;
                    $scope.books = data.Books;
                });
    
    };
  $scope.next = function () {
        $scope.pageNo++;
        var q = $scope.tag;
        var url = 'http://it-ebooks-api.info/v1/search/' + q + '/page/' + $scope.pageNo;
               $http.get(url)
                .success(function (data) {
                    $scope.books = data.Books;
            
                });
    };
     

    $scope.prev = function () {
        if ($scope.pageNo >= 2) {
            $scope.pageNo--;
        }
    var q = $scope.tag;
    var url = 'http://it-ebooks-api.info/v1/search/' + q + '/page/' + $scope.pageNo;

        $http.get(url)
                .success(function (data) {
                    $scope.books = data.Books;
                });
    };
}



//To hide next button and up button

//$( " .scrollup, .author" ).slideUp( 10 ).delay( 4000 ).slideDown( 600 );


//show data after finish the page loading // Wait for window load
$(window).load(function() {
		$('#loader').fadeOut(100);
        $('div').removeClass("contain");
		});
//click on search btn when document ready to show some book's by default 
$(document).ready(function(){
  $("#click").click();
});
// to set search input through enter button

$("#search").keypress(function(event){
		//Statement when "Enter" button is pressed
		if(event.which == 13){
				$("#click").click();
				//Prevent the action on the element
				event.preventDefault();
			}
		});
// searching state
$("#click").click(function() {
			var btn = $(this);
			btn.button('loading');
			setTimeout(function(){
				btn.button('reset');
			}, 3000);
		});
// to set scroll height and animation
$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$(".scrollup, .author").fadeIn();
			} else {
				$('.scrollup, .author').fadeOut();
			}
		});

// to set button to ref at  top
$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
            });
		
// For change the backgrund-color of disqus
   $('#disqus').css("backgroundColor","White");


//Bootstrap tooltip
$(function () { $("[data-toggle='tooltip']").tooltip(); });
        
