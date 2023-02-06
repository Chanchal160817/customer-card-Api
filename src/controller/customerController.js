const customerModel = require("../model/customerModel");

const createCustomer = async (req, res) => {
    try {
        let date = req.body;
        let {
            firstName,
            lastName,
            mobileNumber,
            DOB,
            emailID,
            address,
            customerID,
            status,
        } = date;

        let result = await customerModel.create(data);
        res.send({ message: "customer created  successfully", data: result });
    } catch (err) {
        res.status(500).send(message.err);
    }
};

const getCustomer = async (req, res) => {
    try {
        let result = await customerModel.find({ status: ACTIVE });
        res.status(200).send({ message: "Active customer data", data: result });
    } catch (err) {
        res.status(500).send(message.err);
    }
};

const deleteCustomer = async function (req, res) {
    try {
        //Validate: The customerId is present in request path params or not.
        if (!ObjectId.isValid(req.params.id)) {
            return res
                .status(404)
                .send({ status: false, msg: "CustomerId invalid !" });
        }
        let customer_Id = req.params.id;

        //Validate: The customerId is valid or not.
        let customer = await customerModel.findById(customer_Id);
        if (!customer)
            return res
                .status(404)
                .send({ status: false, msg: "customer does not exists" });

        //Validate: If the customerId is not deleted (must have isDeleted false)
        let is_Deleted = customer.isDeleted;
        if (is_Deleted == true)
            return res
                .status(404)
                .send({ status: false, msg: "customer is already deleted" });

        //Delete a customer by changing the its isDeleted to true.
        let deletedcustomer = await customerModel.findOneAndUpdate(
            { _id: customer_Id },
            { $set: { isDeleted: true, deletedAt: Date.now() } },
            { new: true }
        );
        //Sending the Deleted response after updating isDeleted : true
        return res.status(200).send({ status: true ,message:'customer deleted successfully' });
    } catch (err) {
        return res
            .status(500)
            .send({ status: false, msg: " Server Error", error: err.message });
    }
};
module.exports = { createCustomer, getCustomer, deleteCustomer };
