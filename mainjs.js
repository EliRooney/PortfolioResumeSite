
$(document).ready(function(){

	$("body").css("display", "none");
    $("img").css("display", "none");
    $("div").css("display", "none");

    $("body").delay(500).fadeIn(2000);
    $("div").delay(500).fadeIn(2000);
    $("img").delay(500).fadeIn(2000);
	
    $("#b1").click(function(){
    	event.preventDefault();
        $("#p1").slideUp(1000);
        $(".imageOne").slideUp(1000);
        $(".divOne").slideUp(1000);
        $(".container").delay(500).fadeToggle(1000);
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
        $("img").fadeOut(1000, redirectPage);
    });

     $("#b2").click(function(){
     	event.preventDefault();
        $("#p2").slideUp(1000);
        $(".imageTwo").slideUp(1000);
        $(".divTwo").slideUp(1000);
        $(".container").delay(500).fadeToggle(1000);
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
        $("img").fadeOut(1000, redirectPage);
    
     $("#resume").click(function(){
     	event.preventDefault();
        $("#p1").slideUp(1000);
        $(".imageTwo").slideUp(1000);
        $(".divTwo").slideUp(1000);
        $(".container").delay(500).fadeToggle(1000);
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
        $("img").fadeOut(1000, redirectPage);
    });



     function redirectPage() {
            window.location = linkLocation;
        };

     $("#phone").mouseover(function(){
   		$(".contactMe").html('(718) 909-3871')
       					.css({
        						'padding-right': '41vw'
        					});
    });

     $("#email").mouseover(function(){
        $(".contactMe").html('mrexr2014@gmail.com')
        				.css({
        						'padding-right': '37vw'
        					});
    });

     $("#linkedin").mouseover(function(){
        $(".contactMe").html('Click for Profile')
        				.css({
        						'padding-right': '41vw'
        					});
    });

     $(".randomCode").css({width : '550px'});

     $(".MSU").css({width : '384px',
     				height : '216px',
 					'padding-right' : '2px',
 					'padding-left' : '2px'
 					});

     $(".imageResume").css({width : '956.25px',
     						height : '1237.5px',
 					});

    });
 });
