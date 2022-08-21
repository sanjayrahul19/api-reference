const router = require("express").Router();
const Mentor = require("../model/mentor");
const Student = require("../model/student");

router.get("/", (req, res) => {
  res.send("student router");
});

router.post("/add", async (req, res) => {
  try {
    const user = await new Student(req.body);
    await user.save();
    const userData = await Mentor.findByIdAndUpdate(
      { _id: user.mentor },
      {
        $push: {
          students: user,
        },
      },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    const user = await Student.find({})
      .populate("mentor", "name age")
      .sort({ name: 1 });
    return res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
