const router = require("express").Router();
const Mentor = require("../model/mentor");

router.get("/", (req, res) => {
  res.send("mentor router");
});

router.post("/add", async (req, res) => {
  try {
    const user = await new Mentor(req.body);
    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const user = await Mentor.find({ experience: { $gte: 2 } })
      .populate("students", "name department -_id")
      .select("-_id")
      .sort({ name: 1 });
    return res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
