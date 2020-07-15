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
        $("#div3").css({ top:'50vh', opacity: "1"});
        setTimeout(function(){
          $("#Edizione53").css({ display: 'none'});
          $(".Doppiapagina").css({ opacity:'1'});
          $(".Doppiapagina").css({ display:'block'});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true; }, 1000);
      } else if(slide == 2){
        $(".Vertical").css({ top:'0'});
        $(".Horizontal").css({ top:'100vh'});
        setTimeout(function(){
          $(".Horizontal").css({ display: 'none'});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true; }, 1000);
      } else if(slide == 3){
        $("#div2").css({ top:'50vh'});
        $("#div3").css({ top:'-50vh'});
        $("#div3").css({opacity: "0"});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 4){
        $(".prima").css({ left:'-95vw'});
        $(".seconda").css({ left:'5vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 5){
        $("#div2, #Grids1").css({ left:'-50vw'});
        $("#div4, #Grids2").css({ left:'50vw'});
        $(".parola1").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 6){
        $(".parola1").css({ opacity:'0.1'});
        $(".parola2").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 500);
      } else if(slide == 7){
        $(".parola2").css({ opacity:'0.1'});
        $(".parola3").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 500);
      } else if(slide == 8){
        $("#div4, #Grids1").css({ left:'-50vw'});
        $("#div7, #Grids2").css({ left:'50vw'});
        $(".parola3").css({ opacity:'0.3'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 9){
        $("#a4container, #a5container, #otherconversazionecontainer").css({ opacity:'1'});
        $("#bookpapercontainer").css({ left:'23.83vw', transform: "translate(0,-50%)"});

        slide++;
        setTimeout(function(){ animationfinished = true;}, 800);
      } else if(slide == 10){
        $("#a4container, #a5container, #otherconversazionecontainer").css({ opacity:'0'});
        setTimeout(function(){
          $("#bookpapercontainer").css({ left:'10vw', width: "8vw", height: "13vw"});
          $("#bookpaper").css({ height: "11.3vw"});
          $("#sizetext").css({ opacity: "0"});
          setTimeout(function(){
            $("#sizetext").css({ display: "none"});
            $(".chapterdiv, .chaptertext").css({ opacity: "1"});
          }, 750);
        }, 250);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 2000);
      } else if(slide == 11){
        $(".chapterdiv, .chaptertext").css({ opacity: "0"});
        $("#sizetext").css({ display: "block"});
        setTimeout(function(){
          $("#bookpapercontainer").css({ left:'30vw', width: "20vw", height: "30vw"});
          $("#bookpaper").css({ height: "28.2vw"});
          setTimeout(function(){
            $("#sizetext").css({ opacity: "1"});
            $("#sizetext").text('Gabbia 1: 119x193mm');
          }, 750);
        }, 500);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 2000);
      } else if(slide == 12){
        $("#bookpapercontainer").css({ left:'0'});
        $("#chapter3div").css({left:'60vw', width: "20vw", height: "30vw"});
        $("#chapter2div").css({left:'30vw', width: "20vw", height: "30vw"});
        $("#chapter4div").css({left:'100vw', width: "20vw", height: "30vw"});
        $("#chapter5div").css({left:'130vw', width: "20vw", height: "30vw"});
        $("#chapter6div").css({left:'160vw', width: "20vw", height: "30vw"});
        $(".chapter").css({height: "28.2vw"});
        $("#text2").text('Gabbia 2: 124x198mm');
        $("#text3").text('Gabbia 3: 129x203mm');
        $("#text4").text('Gabbia 4: 134x208mm');
        $("#text5").text('Gabbia 5: 139x213mm');
        $("#text6").text('Gabbia 1: 119x193mm');
        setTimeout(function(){
          $("#chapter2div, #text2, #chapter3div, #text3, #chapter4div, #text4, #chapter5div, #text5, #chapter6div, #text6").css({opacity: "1"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1500);
      } else if(slide == 13){
        $("#bookpapercontainer").css({ left:'-100vw'});
        $("#chapter2div").css({left:'-70vw'});
        $("#chapter3div").css({left:'-40vw'});
        $("#chapter4div").css({left:'0'});
        $("#chapter5div").css({left:'30vw'});
        $("#chapter6div").css({left:'60vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1500);
      } else if(slide == 14){
        $("#div7, #Grids1").css({ left:'-50vw'});
        $("#div9, #Grids2").css({ left:'50vw'});
        setTimeout(function(){$("#question").css({ opacity: "1"});},750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 15){
        $("#div9").css({ top:'150vh'});
        $("#div10").css({ top:'50vh'});
        setTimeout(function(){
          $("#question").css({ opacity:'0'});
          $(".papercaption, .Paper").css({ opacity:'1'});
          $(".Paper").css({ filter:'blur(0)'});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 16){
        $("#div9").css({ top:'50vh'});
        $("#div10").css({ top:'-50vh'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 17){
        $("#Takeo .papercaption, #Reflex .papercaption, #Takeo, #Reflex").css({opacity:'0'});
        setTimeout(function(){
          $("#Mohawk").css({ left: "12.5vw", width: "55vw", top: "0", height: "50vh"});
          $("#Takeo, #Reflex").css({transition: "0s", left: "112.5vw", top: "0", width: "55vw", height: "60vh", opacity: "1"});
          setTimeout(function(){
            $("#Takeo, #Reflex").css({transition: "1s"});
          }, 100);
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 18){
        $("#Takeo .papercaption").css({ opacity:'1'});
        $("#Mohawk").css({ left: "-85vw"});
        $("#Takeo").css({ left: "15vw"});
        setTimeout(function(){
          $("#Mohawk").css({ opacity: "0", transition: "0"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 19){
        $("#Reflex .papercaption").css({ opacity:'1'});
        $("#Takeo").css({ left: "-85vw"});
        $("#Reflex").css({ left: "15vw"});
        setTimeout(function(){
          $("#Takeo").css({ opacity: "0", transition: "0"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 20){
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
      } else if(slide == 21){
        $("#div8").css({ top:'-50vh'});
        $("#div12").css({ top:'50vh'});
        $("#pgimg4, #pgimg5, #pgimg6").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      }  else if(slide == 22){
        $("#pgimg1").css({ left:'0'});
        $(".gabbia").css({ opacity:'0'});
        setTimeout(function(){
          $("#pgimg2, #pgimg3, #pgimg11").css({ "opacity":'1'});
        }, 1000);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 23){
        $("#div12").css({ left:'-50vw'});
        $("#div13").css({ left:'50vw'});
        $("#Book").css({display:"none"});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 24){
        $("#div14").css({ left:'50vw'});
        $("#div13").css({ left:'-50vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 25){
        $("#div15").css({ top:'50vh'});
        $("#div14").css({ top:'150vh'});
        setTimeout(function(){
          $("#Book").css({display:"block"});
          $(".Copertina").css({display:"none"});
        }, 750);
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 26){
        $(".primaLibro").css({ left:'-60vw'});
        $(".secondaLibro").css({ left:'40vw'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 27){
        $("#div15").css({ top:'-50vh'});
        $("#div14").css({ top:'50vh'});
        $("#VerticalVideo").css({ opacity:'1'});
        slide++;
        setTimeout(function(){ animationfinished = true;}, 1000);
      } else if(slide == 28){
        $("#VerticalVideo").css({ left:'40vw'});
        $("#Book").css({ left:'-50vw'});
        $("#Video").currentTime = 0;
        document.getElementById('Video').play();
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
         setTimeout(function(){ animationfinished = true; }, 500);
       } else if(slide == 2){
         if($(".Horizontal").css('top') == '100vh'){
           $(".Horizontal").css({ display: 'none'});
         }
         $(".Doppiapagina").css({ display:'none'});
         setTimeout(function(){
           $("#div2").css({ top:'50vh'});
           $("#div3").css({ top:'-50vh', opacity: "0"});
           $("#Edizione53").css({ display: 'block'});
           $(".Vertical").css({ top:'-100vh'});
           $(".Horizontal").css({ top:'0'});
         }, 100);
         slide--;
         setTimeout(function(){ animationfinished = true; }, 500);
       } else if(slide == 3){
         $(".Horizontal").css({ display: 'block'});
         setTimeout(function(){
           $(".Vertical").css({ top:'-100vh'});
           $(".Horizontal").css({ top:'0'});
         }, 100);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 4){
         $("#div2").css({ top:'150vh'});
         $("#div3").css({ top:'50vh', opacity: "1"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 5){
         $(".prima").css({ left:'5vw'});
         $(".seconda").css({ left:'105vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 6){
         $("#div2, #Grids3").css({ left:'50vw'});
         $("#div4, #Grids1").css({ left:'150vw'});
         $(".parola1").css({ opacity:'0'});
         slide--;
         setTimeout(function(){animationfinished = true;}, 500);
       } else if(slide == 7){
         $(".parola1").css({ opacity:'1'});
         $(".parola2").css({ opacity:'0'});
         slide--;
         setTimeout(function(){animationfinished = true;}, 500);
       } else if(slide == 8){
         $(".parola2").css({ opacity:'1'});
         $(".parola3").css({ opacity:'0'});
         slide--;
         setTimeout(function(){animationfinished = true;}, 500);
       } else if(slide == 9){
         $(".parola3").css({ opacity:'1'});
         $("#div4, #Grids3").css({ left:'50vw'});
         $("#div7, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 10){
         $("#a4container, #a5container, #otherconversazionecontainer").css({ opacity:'0'});
         $("#bookpapercontainer").css({ left:'40vw', transform: "translate(-50%,-50%)"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 11){
         $("#sizetext").css({ display: "block"});
         $(".chapterdiv, .chaptertext, #chapter4div, #chapter5div").css({ opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'23.83vw', width: "17vw", height: "26vw"});
           $("#bookpaper").css({ height: "24vw"});
           $("#sizetext").css({ opacity: "1"});
           setTimeout(function(){
             $("#a4container, #a5container, #otherconversazionecontainer").css({ opacity:'1'});
           }, 750);
         }, 500);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1000);
       } else if(slide == 12){
         $("#sizetext").css({ opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'10vw', width: "8vw", height: "13vw"});
           $("#bookpaper").css({ height: "11.3vw"});
           $("#sizetext").css({ display: "none"});
           $("#sizetext").text('17x24cm');
           setTimeout(function(){
             $(".chapterdiv, .chaptertext").css({ opacity: "1"});
           }, 750);
         }, 500);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 1250);
       } else if(slide == 13){
         $(".chapterdiv, .chaptertext").css({opacity: "0"});
         setTimeout(function(){
           $("#bookpapercontainer").css({ left:'30vw'});
           $("#chapter2div").css({left:'20vw', width: "8vw", height: "13vw"});
           $("#chapter3div").css({left:'30vw', width: "8vw", height: "13vw"});
           $("#chapter4div").css({left:'40vw', width: "8vw", height: "13vw"});
           $("#chapter5div").css({left:'50vw', width: "8vw", height: "13vw"});
           $("#chapter6div").css({left:'60vw', width: "8vw", height: "13vw"});
           $(".chapter").css({height: "11.3vw"});
           $("#text2").text('2');
           $("#text3").text('3');
           $("#text4").text('4');
           $("#text5").text('5');
           $("#text6").text('Epilogo');
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 750);
       } else if(slide == 14){
         $("#bookpapercontainer").css({ left:'0'});
         $("#chapter2div").css({left:'30vw'});
         $("#chapter3div").css({left:'60vw'});
         $("#chapter4div").css({left:'100vw'});
         $("#chapter5div").css({left:'130vw'});
         $("#chapter6div").css({left:'160vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 750);
       } else if(slide == 15){
         $("#div7, #Grids3").css({ left:'50vw'});
         $("#div9, #Grids1").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 16){
         $("#div9").css({ top:'50vh'});
         $("#div10").css({ top:'-50vh'});
         $("#question").css({ opacity:'1'});
         $(".Paper").css({ opacity:'0.5', filter:'blur(10px)'});
         $(".papercaption").css({ opacity:'0'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 17){
         $("#div9").css({ top:'150vh'});
         $("#div10").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 18){
         $("#Mohawk").css({ left: "0", width: "20vw", height: "30vh", top: "25vh"});
         $("#Takeo").css({ left: "30vw", width: "20vw", height: "30vh", top: "25vh"});
         $("#Reflex").css({ left: "60vw", width: "20vw", height: "30vh", top: "25vh"});
         $("#Takeo, #Reflex").css({ transition: "0s", opacity:'0'});
         setTimeout(function(){
           $(".papercaption").css({ opacity:'1'});
           $("#Takeo, #Reflex").css({ transition: "1s", opacity:'1'});
         }, 750);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 750);
       } else if(slide == 19){
         $("#Mohawk .papercaption, #Mohawk").css({ transition: "1", opacity: "1"});
         $("#Takeo .papercaption").css({ opacity:'0'});
         $("#Mohawk").css({ left: "12.5vw"});
         $("#Takeo").css({ left: "112.5vw"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 20){
         $("#Takeo .papercaption, #Takeo").css({ transition: "1", opacity: "1"});
         $("#Reflex .papercaption").css({ opacity:'0'});
         $("#Takeo").css({ left: "12.5vw"});
         $("#Reflex").css({ left: "112.5vw"});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 21){
         $("#Takeo, #Reflex, #Mohawk").css({ transition: "0s", opacity: "0", width: "50vw", height: "60vh"});
         $("#Mohawk").css({ left: "-87.5vw"});
         $("#Takeo").css({ left: "-87.5vw"});
         $("#Reflex").css({ left: "12.5vw", opacity: "1"});
         setTimeout(function(){
           $("#Takeo, #Reflex, #Mohawk").css({ transition: "1s"});
           $("#div9").css({ top:'50vh'});
           $("#div8").css({ top:'-50vh'});
         }, 100);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 22){
         $("#div12").css({ top:'150vh'});
         $("#div8").css({ top:'50vh'});
         $("#pgimg4, #pgimg5, #pgimg6").css({ opacity:'0'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 23){
         $("#pgimg2, #pgimg3, #pgimg11").css({ "opacity":'0'});
         setTimeout(function(){
           $("#gabbia").css({ opacity:'1'});
           $("#pgimg1").css({ left:'30vw'});
         }, 1000);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 24){
         $("#div12").css({ left:'50vw'});
         $("#div13").css({ left:'150vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 25){
         $("#div14").css({ left:'150vw'});
         $("#div13").css({ left:'50vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       }  else if(slide == 26){
         $("#Book").css({ display:'none'});
         setTimeout(function(){
           $("#div14").css({ top:'50vh'});
           $("#div15").css({ top:'-50vh'});
           $(".Copertina").css({display:"block"});
         }, 100);
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 27){
         $(".primaLibro").css({ left:'40vw'});
         $(".secondaLibro").css({ left:'140vw'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 28){
         $("#div14").css({ top:'150vh'});
         $("#div15").css({ top:'50vh'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       } else if(slide == 29){
         $("#VerticalVideo").css({ left:'140vw'});
         $("#Book").css({ left:'50%'});
         slide--;
         setTimeout(function(){ animationfinished = true;}, 500);
       }
    }

    //reset animationfinished if at beginning or end
    if(slide == 29 || slide == 0){
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
