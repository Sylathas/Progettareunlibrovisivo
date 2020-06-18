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
window.onload = function(){
  $('.percentage').fadeOut(300);
  setTimeout(function(){
    $('#tutorial').css({ opacity: "1" });
    setTimeout(function(){
      $('#tutorial').css({ opacity: "0" });
      setTimeout(function(){$('#div1').css({ opacity: "1" });}, 1000);
      setTimeout(function(){ interactable = true; }, 1500);
    }, 2500);
  }, 750);
}

$("#arrow").hover(
  function(){
    $("#navigate").text("Usa le frecce sulla tastiera per navigare.");
  }, function(){
    $("#navigate").text("");
  }
);

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
        setTimeout(function(){
          $("#Edizione53").css({ left:'0', transform:"translate(0,0)"});
          $(".Doppiapagina").css({ opacity:'1'});
        }, 750);
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
        $("#a4container, #a5container").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 800);
      } else if(slide == 8){
        $("#a4container, #a5container").css({ opacity:'0'});
        setTimeout(function(){
          $("#bookpapercontainer").css({ left:'10vw', width: "8vw", height: "13vw", transform: "translate(0,-50%)"});
          $("#bookpaper").css({ height: "11.3vw"});
          $("#sizetext").css({ opacity: "0"});
          setTimeout(function(){
            $("#sizetext").css({ display: "none"});
            $(".chapterdiv, .chaptertext, #chapter4div, #chapter5div").css({ opacity: "1"});
          }, 1000);
        }, 250);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 2000);
      } else if(slide == 9){
        $(".chapterdiv, .chaptertext, #chapter4div, #chapter5div").css({ opacity: "0"});
        $("#sizetext").css({ display: "block"});
        setTimeout(function(){
          $("#bookpapercontainer").css({ left:'30vw', width: "20vw", height: "30vw"});
          $("#bookpaper").css({ height: "28.2vw"});
          setTimeout(function(){
            $("#sizetext, #griglia1").css({ opacity: "1"});
            $("#sizetext").text('Griglia 1: 119x193mm');
          }, 1000);
        }, 1000);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 2000);
      } else if(slide == 10){
        $("#bookpapercontainer").css({ left:'10vw'});
        $("#chapter5div").css({left:'50vw', width: "20vw", height: "30vw"});
        $("#page5").css({height: "28.2vw"});
        $("#text5").text('Griglia 5: 139x213mm');
        setTimeout(function(){
          $("#chapter5div, #text5, #griglia5").css({opacity: "1"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1500);
      } else if(slide == 11){
        $("#bookpapercontainer").css({ left:'0'});
        $("#chapter5div").css({left:'60vw'});
        $("#chapter4div").css({left:'30vw', width: "20vw", height: "30vw"});
        $("#page4").css({height: "28.2vw"});
        $("#text4").text('Griglia 4: 134x208mm');
        setTimeout(function(){
          $("#chapter4div, #text4, #griglia4").css({opacity: "1"});
          $("#grigliaimmagine1, #grigliaimmagine4, #grigliaimmagine5").css({opacity: "1"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1500);
      } else if(slide == 12){
        $("#div7, #Grids1").css({ left:'-50vw'});
        $("#div9, #Grids2").css({ left:'50vw'});
        setTimeout(function(){$("#question").css({ opacity: "1"});},750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 13){
        $("#div9").css({ top:'150vh'});
        $("#div10").css({ top:'50vh'});
        setTimeout(function(){
          $("#question").css({ opacity:'0'});
          $(".papercaption, .Paper").css({ opacity:'1'});
          $(".Paper").css({ filter:'blur(0)'});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 14){
        $("#div9").css({ top:'50vh'});
        $("#div10").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 15){
        $("#Takeo .papercaption, #Reflex .papercaption, #Takeo, #Reflex").css({opacity:'0'});
        setTimeout(function(){
          $("#Mohawk").css({ left: "20vw", width: "40vw", height: "70vh"});
          $("#Takeo, #Reflex").css({transition: "0s", left: "120vw", width: "40vw", height: "70vh", opacity: "1"});
          setTimeout(function(){
            $("#Takeo, #Reflex").css({transition: "1s"});
          }, 100);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 16){
        $("#Takeo .papercaption").css({ opacity:'1'});
        $("#Mohawk").css({ left: "-80vw"});
        $("#Takeo").css({ left: "20vw"});
        setTimeout(function(){
          $("#Mohawk").css({ opacity: "0", transition: "0"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 17){
        $("#Reflex .papercaption").css({ opacity:'1'});
        $("#Takeo").css({ left: "-80vw"});
        $("#Reflex").css({ left: "20vw"});
        setTimeout(function(){
          $("#Takeo").css({ opacity: "0", transition: "0"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 18){
        $("#div9").css({ top:'150vh'});
        $("#div8").css({ top:'50vh'});
        setTimeout(function(){
          $("#Takeo, #Reflex, #Mohawk").css({ transition: "0", opacity: "1", width: "20vw", height: "30vh"});
          $("#Mohawk").css({ left: "0"});
          $("#Takeo").css({ left: "30vw"});
          $("#Reflex").css({ left: "60vw"});
          setTimeout(function(){
            $("#Takeo, #Reflex, #Mohawk").css({ transition: "1"});
          }, 200);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 19){
        $("#div8").css({ top:'-50vh'});
        $("#div9").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 20){
        $("#div9, #Grids1").css({ left:'-50vw'});
        $("#div11, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 21){
        $("#div11").css({ top:'150vh'});
        $("#div12").css({ top:'50vh'});
        $("#pgimg4, #pgimg5, #pgimg6").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 22){
        $("#pgimg1").css({ left:'0'});
        setTimeout(function(){
          $("#pgimg2, #pgimg3, #pgimg11").css({ "opacity":'1'});
        }, 1000);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 23){
        $("#div12").css({ top:'150vh'});
        $("#div13").css({ top:'50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 24){
        $("#div11").css({ top:'50vh'});
        $("#div13").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 25){
        $("#div11, #Grids1").css({ left:'-50vw'});
        $("#div14, #Grids2").css({ left:'50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 26){
        $("#div15").css({ top:'50vh'});
        $("#div14").css({ top:'150vh'});
        setTimeout(function(){$("#Book").css({opacity:"0"})}, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 27){
        $("#div15").css({ top:'-50vh'});
        $("#div14").css({ top:'50vh'});
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
           $("#autorecitazione3").css({ opacity: "0"});
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
         $("#a4container, #a5container").css({ opacity:'0'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 9){
         $("#sizetext").css({ display: "block"});
         $(".chapterdiv, .chaptertext, #chapter4div, #chapter5div").css({ opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'40vw', width: "17vw", height: "26vw", transform: "translate(-50%,-50%)"});
           $("#bookpaper").css({ height: "24vw"});
           $("#sizetext").css({ opacity: "1"});
           setTimeout(function(){
             $("#a4container, #a5container").css({ opacity:'1'});
           }, 1000);
         }, 500);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 2000);
       } else if(slide == 10){
         $("#sizetext, #griglia1").css({ opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'10vw', width: "8vw", height: "13vw"});
           $("#bookpaper").css({ height: "11.3vw"});
           $("#sizetext").css({ display: "none"});
           $("#sizetext").text('Il mio libro: 17x24cm');
           setTimeout(function(){
             $(".chapterdiv, .chaptertext, #chapter4div, #chapter5div").css({ opacity: "1"});
           }, 1000);
         }, 500);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 2500);
       } else if(slide == 11){
         $("#chapter5div, #text5, #griglia5").css({opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'30vw'});
           $("#chapter5div").css({width: "8vw", height: "13vw"});
           $("#page5").css({height: "11.3vw"});
           $("#text5").text('5');
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1500);
       } else if(slide == 12){
         $("#chapter4div, #text4, #griglia4").css({opacity: "0"});
         $("#grigliaimmagine1, #grigliaimmagine4, #grigliaimmagine5").css({opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'10vw'});
           $("#chapter5div").css({left:'50vw'});
           $("#chapter4div").css({left:'40vw', width: "8vw", height: "13vw"});
           $("#page4").css({height: "11.3vw"});
           $("#text4").text('4');
         }, 1000);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1500);
       } else if(slide == 13){
         $("#div7, #Grids3").css({ left:'50vw'});
         $("#div9, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 14){
         $("#div9").css({ top:'50vh'});
         $("#div10").css({ top:'-50vh'});
         $("#question").css({ opacity:'1'});
         $(".Paper").css({ opacity:'0.5', filter:'blur(10px)'});
         $(".papercaption").css({ opacity:'0'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 15){
         $("#div9").css({ top:'150vh'});
         $("#div10").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 16){
         $("#Mohawk").css({ left: "0", width: "20vw", height: "30vh"});
         $("#Takeo").css({ left: "30vw", width: "20vw", height: "30vh"});
         $("#Reflex").css({ left: "60vw", width: "20vw", height: "30vh"});
         $("#Takeo, #Reflex").css({ transition: "0s", opacity:'0'});
         setTimeout(function(){
           $(".papercaption").css({ opacity:'1'});
           $("#Takeo, #Reflex").css({ transition: "1s", opacity:'1'});
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1500);
       } else if(slide == 17){
         $("#Mohawk .papercaption, #Mohawk").css({ transition: "1", opacity: "1"});
         $("#Takeo .papercaption").css({ opacity:'0'});
         $("#Mohawk").css({ left: "20vw"});
         $("#Takeo").css({ left: "120vw"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 18){
         $("#Takeo .papercaption, #Takeo").css({ transition: "1", opacity: "1"});
         $("#Reflex .papercaption").css({ opacity:'0'});
         $("#Takeo").css({ left: "20vw"});
         $("#Reflex").css({ left: "120vw"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 19){
         $("#Takeo, #Reflex, #Mohawk").css({ transition: "0s", opacity: "0", width: "40vw", height: "70vh"});
         $("#Mohawk").css({ left: "-80vw"});
         $("#Takeo").css({ left: "-80vw"});
         $("#Reflex").css({ left: "20vw", opacity: "1"});
         setTimeout(function(){
           $("#Takeo, #Reflex, #Mohawk").css({ transition: "1s"});
           $("#div9").css({ top:'50vh'});
           $("#div8").css({ top:'-50vh'});
         }, 100);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 20){
         $("#div9").css({ top:'150vh'});
         $("#div8").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 21){
         $("#div9, #Grids3").css({ left:'50vw'});
         $("#div11, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 22){
         $("#div11").css({ top:'50vh'});
         $("#div12").css({ top:'-50vh'});
         $("#pgimg4, #pgimg5, #pgimg6").css({ opacity:'0'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 23){
         $("#pgimg2, #pgimg3, #pgimg11").css({ "opacity":'0'});
         setTimeout(function(){
           $("#pgimg1").css({ left:'30vw'});
         }, 1000);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 24){
         $("#div12").css({ top:'50vh'});
         $("#div13").css({ top:'-50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 25){
         $("#div11").css({ top:'150vh'});
         $("#div13").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 26){
         $("#div11, #Grids3").css({ left:'50vw'});
         $("#div14, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 27){
         $("#div14").css({ top:'50vh'});
         $("#div15").css({ top:'-50vh'});
         setTimeout(function(){$("#Book").css({opacity:"1"})}, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 28){
         $("#div14").css({ top:'150vh'});
         $("#div15").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       }
    }

    //reset animationfinished if at beginning or end
    if(slide == 28 || slide == 0){
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
