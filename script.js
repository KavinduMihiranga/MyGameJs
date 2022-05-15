$(document).ready(function () {
    let balloons=$(".balloon");
    let balloon1 = $("#balloon1");
    let balloon2 = $("#balloon2");
    let balloon3 = $("#balloon3");
    let balloon4 = $("#balloon4");
    let balloon5 = $("#balloon5");
    let gameDiv = $("#gameDiv");
    let btnStart= $("#startDiv");
    let scoreDiv=$("#scoreDiv");
    let lineDiv=$("#lineDiv");

    let score=0;
    
    let containerWidth = parseInt(gameDiv.width());
    let containerHeight = parseInt(gameDiv.height());
   

    deleteBalloon();
    flowDownBalloon();
    restart();

    function restart() {
        if (gameDiv==lineDiv){
            gameDiv.text("Game Over");
        }
    }

    function deleteBalloon() {
        $("#balloon1").click( function () {
            $(this).hide();
            score++;
            scoreDiv=score;
        });

        $("#balloon2").click( function () {
            $(this).hide();
            score++;
            scoreDiv=score;
        });

        $("#balloon3").click( function () {
            $(this).hide();
            scoreDiv=0;
            scoreDiv.text(parseInt(scoreDiv.text)+1);
        });

        $("#balloon4").click( function () {
            $(this).hide();
            score++;
            scoreDiv=score;
        });

        $("#balloon4").click( function () {
            $(this).hide();
            score++;
            scoreDiv=score;
        });

        $("#balloon5").click( function () {
            $(this).hide();
            score++;
            scoreDiv=score;
        });

    }

    function flowDownBalloon() {
       $("#startDiv").click(function () {
           let speed1=100;
            $("#balloon1").animate({bottom:"-0vh"},speed1 *speed1,"linear");
            speed1++;
            
       })
        $("#startDiv").click(function () {
            let speed2=125;
            $("#balloon2").animate({bottom:"-0vh"},speed2*speed2,"linear");
            speed2++;
       })
        $("#startDiv").click(function () {
            let speed3=150;
            $("#balloon3").animate({bottom:"-0vh"},speed3*speed3,"linear");
            speed3++;
       })
        $("#startDiv").click(function () {
            let speed4=175;
            $("#balloon4").animate({bottom:"-0vh"},speed4*speed4,"linear");
            speed4++;
       })
        $("#startDiv").click(function () {
            let speed5=200;
            $("#balloon5").animate({bottom:"-0vh"},speed5*speed5,"linear");
            speed5++;
       })
    }
});

