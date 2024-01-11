const contactModel = require("../models/contactModel.js");
const contactController = async (req, res) => {
  try {
    const { name, email, subject, query } = req.body;
    if(!name || !email || !subject || !query){
        res.status(200).send(
            {
                success:false,
                message: "INVALID"
            }
        )
    }

    const cont = await new contactModel({
      name,
      email,
      subject,
      query,
    }).save();
    res.status(201).send({
      success: true,
      message: "Query Submitted Successfully",
      cont,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {contactController};