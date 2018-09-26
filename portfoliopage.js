$(document).ready(function(){

    $("body").css("display", "none");
    $("img").css("display", "none");
    $("div").css("display", "none");

    $("body").delay(500).fadeIn(2000);
    $("div").delay(500).fadeIn(2000);
    $("img").delay(500).fadeIn(2000);    

    $(function() {

        var width = 486;
        //var newWidth = width + 100;
        var animationSpeed = 1000;
        var pause = 3000;
        var currentSlide = 1;

        var sliderr = $('.slider');
        var slideContainerr = sliderr.find('.slides');
        var slidess = slideContainerr.find('.slide');

        var interval;
        var SkillOne = $('.SkillOne');
        var SkillTwo = $('.SkillTwo');

        function startSlider(){
            interval = setInterval(function() {
                slideContainerr.animate({'margin-left': '-='+ width }, animationSpeed, function() {
                    currentSlide++;
                    if (currentSlide === slidess.length - 1) {
                        currentSlide = 1;
                        slideContainerr.css('margin-left', 0);
                    }
                });
            }, pause);
        }

        function stopSlider() {
            clearInterval(interval);
        }
        sliderr.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    });

    $(".theImage").css({width : '486px',
                        height : '486px'});

    $("video").css({width : '486px',
                    height : '486px'});

    $("#s1").mouseenter(function(){
        $("#Des").html("42nd Street: Time Square, NYC. One of the pictures I took while testing my job's camera. A great example of 1-point perspective. Edited in photoshop to bring attention to the H&M store in Time Square using the most eye catching color, red.");
        $("#Designer").html('H&M');
    });
    $("#s1").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s2").mouseenter(function(){
        $("#Des").html('Needed a simple yet unique background for my website. Created in photoshop, one triangle at a time. Just wanted to create an image that would flow across the webpage without using something typical: circles, waves.');
        $("#Designer").html('Glass Break');
    });
    $("#s2").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s3").mouseenter(function(){
        $("#Des").html('Inspired by the spraypaint art, designed entirely out of photoshop. Mixes different sets of colors, highlight, and shades to distingish between the sky, planet, and the Roman skyline. Overall breath taking image that guides the imagination light years away.');
        $("#Designer").html('Skyline: Rome');
    });
    $("#s3").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s4").mouseenter(function(){
        $("#Des").html('Drawings come to life once in a blue moon. Drawn at a specific angle, using PrismaColor Pencils, on a flat (2-D) gray paper. At the right angle, the moon appears to be rising off the paper.');
        $("#Designer").html('Blue Moon');
    });
    $("#s4").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

     $("#s5").mouseenter(function(){
        $("#Des").html("Time Flies when you are growing up. When I was younger, the time between New Years and St. Patrick's Day seemed to be an enternity. Now, the months flies by faster and faster. Simple conceptual PrismaColor Pencil art.");
        $("#Designer").html('Time Flies');
    });
    $("#s5").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s6").mouseenter(function(){
        $("#Des").html('4th of July theme. Though red-white-blue are the American colors that the mainstream is familiar with; I want to give light to another American culture, the African American culture, by using the colors red-black-green. PrismaColored Pencils on black paper');
        $("#Designer").html('Lady Liberty Lips');
    });
    $("#s6").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s7").mouseenter(function(){
        $("#Des").html('Tribal art gives an instense vibe for the most part and deer are peaceful animals. This ink and paper artwork is an interesting combination of fierce and calming.');
        $("#Designer").html('Deer');
    });
    $("#s7").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s8").mouseenter(function(){
        $("#Des").html("My God Mother's father. Thousands of dots to replicate a portrait of a highly respected man. Sketched the face with a pencil and stippled face with pen. The shadows were created with a bunch of dots clumped together, and the highlights are the lack of dots.");
        $("#Designer").html('El Senor Ortiz');
    });
    $("#s8").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s9").mouseenter(function(){
        $("#Des").html("A simple beach, painted straight from imagination using Basic: Acrylic Paint. Inspired by a Dominican vibe. A sunset scene in black and white.");
        $("#Designer").html('Vacation');
    });
    $("#s9").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#s10").mouseenter(function(){
        $("#Des").html('A sample of Caligraphy. All or nothing with a latino twist. The message is expressed with pencil.');
        $("#Designer").html('All or Nada');
    });
    $("#s10").mouseleave(function(){
        $("#Des").html('Hover over the content to pause the slideshow and to show a description of the content');
        $("#Designer").html('Design Portfolio');
    });

    $("#b3").click(function(){
        $(".divSkills").slideUp(1000).delay(500);
        $(".SkillOne").css({"opacity" : "0"});
        $(".divSkills").slideDown(1000);
        $(".SkillTwo").css({"opacity" : "1"});
    });

});