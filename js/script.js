var slide = 0;
var animationfinished = true;
var interactable = false;

var perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;

// Percentage Increment Animation
var PercentageID = $("#percent"),
        start = 0,
        end = 100,
        duration = time;
        animateValue(PercentageID, start, end, duration);

function animateValue(id, start, end, duration) {

    var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);

    var timer = setInterval(function() {
        current += increment;
        $(obj).text(current + "%");
      //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.percentage').fadeOut(300);
  setTimeout(function(){
    $('#tutorial').css({ opacity: "1" });
    setTimeout(function(){
      $('#tutorial').css({ opacity: "0" });
      setTimeout(function(){$('#div1').css({ opacity: "1" });}, 1000);
      interactable = true;
    }, 2500);
  }, 750);
}, time);

$(document).keydown(function(e){

    //When right key is pressed:
    if(e.which == 39 && animationfinished == true && interactable == true){
      animationfinished = false;
      if(slide == 0){
        $("#div1, #Grids1").css({ left:'-50vw'});
        $("#div2, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true; }, 1000);
      } else if(slide == 1){
        $("#div2").css({ top:'150vh'});
        $("#div3").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true; }, 1000);
      } else if(slide == 2){
        $("#div2").css({ top:'50vh'});
        $("#div3").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 3){
        $("#div2, #Grids1").css({ left:'-50vw'});
        $("#div4, #Grids2").css({ left:'50vw'});
        setTimeout(function(){
          $("#citazione1").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
          setTimeout(function(){$("#autorecitazione1").css({ opacity: "1"});}, 700);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 4){
        $("#div4").css({ top:'-50vh'});
        $("#div5").css({ top:'50vh'});
        setTimeout(function(){
          $("#citazione1").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
          $("#autorecitazione1").css({ opacity: "0"});
          $("#citazione2").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
          setTimeout(function(){$("#autorecitazione2").css({ opacity: "1"});}, 700);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 5){
        $("#div5").css({ top:'-50vh'});
        $("#div6").css({ top:'50vh'});
        setTimeout(function(){
          $("#citazione2").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
          $("#autorecitazione2").css({ opacity: "0"});
          $("#citazione3").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
          setTimeout(function(){$("#autorecitazione3").css({ opacity: "1"});}, 700);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 6){
        $("#div6, #Grids1").css({ left:'-50vw'});
        $("#div7, #Grids2").css({ left:'50vw'});
        setTimeout(function(){
          $("#citazione3").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
          $("#autorecitazione3").css({ opacity: "0"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 7){
        $("#div7, #Grids1").css({ left:'-50vw'});
        $("#div8, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 8){
        $("#div8, #Grids1").css({ left:'-50vw'});
        $("#div9, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 9){
        $("#div9").css({ top:'150vh'});
        $("#div10").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 10){
        $("#div9").css({ top:'50vh'});
        $("#div10").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 11){
        $("#div9, #Grids1").css({ left:'-50vw'});
        $("#div11, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 12){
        $("#div11").css({ top:'150vh'});
        $("#div12").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 13){
        $("#div12").css({ top:'150vh'});
        $("#div13").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 14){
        $("#div11").css({ top:'50vh'});
        $("#div13").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 15){
        $("#div11, #Grids1").css({ left:'-50vw'});
        $("#div14, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      }
    }

    //When left key is pressed:
    if (e.which == 37 && animationfinished == true && interactable == true) {
       animationfinished = false;
       if(slide == 1){
         $("#div1, #Grids3").css({ left:'50vw'});
         $("#div2, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true; }, 1000);
       } else if(slide == 2){
         $("#div2").css({ top:'50vh'});
         $("#div3").css({ top:'-50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true; }, 1000);
       } else if(slide == 3){
         $("#div2").css({ top:'150vh'});
         $("#div3").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 4){
         $("#div2, #Grids3").css({ left:'50vw'});
         $("#div4, #Grids1").css({ left:'150vw'});
         setTimeout(function(){
           $("#citazione1").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
           $("#autorecitazione1").css({ opacity: "0"});
         }, 750);
         slide--;
         setTimeout(function(){animationfinished = true;}, 1000);
       } else if(slide == 5){
         $("#div4").css({ top:'50vh'});
         $("#div5").css({ top:'150vh'});
         setTimeout(function(){
           $("#citazione2").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
           $("#autorecitazione2").css({ opacity: "0"});
           $("#citazione1").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
           setTimeout(function(){$("#autorecitazione1").css({ opacity: "1"});}, 700);
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 6){
         $("#div5").css({ top:'50vh'});
         $("#div6").css({ top:'150vh'});
         setTimeout(function(){
           $("#citazione3").css({ opacity: "0", "line-height": "0.6", "margin-top": "-15vh"});
           $("#autorecitazione2").css({ opacity: "0"});
           $("#citazione2").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
           setTimeout(function(){$("#autorecitazione2").css({ opacity: "1"});}, 700);
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 7){
         $("#div6, #Grids3").css({ left:'50vw'});
         $("#div7, #Grids1").css({ left:'150vw'});
         setTimeout(function(){
           $("#citazione3").css({ opacity: "1", "line-height": "1.2", "margin-top": "-5vh"});
           setTimeout(function(){$("#autorecitazione3").css({ opacity: "1"});}, 700);
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 8){
         $("#div7, #Grids3").css({ left:'50vw'});
         $("#div8, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 9){
         $("#div8, #Grids3").css({ left:'50vw'});
         $("#div9, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 10){
         $("#div9").css({ top:'50vh'});
         $("#div10").css({ top:'-50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 11){
         $("#div9").css({ top:'150vh'});
         $("#div10").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 12){
         $("#div9, #Grids3").css({ left:'50vw'});
         $("#div11, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 13){
         $("#div11").css({ top:'50vh'});
         $("#div12").css({ top:'-50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 14){
         $("#div12").css({ top:'50vh'});
         $("#div13").css({ top:'-50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 15){
         $("#div11").css({ top:'150vh'});
         $("#div13").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 16){
         $("#div11, #Grids3").css({ left:'50vw'});
         $("#div14, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       }
    }

    //reset animationfinished if at beginning or end
    if(slide == 16 || slide == 0){
      animationfinished = true;
    }

    //reset Grids
    setTimeout(function(){
      $("#Grids1").css({ transition: "none", left:'50vw'});
      $("#Grids2").css({ transition: "none", left:'150vw'});
      $("#Grids3").css({ transition: "none", left:'-50vw'});
      setTimeout(function(){$("#Grids1, #Grids2, #Grids3").css({ transition: "1s"});}, 20);
    }, 1000);
});
