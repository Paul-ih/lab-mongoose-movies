
require("dotenv").config();
require("../../config/mongo");
const celebrityModel = require("../models/celebrity.js");

const artists = [
  
  {
    name: "Brad Pitt",
    occupation: "Actor",
    catchPhrase: "They keep getting younger every year",
},
{
  name: "Tom Cruise",
  occupation: "Actor",
  catchPhrase: "I'm SOO happy!!!!",
},
{
  name: "Merry Streep",
    occupation: "Actor",
    catchPhrase: "Harvey who?",
}
];
