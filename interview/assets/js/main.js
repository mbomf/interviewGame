// // });
$(document).ready(function () {
    var currentEvents = [{
        question: "President Trump unleashed an offensive on Jan. 7 to persuade Americans that a “humanitarian and security crisis” must be addressed before a government shutdown can end, announcing a prime-time address for Jan. 8",
        choices: ["in American schools", "in hurricane-ravaged states", "in Yemen", "on the southern border"],
        validAnswer: 3
    }, {
        question: "It’s official: Amazon said on Nov. 13 that it would open new offices in _________?",
        choices: ["Colorado and Illinois", "Georgia and Texas", "Washington and Atlanta", "New York and Virginia"],
        validAnswer: 3

    }, {
        question: "China reached a milestone in space exploration on Jan. 3, landing a vehicle on  for the first time in history, the country’s space agency announced",
        choices: ["the far side of the moon", "a dwarf planet", "Mercury", "a comet"],
        validAnswer: 0

    }, {
        question: "On Oct. 17, Canada became the first major world economy to , beginning a national experiment that will alter the country’s social, cultural and economic fabric, and present the nation with its biggest public policy challenge in decades",
        choices: ["abolish the death penalty", "ban all social media websites", "decriminalize prostitution", "legalize recreational marijuana"],
        validAnswer: 3

    }, {
        question: "The  protests in France began in response to rising gas taxes and has been building in intensity over the past three weeks, peaking with a day of violence in Paris on Dec. 1. The unrest presented an extraordinary venting of rage and resentment by ordinary working people, aimed at the mounting inequalities that have eroded their lives",
        choices: ["“Black Pants”", "“Green Jackets”", "“Purple Hats”", "“Yellow Vests”"],
        validAnswer: 3

    }, {
        question: "On May 18, 1980, this mountain in the Pacific northwest erupted after being dormant for 123 years. Which mountain is it?",
        choices: ["Hawaii", "Mount St. Helens", "Philippines", "Bimini"],
        validAnswer: 1

    }, {
        question: "Using big plays, capitalizing on Alabama turnovers and riding the poise of freshman quarterback Trevor Lawrence,  beat Alabama, 44-16, in the College Football Playoff championship game at Levi’s Stadium",
        choices: ["Clemson", "Michigan", "Notre Dame", "Oklahoma"],
        validAnswer: 0

    }, {
        question: "Largest War currently going on in the World?",
        choices: ["Syrian War", "Democratic Republic of Congo", "War in Afghanistan", "Yemen"],
        validAnswer: 2

    }, {
        question: "In the wake of a 7.5-magnitude earthquake and a 20-foot tsunami on Sept. 28 that killed at least 1,234 people, the eastern city of Palu was still reeling",
        choices: ["Australian", "British", "Indonesian", "Japanese"],
        validAnswer: 2

    }, {
        question: "Facebook, already facing scrutiny over how it handles the private information of its users, said on Sept. 28 that an attack on its computer network had exposed the personal information of nearly  users.",
        choices: ["500,000", "50 million", "90 million", "1 billion"],
        validAnswer: 1

    }, {
        question: "On Oct. 28, Brazil became the latest country to drift toward , electing a strident populist as president in the nation’s most radical political change since democracy was restored more than 30 years ago",
        choices: ["anarchy", "communism", "the far left", "the far right"],
        validAnswer: 3

    }, {
        question: "A federal trial that began on Oct. 15 accusing Harvard of is providing a rare glimpse into the secretive selection process at one of the country’s most elite universities for _______ .",
        choices: ["discriminating against white male applicants", "stacking the deck against Asian-American applicants", "offering special consideration for the offspring of big donors", "giving rural students a leg up over urban students"],
        validAnswer: 1

    }, {
        question: "Elon Musk, Tesla’s chief executive, reached a deal with the Securities and Exchange Commission on Sept. 29 to resolve  charges. The settlement will force Mr. Musk to step aside as chairman for three years and pay a $20 million fine",
        choices: ["bribery", "drug possession", "securities fraud", "sexual harassment"],
        validAnswer: 2

    }, {
        question: "Hurricane _________, a Category 4 storm, unleashed powerful winds and rains across six states, killing at least 19 people, causing flash flooding and leaving at least one million without power",
        choices: ["Ernesto", "Florence", "Michael", "Nadine"],
        validAnswer: 2

    }, {
        question: "The Disney/Marvel film  continued to vaporize its competition in its second week, becoming the fastest film ever to cross the $1 billion mark globally",
        choices: ["“Avengers: Infinity War”", "“Deadpool 2”", "“Ready Player One”", "“Mary Poppins Returns”"],
        validAnswer: 0

    }, {
        question: "The number of people getting  has more than tripled in the United States in recent years, federal health officials reported on May 1",
        choices: ["diseases transmitted by mosquito, tick and flea bites", "foodborne illnesses", "lung cancer", "sexually transmitted diseases"],
        validAnswer: 0

    }, {
        question: "President Trump has long sold himself as a self-made billionaire, but a Times investigation found that he received at least $413 million in today’s dollars from his father’s real estate empire, much of it through  in the 1990s",
        choices: ["a trust fund", "embezzlement", "his wages as an employee", "tax dodges"],
        validAnswer: 3

    }, {
        question: "A thousand-year-old English castle echoed with the exhortations of an African-American bishop and a gospel choir on May 19, as , nudging the British royal family into a new era",
        choices: ["King Charles I wed Henrietta Maria", "Prince Albert Edward wed Princess Alexandra of Denmark", "Prince Edward wed Wallis Simpson", "Prince Harry wed Meghan Markle"],
        validAnswer: 3

    }
    ];
    console.log(currentEvents);
    // var userChoices = [];

    var currentquestion = 0;
    var correctAnswers = 0;


        function timer() {
            var sec = 25;
            var timer = setInterval(function () {
                $('#timer').text(sec--);
                if (sec == -1) {
                    alert('You have to answer faster! Check the Timer!');
                    clearInterval(timer);
                    console.log('You have to answer faster! Check the Timer!');
                }
            }, 1000);
        }

        
    var userChoices = [];
    var correctAnswersArr = [];

    function setupOptions() {
        $('#question').html(parseInt(currentquestion) + 1 + ". " + currentEvents[currentquestion].question);
        var options = currentEvents[currentquestion].choices;
        var formHtml = '';
        for (var i = 0; i < options.length; i++) {
            formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label class="form-check-label" for="exampleRadios1"' + i + '">' +
                currentEvents[currentquestion].choices[i] + '</label></div><br/>';
        }
        $('#form').html(formHtml);
        $("#option").prop('checked', true);
        console.log(currentEvents[currentquestion].validAnswer);
    }


    // function timer(){
    //     var sec = 25;
    //     var timer = window.setInterval(function() {
    //         sec--;
    //         $(".timer").text('00:' + sec);
    //         if (sec == 0) {
    //             $(".timer").text('');
    //             clearInterval(timer); 
    //         }
    //     }, 1000);    
    // }

    $("#startIMG").fadeIn();
    $(".jumbotron").hide();
    $("#results").hide();
    $("#resultsDisp").hide();
    $("#resultsgif").hide();

    $("#QuestionsAnswered").hide();


    $('#startGame').click(function () {
        $(".jumbotron").fadeIn();
        $(this).hide();
        $("#startIMG").hide();
        $("#QuestionsAnswered").fadeIn();
        timer();
    });

    setupOptions();
   
    $(function () {
        $("#progressbar").progressbar({
            max: currentEvents.length - 1,
            value: 0
        });
    });

    $("#next").click(function () {
        currentquestion++;
        //having trouble stopping the timer interval it would not stop per question and so I could not reset the timer. 
        //clearInterval(timer);
        $("#QuestionsAnswered").html("Questions Answered:  " + currentquestion + " / 18");
        $(function () {
            $("#progressbar").progressbar({
                value: currentquestion
            });
        });
        var userChoice = $("input[type=radio][name=option]:checked").val();
        console.log(userChoice);
        if (currentquestion < currentEvents.length) {
           
            function checkAns() {
                if (userChoice == currentEvents[currentquestion].validAnswer) {
                    correctAnswers++;
                    console.log(correctAnswers);
                    // clearInterval(timer);
                }
            }
            setupOptions();
            checkAns();
            if (currentquestion == currentEvents.length - 1) {
                $('#next').html("Submit");
                $('#next').click(function () {
                    $(".jumbotron").hide();
                    $("#results").fadeIn(1500);
                    $(".resultsDisp").text("You correctly answered " + correctAnswers + " questions out of 18");
                    
                });

            };

        };
    });

   
});