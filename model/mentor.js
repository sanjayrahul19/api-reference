const mongoose = require("mongoose");

const Mentor = mongoose.model("mentors", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: 0,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
});

module.exports = Mentor;
