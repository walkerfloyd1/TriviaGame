$(document).ready(function () {
            var correct = 0;
            var incorrect = 0;
            var time = 60;
            var intervalId;

            function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
            }

            function decrement() {
                time--;
                $("#timer").html("<h2>" + time + "</h2>");
                if (time === 0) {
                    clearInterval(intervalId);
                    endGame();
                }
            }
            run();



            var questionsAndAnswers = [{
                    question: "What is the highest grossing movie ever worldwide, unadjusted for inflation? Hint: it was nominated for Best Picture",
                    options: ['The Avengers', 'Avatar', 'Titanic', 'Star Wars'],
                    answer: "Avatar",

                }, {
                    question: "Who directed Saving Private Ryan?",
                    options: ['Stanley Kubrick', 'Christopher Nolan', 'Steven Spielberg', 'George Lucas'],
                    answer: "Steven Spielberg",

                },

                {
                    question: "Who is the only actor to win an Oscar for a superhero movie?",
                    options: ['Heath Ledger', 'Robert Downey Jr.', 'Christian Bale', 'Will Smith'],
                    answer: "Heath Ledger",

                },

                {
                    question: "Who was the first black actor to win an Academy Award?",
                    options: ['Morgan Freeman', 'Hattie McDaniel', 'Sidney Lumet', 'Mahershala Ali'],
                    answer: "Hattie McDaniel",

                },

                {
                    question: "Which films are tied for the record of most Oscars won?",
                    options: ['Ben-Hur, Titanic, Lord of the Rings: Return of the King', 'The Shawshank Redemption, Star Wars, Gone With the Wind', 'Lawrence of Arabia, The Shawshank Redemption, Psycho', 'Vertigo, The Sound of Music, La La Land'],
                    answer: "Ben-Hur, Titanic, Lord of the Rings: Return of the King",


                },

                {
                    question: "How many times has Meryl Streep been nominated for an Oscar?",
                    options: ['7', '6', '4', '21'],
                    answer: "21",

                },

                {
                    question: "How many times was Leonardo DiCaprio nominated before winning his Oscar?",
                    options: ['1', '3', '4', '5'],
                    answer: "5",

                },

                {
                    question: "Which actors have both won Oscars for playing the same fictional character in different movies?",
                    options: ['Daniel Craig and Sean Connery', 'Robert de Niro and Marlon Brando', 'Bill Murray and Jesse Eisenberg', 'Anthony Hopkins and Tom Hanks'],
                    answer: "Robert de Niro and Marlon Brando",

                },
            ];





            function startGame() {
                questionsAndAnswers.forEach(function (q) {
                    var masterDiv = $("<div>");
                    var questionDiv = $("<div>").text(q.question);
                    var optionsDiv = $("<div>");
                    q.options.forEach(function (option) {
                        var optionDiv = $("<input>").attr("type", "radio").attr("name", q.question);
                        var text = $("<p>").text(option).css("display", "inline-block");
                        optionsDiv.append(optionDiv, text);
                    })
                    masterDiv.append(questionDiv, optionsDiv);
                    $("#questions").append(masterDiv);

                    function addWins() {
                        for (var i = 0; i < questionsAndAnswers.length; i++)
                            if (optionsDiv.text === questionsAndAnswers[i].answer) {
                                correct++;
                            } else {
                                incorrect++;
                            }


                    }
                    addWins();


                })

            }
            startGame();
            

            function endGame() {
                alert("You guessed correctly " + correct + " times, and guessed incorrectly " + incorrect + " times.")
            }
            $("#submit").on("click", endGame);

        });