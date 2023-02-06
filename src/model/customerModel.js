const mongoose = require("mongoose");
const customerSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    mobileNumber: { type: String },
    DOB: { type: date },
    emailID: { type: String },
    address: { type: String },
    customerID: { type: String },
    status: { type: String, enum: [Active, Deactive] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
