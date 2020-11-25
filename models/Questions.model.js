const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  question: {
    type: String,
    unique: true,
    required: [true, 'Must have a question!'],
  },
  correctAnswer: {
    type: String,
    required: [true, 'Must have a question!'],
  },
  options: [{
    a: String,
    b: String,
    c: String,
    d: String,
  }]
});

const Question = model("Question", questionSchema);

module.exports = Question;