const codeModel = require("../models/codeModel.js");

const codedetails = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(200).send({
        success: false,
        message: "Fill all details to continue",
      });
    }
    const code = await new codeModel({
      userId: req.user._id,
      title,
      description,
    }).save();
    res.status(201).send({
      success: true,
      message: "Details saved successfully",
      code,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { codedetails };