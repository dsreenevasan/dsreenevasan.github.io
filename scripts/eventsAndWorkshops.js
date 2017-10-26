;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('EventsAndWorkshopsController', EventsAndWorkshopsController);

    EventsAndWorkshopsController.$inject = ['$state', '$compile', '$scope', '$window'];

    function EventsAndWorkshopsController($state, $compile, $scope, $window){

        var ctrl = this;
        ctrl.divPosition = 0; //for horizontal div movement
        ctrl.verticalDivPosition = 0; //for vertical div movement
        ctrl.show = 1;
        ctrl.isMobile = false;
        ctrl.showOverlay = true;
        detectmob();

        function detectmob() {
            if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)) {
                ctrl.isMobile = true;
                /*$window.open('http://lite.kurukshetra.org.in');*/
            }
        }

        /*Setting focus to the div to listen to arrow keys*/
        document.getElementById('bg').focus();

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="tooltip"]').tooltip();
        });
        

        /*Events Details in the form of JSON*/
        ctrl.eventDetails = [
            {genreId: 1, genre: "Technical Events", events:[
                { id: 1, name: "Lord of the *NIX",
                    description: "Are you a Linux geek and believe this quote<br>" +
                   "One kernel to rule them all, One kernel to find them.<br>" +
                    "One kernel to call them all, And in salvation bind them.<br>" +
                    "In the bright land of Linux, Where the hackers play.<br>" +
                    "then this is the correct event for you.<br>" +
                    "Do you think you can battle it out with other warriors to gain this power. Come with one of your friends into the kingdom of linux and battle with others for the position of Lord.",
                    rules: {points: ["Each team can have a maximum of two members.","The members of a team can be from different Colleges/Institutions.",
				"The decisions made by the Administrators are binding and final."]},
                    format: {rounds: ["Pen and paper round that contains questions related to Unix,Linux. Question pattern consists of both MCQ and short answers.",
				"Surprise Hacking Event based on Linux/Unix. No sudo access and Internet access provided."]},
                    contact: [
                        "Prabhakaran  - 7200210789",
                        "Ilanchelian - 9445171664"
                    ],
                    image: "../images/events/tech/nix.jpg"},
                { id: 2, name: "OSPC", description: "Are you a superclass from whom 'the whole class' inherits the code during the frenzied lab sessions ?<br>" +
                    "Are you the kind of person who turns coffee into codes ?<br>" +
                    "Here is the event you are seeking!<br>" +
                    "Abacus brings you OSPC (OnSite Programming Contest) to get your Code dumped onsite to win amazing prizes.",
                rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions.",
                "Participants are not allowed to bring any additional material.", "Any kind of malpractice will lead to disqualification.", "Decisions made by the administrators will be final and binding."]},
                format: {rounds: ["A Written round consisting of questions based on Data Structures, Algorithms and Programming logic.", "The final round will be similar to ACM-ICPC."]},
                contact: [
                "Suresh - 9444136901",
                    "Muthu Nagappan - 9445811755",
                    "Vishvesh Thangamani - 9195693399" ,
                    "Tamilvendan - 7299802300"],
                image: "../images/events/tech/ospc.jpg"},
                { id: 3, name: "Debugging",
                    description: "'To err is to be human' goes the saying.'<br><br>" +
                    "Sadly, computers don't seem to agree with the divinity in the imperfections of nature." +
                "That's why it demands all it's code to be bug free and up and running." +
                    "To all those perfectionists out there, come and take part in the Debugging contest where you get to find and fix bugs and unravel interesting results to complete the intriguing game of coding.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["A written round consisting of simple debugging questions.", "You will be given the code which may or may not have logical/syntactic bugs.  You have to identify the errors and fix them."]},
                    contact: [
                        "Arjundhanraj - 7598306818",
                        "Sakthiprasath - 8110010630",
                        "Sultan - 8807777901"
                    ],
                    image: "../images/events/tech/debugging.jpg"},
                { id: 4, name: "DBmania",
                    description: "You think you can wade through piles and piles of copious amounts of data without getting lost?<br>" +
                    "Are your magic spells powerful enough to do whatever is needed to get those data dancing to your tunes?<br>" +
                    "If you believe you are one daring data-wizard, then come and take part in  DB Mania where queries rule your thoughts more than anything else!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Basic Questions on Database. (40 Questions)", "You will be given a schema and asked to build schema diagram ,queries, triggers, functions and procedures."]},
                    contact: [
                        "Arun - 8124267121",
                        "Gowrishankar - 8903462709",
                        "MuthuThillai - 9655883077"
                    ],
                    image: "../images/events/tech/db_mania.jpg"},
                { id: 5, name: "Game of Nerds",
                    description: "'When you play the game of nerds,you win or you learn'<br>" +
                    "You think you are able to master all the trades of CS ?<br>" +
                    "Are you that geeky person in every class to whom people flock to get their doubts clarified ?<br>You think you can battle it out with fellow nerds to prove your claim to the throne of nerds ?<br>" +
                    "Game of nerds presents you a platform to prove your excellence in the fundamentals of Computer engineering . Sharpen your brains to meet the best of nerds !",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["This will be the preliminary round. Basic questions on Data Structures and Algorithms, Computer Architecture, Database Management Systems,Operating Systems,Web Technology, Theory of Computation and Networks will be put forth.",
                    "Will be revealed on-spot"]},
                    contact: [
                        "Gokila - 9841183871",
                        "Poonkuzhali - 9003273214",
                        "Deepthi - 9003102993"
                    ],
                    image: "../images/events/tech/game_of_nerds.jpg"},
                { id: 6, name: "Cyber Wars",
                    description: "Dare to  venture a warzone filled with networking freaks ?<br>" +
                    "Are you capable of peeling off every layer of network with your expertise ?<br>You consider yourself to be an intimidating hacker who poses a threat to cyber criminals ?<br>" +
                    "Here is one thriving opportunity to showcase your networking talents.Be a part of Cyberwars to tickle your brains and take home wonderful prizes !",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Will be updated soon"]},
                    contact: [
                        "Radhika - 9962720188",
                        "Manimegalai - 8939321066",
                        "Rekha - 9094553868",
                        "Nandhini - 9444833190",
                        "Abirami - 9940220259",
                        "Pavithra - 8870603612",
                        "Ajay - 8883339409"
                    ],
                    image: "../images/events/tech/cyber_wars.jpg"},
                { id: 7, name: "Reverse Coding",
                    description: "Sick of figuring out the results you are supposed to anticipate when you are stuck with complicated code ( which might look a lot like Greek and Latin ) ?<br>" +
                    "Thought of a million other easier ways you could derive a result with cleaner code?<br>" +
                    "Be your own code sculpture in 'Reverse coding' where you get to write code to make sure you get the output that you'd be promptly given!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Written round consisting of various reverse coding questions.", "Same format as Prelims. Coding has to be done on computer."]},
                    contact: [
                        "Manojkumar - 9597250572",
                    "Harini - 9444850785",
                    "Sruthi - 9944263196",
                    "Makisha - 9629078175"
                    ],
                    image: "../images/events/tech/reverse_coding.jpg"},
                { id: 8, name: "Webaholic",
                    description: "Bored of typing pages and pages of codes ?Wanna try something creative that attracts everyone's attention ?<br>" +
                    "This event is exclusively for those who could bring incredibly creative web designs into reality with their magical h(w)ands. Try out your luck in designing marvellous web stuff with html,javascript and css to win exciting rewards.",
                    rules: {points: ["Each team can have a maximum of two members.", "The members of a team can be from different colleges/institutions.",
                    "Plagiarism to be strictly avoided and the team so found will be disqualified.", "Judges decision will be final."]},
                    format: {rounds: ["Questions from HTML,CSS, JAVASCRIPT, JQUERY, PHP. No of Questions : 40. Duration :30 mins", "Develop webpages using HTML,CSS,JS without any references.",
                    "Develop a website using these. 1.  Google Maps API. 2.  Use any database using any backend language. 3.  encoding / decoding"]},
                    contact: [
                        "Vagul - 9789117799",
                        "Durai Sreenevasan- 9894543958"
                    ],
                    image: "../images/events/tech/ospc.jpg"},
                { id: 9, name: "‘RE’PRESENT DESCRIPTION",
                    description: "How harmful can an idea be?Harmful?! <br>" +
                    "Yes, an idea can get as  infectious as a parasite. It grows on you till it completely numbs your senses, waiting for you to crystallize it to something tangible and worthy.<br>" +
                    "What if you are that person who has something so good of an idea that you are willing to put it to words?(Transforming it into a paper that has chances to be recognized by the biggest of conferences?)<br>" +
                    "We can sense your heart rate rising <alread></alread>y. Here is Abacus, presenting to you “Represent” an event where you get to flaunt your best,original ideas,(articulated into a paper), giving it the platform needed to be recognized by the brightest minds everywhere.<br><br>" +
                    "<b>Send your abstract to paperpresentation@abacus.org.in on or before March 20</b>",
                    rules: {points: ["Send your abstract to paperpresentation@abacus.org.in on or before March 20",
                        "Each team can have a maximum of 3 members.",
                        "If your paper gets selected, we will intimate through mail.",
                        "The selected teams should present their paper on March 23",
                        "The duration of presentation is 15 to 20 minutes."]},
                    format: {rounds: ["5g wireless technology",
                        "Blue eye technology",
                        "wi-vi technology",
                        "web mining",
                        "Human Computer interaction",
                        "Honeypot",
                        "Smart card security",
                        "nanotechnology",
                        "Cloud computing(healthcare)",
                        "Artificial Intelligence in machines."]},
                    contact: [
                        "Nivedhitha.N - 8870401260",
                        "Loshmitha.N - 8870884010"
                    ],
                    image: "../images/events/tech/ospc.jpg"},
                { id: 10, name: "Mr or Ms Geek",
                    description: "Shyness is about the fear of social judgments - at a job interview you might be excessively worried about what people think of you.<br> Face your fears, your fear will get destroyed. Come try out the mock interview sessions at Abacus and get the real experience of an interview. Find your flaws, improve,strive harder and succeed!<br>",
                    rules: {points: ["The particpants must have a valid aBaCus id.",
                        "The particpants must use the platform wisely.",
                        "Plagiarism is a sin.",
                        "A candidate selected by the panel would get an intern opportunity.",
                        "The duration of presentation is 15 to 20 minutes."]},
                    format: {rounds: ["Round 1:Quantitative aptitude,verbal",
                        "Round 2: Technical aptitude",
                        "Round 3: Face to face interview"]},
                    contact: ["Neeharika -  9566179068"],
                    image: "../images/events/tech/ospc.jpg"}],
            marginValue: [-35, -25, -15, 4, 45, 83, 105, 115, 125], margins :['-35vw', '-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw', '115vw', '125vw']},
            {genreId: 2, genre: "General", events: [
                {id: 1, name: "math.h",
                    description: "What is more fun than a good play with numbers?<br>"+
                    "Tease your brain and test your skills.<br>"+
                    "Come explore the world of mathematics via witty puzzles!<br>"+
                    "Infinity is just the Beginning.",
                    rules: {points:["Each team can have a maximum of three members.",
                        "The members of a team can be from different colleges/institutions."]},
                    format: {rounds:["Consists of two rounds.(Round 1 and Finals).",
                    "Consists of three sections of varying difficulties.",
                        "Hard Questions carry higher scores than Medium and Easy Questions.",
                        "Some questions are starred and will be considered in the case of Tie-breakers. "]},
                    contact: ["Arul Jothi - 8012264903"],
                    image: "../images/events/general/mathrix.jpg"},
                {id: 2, name: "Spin to win",
                    description: "The whole event relies on spinning the wheel and getting tasks with respect to the number got. On the successful completion of the task a coupon will be provided. Some tasks will have time constraints.",
                    rules: {points:["Each person will get one turn.", "If the task is not completed in the given time then you eventually lose.",
                                    "Completing the task on time is mandatory to win a coupon.", "In case of any discrepancy the organizer's decision is final."]},
                    format: {rounds:["The wheel has to be spun and correspondingly tasks are to be completed by the participant", "The tasks would be revealed only on the day of the event"]},
                    contact: ["Jenifer    9790718543"],
                    image: "../images/events/quiz.jpg"},
                {id: 3, name: "Abacus General Quiz",
                    description: "He who questions,thinks. He who answers,knows. For all the thinkers and knowers,welcome to Abacus General Quiz. Come surprise us with your general awareness of stuff in this single round of quizzing, which will include questions from current affairs to science. Much prizes to be won. Top first-year only teams would bag a definite prize.(P.S: No questions will be asked about soppana sundari :P)",
                    rules: {points:["The teams could consist of two or three members.", "Lone wolves are expected to be social enough to form a team."]},
                    format: {rounds:["The teams would have to answer a single round of general quiz consisting of 40 questions", "Tie breaking would be done on the basis of starred questions"]},
                    contact: ["Prasath 94879 69618"],
                    image: "../images/events/gaming.jpg"},
                {id: 4, name: "Finding Nemo",
                    description: "Calling all 007’s, Sherlocks and Langdons! Do you have what it takes to decipher some of the hardest enigmas and explore unchartered territories? Like Marlin and Dory, can you connect the dots and locate Nemo? If you think you can crack and track your way out of this labyrinth, then this is your arena!",
                    rules: {points:["Teams of three only",
				"Decision by the organisers are final",
				"Use of Google will be selectively allowed",
				"Violation of any or all of the above rules will lead to instant disqualification"
]},
                    format: {rounds:["Will be updated soon"]},
                    contact: ["Keerthana - 9042389902"],
                    image: "../images/events/general/selfie_hunt.jpg"},
                {id: 5, name: "Abacus Premier League",
                    description: "Chance to pick top players at a price of your choice. Come and taste the actual recipe of an IPL Auction, where an auctioneer will roll out all the players to be selected by the franchises to make a strong team. Come in and find how well you can manage money matters and how strong your team can be picked!",
                    rules: {points:["Two or Three members per team.",
                        "Individual registration is required",
                        "Participants need not be from the same institution",
                        "Any form of malpractice will result in termination",
                        "Organizer's decision will be final and won't change",
                        "Abacus ID is a must"]},
                    format: {rounds:["20 questions to be solved in 30 minutes. Top 8 scorers progress to the final stage",
                        "8 teams. Each team will have a specific franchise. Real Auction with a purse of a specific amount which you can use to pick your team. Further rules will be announced on spot"]},
                    contact: ["Prasanna - 9003222748"],
                    image: "../images/events/tech/cyber_wars.jpg"},
                {id: 6, name: "Housefull",
                    description: "Projects...Internals..Lab_Sem... still stressed? <br>" +
                    "So to get out of these pressures, here comes completely fun- packed event for you. The event is mainly focused on cricket, cinema and other entertaining stuff.",
                    rules: {points:["The team must consist of three members.",
                        "The judge's’ decision would be binding and final."]},
                    format: {rounds:["Round 1 will be pen and paper round with 25 questions.",
                        "Round 2 and 3 will be logical and fun!"]},
                    contact: ["Pradeepa     9698111129", "Vishnu Priya	8526925200"],
                    image: "../images/events/general/house_full.jpg"},
                {id: 7, name: "FANDOM QUIZ",
                    description: "'We are here to see koothrapaali...Not kill batman!'<br>" +
                        "'You got a man who is a nanny? You got a Manny?'<br>" +
                        "Our favourite characters.Our most favourite one-liners.<br>" +
                        "Be it a season finale or just a motion poster, the hype for our most loved TV series is always just wow. <br>" +
                        "With summer arriving in chennai, get set to put your fan theories to the test. Join us at ABACUS 2017 for THE ONE WITH THE FANDOM QUIZ. Come and prove that YOU’RE GODDAMN RIGHT.",
                    rules: {points:["Teams of 2-3 members. Inter-college teams and Lone wolves are also allowed.",
                        "There are only two rounds in the event, a preliminary written round followed by the finals.",
                        "At any point in the Quiz, the Quiz Master’s decision stands final."]},
                    format: {rounds:["The First Round will be Written Round with built-in Tie Breakers.",
                        "Based on Scores, Top 8 Teams qualify for the Finals."]},
                    contact: ["Sukin Kumar - +919944513445", "Makesh Narsimhan - +919445657670", "Krishna Anandan - +919629138856"],
                    image: "../images/events/gaming.jpg"}],
                marginValue: [-25, -15, 3, 45, 83, 105, 115], margins :['-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw', '115vw']},
                /*marginValue: [-15, 3, 45, 83], margins :[ '-15vw', '4vw', '45vw', '83vw']},*/
            {genreId: 3, genre: "Night Events", events:
                [{id: 1,
                    name: "Hackathon",
                    description: "It is said, if you give a toy to a hacker, the first thing he will do is take it apart. If you are the kind of person who loves to take a challenge head-on, Abacus has for you the perfect concoction of code, caffeine and complete frenzy - Hackathon 2017. Built to provoke the coder inside you, the Hackathon will force you to your limits rob you of your sleep, but the excitement will be worth it.<br><br>" +
                    "So eat, code repeat!",
                    rules: {points:["This is a team participation hackathon. You must have exactly 4 members in your team.",
                        "The hackathon will start at 24-03-2017 09:30p.m  and end at 25-03-2017 08:00a.m, you work on your hack during the allotted time only.",
                        "It's an on-site hackathon, the venue is College of Engineering Guindy, Anna University, Chennai-25.",
                        "You are expected to come up with new and innovative ideas, any idea that has been copied from somewhere will be disqualified.",
                        "More weightage will be given to idea of your application and execution practices used to achieve the desired goal.",
                        "Your hack must be developed entirely during the Hackathon duration. You may use open source libraries and other freely available systems / services such as Google Maps, Facebook Connect, Twitter feeds etc."]},
                    format: {rounds:["Jot down all problems you want to crack. Choose the one that you can in the next 24 hours and Get Set Go! You are supposed to design and build your idea. The submission product can be Web app, Android, Windows, Gaming App or anything creative enough that you consider will win this Hackathon."]},
                    contact: ["Renga Bashyam 	7598010654",
                        "Bharath Bhargav	9787975416",
                        "Sankara Narayanan   9488119314"],
                image: "../images/events/ospc.jpg"}],
                marginValue: [45], margins :['45vw']},
            {genreId: 4, genre: "Online Events", events: [
                {id: 1, name: "OLPC",
                    description:"Is programming your weapon of choice in a heated room full of technocrats? If yes, then you're also probably lazy if you're here reading about the aBaCuS Online Programming Contest. But don't let that hinder you from showing off your coding skills to your opponents! Enjoy the comforts of home while making your way to being hailed as the ultimate coding ninja! ",
                    rules: {points: ["All participants must have a valid Abacus ID.","Only individual participation is allowed.",
                        "Individuals found to be involved in plagiarism will not be considered in the final rank list.",
                        "Rules of Codechef will also apply."]},
                    contact: ["Renga Bashyam - 7598010654",
                        "Bharath Bhargav - 9787975416",
                        "Sankara Narayanan - 9488119314"],
                    image: "../images/events/online/olpc.jpg"},
                {id: 2, name: "The Beautiful Mind",
                    description: "This event consists of tricky questions and you have the answer them, simple as that. But here's comes the crux: You'll need to write code to find the answer, such are the questions. Lengthy calculations and complex answers are things humans little patience with. After all, that's what computers were made for, weren't they?",
                    rules: {points:["All participants must have a valid Abacus ID.",
			"Be Choosy. The questions carry different weightage",
			"Only the beholder decides the beauty of your mind. So please don't expect a score board while the event is going on!",
			"Any number of attempts could be taken to answer a question. But the final answer submitted would be taken for consideration.",
                        "Only individual participation is allowed."]},
                    format: {rounds:["A single round of 20 questions"," The event would go on from 9pm to 10.30pm on March 19,2017"]},
                    contact: ["Renga Bashyam - 7598010654",
                        "Bharath Bhargav - 9787975416",
                        "Sankara Narayanan - 9488119314"],
                    image: "../images/events/online/davinci_code.jpg"},
                {id: 3, name: "Da Vinci Code",
                    description: "Clues, links and puzzles excite you more than anything else. Join the online treasure hunt event by aBaCUs and prove your dexterity and persistence. With the little information you're given, only your intellect and wisdom will help you solve the DaVinci Code.",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:[" "]},
                    contact: ["Raj Madhan - 9789231286"],
                    image: "../images/events/online/davinci_code.jpg"},
                {id: 4, name: "Infocus",
                    description: "When words become unclear I shall focus with photographs... when images become inadequate I shall be content with silence! A photograph involves 2 people... one before the lens and one behind it. A good photographer is the one who notices extraordinary details among ordinary stuff. Show us how your lens can capture these unseen details in the daily world! <br><br>" +
                        "Winner will get exciting goodies from <a href='https://www.facebook.com/smileymedia/'>Smiley Media</a>",
                    rules: {points: ["The photographs must be based on the theme 'Streets of India or Women Empowerment'",
                        "A participant can send any number of entries",
                        "The winners would be decided based on the number of likes and the relevance of the photographs to the theme.",
                        "The judges' decision is binding and final",
                        "Plagiarism if found might lead to disqualification."]},
                    format: {rounds: ["The photographs must be sent to infocus@abacus.org.in",
                        "The last date for submitting the entries is 22 March,2017"]},
                    contact: ["Manish 82206 53574"],
                    image: "../images/events/ospc.jpg"}/*
                {id: 4, name: "Scribble Away",
                    image: "../images/events/paper.jpg"},
                {id: 5, name: "ROS",
                    image: "../images/events/ospc.jpg"}],*/],
                /*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [-15, 4, 45, 83], margins :['-15vw', '4vw', '45vw', '83vw']}/*,
            {genreId: 5, genre: "Workshops", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    image: "../images/events/ospc.jpg"},
                /!*{id: 1, name: "Data Mining",
                    image: "../images/workshop/mining.jpg"},
                {id: 2, name: "Internet Of Things",
                    image: "../images/workshop/iot.jpg"},
                {id: 3, name: "Ruby On Rails",
                    image: "../images/workshop/ruby.jpg"},
                {id: 4, name: "IBM bluemix and Dockers",
                    image: "../images/events/bluemix.jpg"},
                {id: 5, name: "Big Data",
                    image: "../images/events/ospc.jpg"}*!/],
                /!*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*!/
                marginValue: [45], margins :['45vw']},
            {genreId: 6, genre: "Reach", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /!*image: "../images/events/android.jpg"*!/
                    image: "../images/events/ospc.jpg"},
                /!*{id: 2, name: "Advanced Web Development",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /!*image: "../images/events/web.jpg"*!/
                    image: ""}*!/],
                /!*marginValue: [4, 45], margins :['4vw', '45vw']*!/
                marginValue: [45], margins :['45vw']}*/
        ];

        /*To track the centre div*/
        ctrl.centreDiv = {
            genreId : 0,
            eventId : 1
        };
        ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);

        /*ctrl.marginValue = [-35, -15, 3, 14, 45, 79, 89, 105, 125];
        ctrl.margins = ['-35vw', '-15vw', '3vw', '14vw', '45vw', '79vw', '89vw', '105vw', '125vw'];*/

        ctrl.marginValue = [-35, -25, -15, 7, 45, 81, 105, 115, 125];
        ctrl.margins = ['-35vw', '-25vw', '-15vw', '7vw', '45vw', '81vw', '105vw', '115vw', '125vw'];

        /*For mobiles*/
        /*ctrl.marginValue = [-35, -15, 3, 13, 45, 65, 85, 105, 125];
        ctrl.margins = ['-35vw', '-15vw', '5vw', '17vw', '45vw', '79vw', '91vw', '105vw', '125vw'];*/

        ctrl.marginTopValue = [-20, 10, 45, 81, 110, 125];
        ctrl.marginsTop = ['-20vh', '11vh', '45vh', '81vh', '110vh', '125vh'];

        /*For Mobiles*/
        /*ctrl.marginTopValue = [-20, 10, 45, 81, 110, 125];
        ctrl.marginsTop = ['-20vh', '13vh', '45vh', '77vh', '110vh', '125vh'];*/

        ctrl.move = function(key){
            if(key.keyCode === 39){      //right
                resetAnimation();
                ctrl.show = 1;
                if(ctrl.horizontalMidDiv === 0){
                    ctrl.horizontalMidDiv = ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                }
                ctrl.horizontalMidDiv--;
                ctrl.divPosition++;
                console.log("div position" + ctrl.divPosition);
            }
            else if(key.keyCode === 37){  //left
                ctrl.show = 1;
                resetAnimation();
                ctrl.horizontalMidDiv = (ctrl.horizontalMidDiv+1) % ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                if(ctrl.divPosition === 0){
                    ctrl.divPosition = ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                }
                ctrl.divPosition--;
                console.log("div position" + ctrl.divPosition);
            }
            else if(key.keyCode === 38) {  //up
                resetAnimation();
                ctrl.divPosition = 0;
                ctrl.verticalDivPosition++;
                if(ctrl.centreDiv.genreId === 0){
                    ctrl.centreDiv.genreId = ctrl.eventDetails.length;
                }
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId-1) % ctrl.eventDetails.length;
                /*if(ctrl.verticalDivPosition === 0){
                    ctrl.verticalDivPosition = ctrl.eventDetails.length;
                }
                ctrl.verticalDivPosition--;
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId+1) % ctrl.eventDetails.length;*/
               // ctrl.horizontalMidDiv = Math.ceil(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                //if(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 1 || ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 7){
                    ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                //}
            }
            else if(key.keyCode === 40) {  //down
                resetAnimation();
                ctrl.divPosition = 0;
                if(ctrl.verticalDivPosition === 0){
                    ctrl.verticalDivPosition = ctrl.eventDetails.length;
                }
                ctrl.verticalDivPosition--;
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId+1) % ctrl.eventDetails.length;
                /*ctrl.verticalDivPosition++;
                if(ctrl.centreDiv.genreId === 0){
                    ctrl.centreDiv.genreId = ctrl.eventDetails.length;
                }
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId-1) % ctrl.eventDetails.length;*/
                //ctrl.horizontalMidDiv = Math.ceil(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                //if(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 1 || ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 7){
                    ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                //}
            }
        };

        function resetAnimation() {
            var element = document.getElementById('bottomDiv');
            element.classList.remove("mainMidBottomDiv");
            void element.offsetWidth;
            element.classList.add("mainMidBottomDiv");
        }

        ctrl.change = function(code){
            console.log("Swipe");
            var obj = {
                keyCode : code
            };
            ctrl.move(obj);
        };

        ctrl.setFocus = function(){
            $window.document.getElementById('navigation').focus();
        };

        ctrl.go = function(state){
            $state.go(state);
        };

        ctrl.changeDisplay = function(){
            console.log("change display");
        };

        ctrl.changeOverlay = function () {
            ctrl.showOverlay = false;
        };

        ctrl.check = function () {
            console.log("ppp");
        };

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $("#events_rules").click(function(){
                console.log("cliked");
            });
        });

    }

})();
