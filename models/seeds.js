const Question = require("./Questions.model");
const mongoose = require("mongoose");
require("dotenv").config();

// const MONGO_URI = "mongodb://localhost/newproject";
const MONGO_URI = process.env.MONGODB_URI_LIVE;

let questions = [
  {
    question: "How is the basilica Sacre Coeur mainly accessible?",
    correctAnswer: "Ramp",
    options: [{ a: "Tunnel", b: "Stairs", c: "Escalator", d: "Ramp" }],
  },
  {
    question: "What is true about Notre Dame?",
    correctAnswer: "It is the most famous catedral in the world",
    options: [
      {
        a: "It is the most famous catedral in the world",
        b: "There are more than 400 full-time employed priests there",
        c: "It is a place where you can sleep for just 20 franc ",
        d: "The idea is to build Notre dam originally came from Quasimodo",
      },
    ],
  },
  {
    question: "Why was Triumphal Arch of Orange builded?",
    correctAnswer: "To honor the veterans of the Gallic Wars",
    options: [
      {
        a:
          "To honor the veterans that participated in the Battle of Silva Arsia",
        b:
          "To honor the veterans that participated in the Battle of Agrigentum",
        c: "To honor the veterans that participated in the Gallic Wars",
        d: "To honor Julius Ceasar",
      },
    ],
  },
  {
    question: "What is true about Hôtel de ville?",
    correctAnswer: "USA & Germany",
    options: [
      {
        a: "It has been featured in movies 456 times",
        b:
          "The square in front of the building used to be a site of horrible executions",
        c: "Frank Sinatra has mentioned this hotel six times in his songs",
        d: "The hotel has three libaries",
      },
    ],
  },
  {
    question: "What coutries fought in Omaha Beach?",
    correctAnswer: "USA & Germany",
    options: [
      {
        a: "USA & Russia",
        b: "Russia & Germany",
        c: "Gerany & France",
        d: "USA & Germany",
      },
    ],
  },
  {
    question: "How many paintings do Musée Picasso have?",
    correctAnswer: "300",
    options: [{ a: "100", b: "200", c: "300", d: "560" }],
  },
  {
    question: "How many people are buried in the Catacombes de Paris?",
    correctAnswer: "Around 6 million",
    options: [
      {
        a: "Around 1 million",
        b: "Around 6 million",
        c: "Around 20 million",
        d: "Around 16 million",
      },
    ],
  },
  {
    question: "What famous person are buried in Hôtel des Invalides graveyard?",
    correctAnswer: "Napoleon I",
    options: [
      {
        a: "Napoleon II",
        b: "Napoleon IIII",
        c: "Napoleon V",
        d: "Napoleon I",
      },
    ],
  },
  {
    question: "Which of the following are true about Moulin Rouge?",
    correctAnswer: "It was the first building in Paris to have electricity",
    options: [
      {
        a: "It was built during the american civil war",
        b: "It was the first building in Paris to have electricity",
        c: "There is 200 hundred full-time performers there",
        d: "There are around million visitors each year",
      },
    ],
  },
  {
    question: "Who was the first king to live in Palace of Versailles?",
    correctAnswer: "Louis XIII",
    options: [
      { a: "Louis XIV", b: "Louis XIII", c: "Ludvig XII", d: "Ludvig XVI" },
    ],
  },
  {
    question: "What is Louvre?",
    correctAnswer: "World's largest museum",
    options: [
      {
        a: "A pyramid that Leonardo Da Vinci architected",
        b: "An museum that has a famous sculpture called Venus De Milano",
        c: "World's second largest museum",
        d: "World's largest museum",
      },
    ],
  },
  {
    question: "When was the Eiffel Tower built?",
    correctAnswer: "28 January, 1887",
    options: [
      {
        a: "28 January, 1887",
        b: "30 January, 1881",
        c: "5 May, 1776",
        d: "23 May, 1872",
      },
    ],
  },
  {
    question: "What is Champs-Élysées most famous for?",
    correctAnswer: "One of the most glamorous shopping areas in the world",
    options: [
      {
        a: "One of the most glamorous shopping areas in the world",
        b: "Two of the most famous presidents died there",
        c: "It' the street that is most featured in the movies",
        d: "The street that occurs in most songs",
      },
    ],
  },
];

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
    return Question.insertMany(questions);
  })
  .then((data) => {
    console.log(data);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
