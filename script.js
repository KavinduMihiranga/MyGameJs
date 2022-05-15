$(document).ready(function () {
    let balloons = $(".balloon");

    let balloon1 = $("#balloon1");
    let balloon2 = $("#balloon2");
    let balloon3 = $("#balloon3");
    let balloon4 = $("#balloon4");
    let balloon5 = $("#balloon5");

    let balloon6 = $("#balloon6");
    let balloon7 = $("#balloon7");
    let balloon8 = $("#balloon8");
    let balloon9 = $("#balloon9");
    let balloon10 = $("#balloon10");
    let h1Score=$("#h1Score");

    let balloonArray = {
        balloon1,
        balloon2,
        balloon3,
        balloon4,
        balloon5,
        balloon6,
        balloon7,
        balloon8,
        balloon9,
        balloon10
    }
    $("#balloon6").hide();
    $("#balloon7").hide();
    $("#balloon8").hide();
    $("#balloon9").hide();
    $("#balloon10").hide();

    let gameDiv = $("#gameDiv");
    let btnStart = $("#startDiv");
    let scoreDiv = $("#scoreDiv");
    let lineDiv = $("#lineDiv");
    let score = 1;

    let gameOver = false;
    deleteBalloon();
    flowDownBalloon();
    restart();


    repeat();

    let balloonHeight = parseInt(gameDiv.height());
    let balloonWidth = parseInt(gameDiv.width());
    let lineHeight=parseInt(lineDiv.height());
    let lineWidth=parseInt(lineDiv.width());
    // let lineHeight = 90;
    let heightOfBalloon = parseInt(balloons.css("bottom","75vh"));


    function repeat() {
        let balloonCurrentPlace=parseInt(balloons.height());
        let lineCurrentPlace=parseInt(lineDiv.height());
        if (balloonCurrentPlace==lineCurrentPlace){
          // heightOfBalloon=balloonCurrentPlace;
      }
    }


    function restart() {
        // let balloonPlace=parseInt(balloons.height());

        // let linePlace=parseInt(lineDiv.height());
        // $("#topic").text(linePlace)
        let balloonTop=parseInt(balloons.height());
        // $("#h1Score").text(balloonTop);
        if (balloonTop!=333) {
            repeat();
        }else {
            gameDiv.text("Game Over");
            h1Score.css("color","red");

        }
    }


    function deleteBalloon() {
        $("#balloon1").click(function () {
            $(this).hide();
            scoreDiv = score;
            let speed = 250;
            $("#balloon10").show();
            $("#h1Score").text(score);
            score++;
            // $("#balloon10").style("top :75vh");
        });

        $("#balloon2").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon9").show();
            // $("#balloon9").style("bottom :75vh");
        });

        $("#balloon3").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            $("#balloon8").show();
            // $("#balloon8").style("bottom :75vh");
        });

        $("#balloon4").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon7").show();
            // $("#balloon7").style("bottom :75vh");
        });

        $("#balloon5").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon6").show();
            // $("#balloon6").style("bottom :75vh");
        });

        $("#balloon6").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon1").show();
            // $("#balloon1").style("bottom :75vh");
        });
        $("#balloon7").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon2").show();
            // $("#balloon2").style("bottom :75vh");
        });
        $("#balloon8").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon3").show();
            // $("#balloon3").style("bottom :75vh");
        });
        $("#balloon9").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon2").show();
            // $("#balloon2").style("bottom","85vh");
        });
        $("#balloon10").click(function () {
            $(this).hide();
            $("#h1Score").text(score);
            score++;
            scoreDiv = score;
            $("#balloon1").show();
            // $("#balloon1").style("bottom","75vh");
        });


    }

    function flowDownBalloon() {
        $("#startDiv").click(function () {
            let speed1 = 100;
            $("#balloon1").animate({bottom: "-0vh"}, speed1 * speed1, "linear");
            speed1++;
        })
        $("#startDiv").click(function () {
            let speed2 = 125;
            $("#balloon2").animate({bottom: "-0vh"}, speed2 * speed2, "linear");
            speed2++;
        })
        $("#startDiv").click(function () {
            let speed3 = 150;
            $("#balloon3").animate({bottom: "-0vh"}, speed3 * speed3, "linear");
            speed3++;
        })
        $("#startDiv").click(function () {
            let speed4 = 175;
            $("#balloon4").animate({bottom: "-0vh"}, speed4 * speed4, "linear");
            speed4++;
        })
        $("#startDiv").click(function () {
            let speed5 = 200;
            $("#balloon5").animate({bottom: "-0vh"}, speed5 * speed5, "linear");
            speed5++;
        })
        $("#startDiv").click(function () {
            let speed6 = 250;
            $("#balloon6").animate({bottom: "-0vh"}, speed6 * speed6, "linear");
            speed6++;
        })
        $("#startDiv").click(function () {
            let speed7 = 125;
            $("#balloon7").animate({bottom: "-0vh"}, speed7 * speed7, "linear");
            speed7++;
        })
        $("#startDiv").click(function () {
            let speed8 = 200;
            $("#balloon8").animate({bottom: "-0vh"}, speed8 * speed8, "linear");
            speed8++;
        })
        $("#startDiv").click(function () {
            let speed9 = 110;
            $("#balloon9").animate({bottom: "-0vh"}, speed9 * speed9, "linear");
            speed9++;
        })
        $("#startDiv").click(function () {
            let speed10 = 125;
            $("#balloon10").animate({bottom: "-0vh"}, speed10 * speed10, "linear");
            speed10++;
        })

        /*let i=1;
        while (i<0){
            balloonArray.balloon1.show();
            balloonArray.balloon2.show();
            balloonArray.balloon3.show();
            balloonArray.balloon4.show();
            balloonArray.balloon5.show();
            balloonArray.balloon6.show();
            balloonArray.balloon7.show();
            balloonArray.balloon8.show();
            balloonArray.balloon9.show();
            balloonArray.balloon10.show();

        }*/
    }


});

