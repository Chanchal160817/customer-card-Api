const customerModel = require("../model/customerModel");
const cardModel = require("../model/cardModel");

const createCard = async (req, res) => {
    try {
        let data = req.body;
        let { cardNumber, cardType, customerName, status, vision, customerID } = data;
        let result = await customerModel.create(data);
        res.send({ message: "Card created  successfully", data: result });
    } catch (err) {
        res.status(500).send(message.err);
    }
};

const getCard = async (req, res) => {
    try {
        let result = await customerModel.find();
        res.status(200).send({ message: " card data", data: result });
    } catch (err) {
        res.status(500).send(message.err);
    }
}
module.exports = { createCard, getCard }