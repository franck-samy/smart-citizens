const Question = require('./Questions.model');
const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost/newproject";

let questions = [
  {
    question: 'The architect behind Sagrada Família is?',
    correctAnswer: "Antoni Gaudí",
    options: [{ a: "Pablo Picasso", b: 'Antoni Gaudí', c: "Antonio Vivaldi", d: "Ludwig Mies van der Rohe" }]
  },
  {
    question: 'Which of the following facts are true about Palacio Real de Madrid?',
    correctAnswer: "It's the biggest royal castle in Europe",
    options: [{ a: "It's the biggest royal castle in Europe", b: 'It was Colombus home for two years', c: "The castle have more than 3500 rooms", d: "Until this day, there is still a royal family living there" }]
  },
  {
    question: 'How many people flock around Brandenburger Tor during New Year’s Eve party?',
    correctAnswer: "About a million",
    options: [{ a: 'Around hundred thousand', b: 'Around fifty thousand', c: "Around six hundred thousand", d: "Around a million" }]
  },
  {
    question: 'What is one of the things Neuschwanstein is famous for?',
    correctAnswer: "Inspiration for Disney's theme park castles",
    options: [{ a: 'It has the most amount of doors per square feet', b: 'It was builded in just 10 years', c: "Inspiration for Walt Disney's famous theme park castles", d: "It has been torn down and rebuilt more than 23 times" }]
  },
  {
    question: 'When was the berlin wall torn down?',
    correctAnswer: '9 November, 1989',
    options: [{ a: '9 November, 1989', b: '11 November, 1990', c: '9 Febuary, 1978', d: '4 June, 1983' }]
  },
  {
    question: 'What is Lovre?',
    correctAnswer: "Worlds largest museum",
    options: [{ a: 'A pyramid that Leonardo Da Vinci architected', b: 'An museum that has a famous sculpture called Venus De Milano', c: "World's second largest museum", d: "Worlds largest museum" }]
  },
  {
    question: 'When was the Eiffel Tower built?',
    correctAnswer: '28 January, 1887',
    options: [{ a: '28 January, 1887', b: '30 January, 1881', c: '5 May, 1776', d: '23 May, 1872' }]
  },
  {
    question: 'What is Champs-Élysées most famous for?',
    correctAnswer: 'One of the most glamorous shopping areas in the world',
    options: [{
      a: 'One of the most glamorous shopping areas in the world', b: 'Two of the most famous presidents died there', c: "It's the street that is most featured in the movies", d: "The street that occurs in most songs"
    }]
  }]
  
mongoose.connect(MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connected to DB");
  return Question.insertMany(questions);
}).then(data => {
  console.log(data);
  mongoose.connection.close();
})
.catch(err => {
  console.log(err)
})

