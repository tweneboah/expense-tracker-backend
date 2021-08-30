const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//create schema
const expenseSchema = new mongoose.Schema(
  {
    title: {
      required: [true, "Title  is required"],
      type: String,
    },
    type: {
      type: String,
      default: "expense",
    },
    description: {
      required: [true, "Description  is required"],
      type: String,
    },
    amount: {
      required: [true, "Amount is required"],
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

expenseSchema.plugin(mongoosePaginate);
//Compile schema into model
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
