const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/income/Income");

//-------------------------------------
//Create
//-------------------------------------
const createIncome = expressAsyncHandler(async (req, res) => {
  const { description, title, amount } = req.body;

  try {
    const income = await Income.create({
      description,
      title,
      amount,
      user: req?.user?._id,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Fetch all
//-------------------------------------
const fetchIncomesCtrl = expressAsyncHandler(async (req, res) => {
  const { page } = req?.query;
  try {
    const incomes = await Income.paginate(
      {},
      { limit: 10, page: Number(page), sort: "desc", populate: "user" }
    );

    res.json(incomes);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Fetch single
//-------------------------------------
const fetchIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Update
//-------------------------------------
const updateIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { description, title, amount } = req.body;
  try {
    const income = await Income.findByIdAndUpdate(id, {
      description,
      title,
      amount,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Delete
//-------------------------------------
const deletIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});
module.exports = {
  createIncome,
  fetchIncomeCtrl,
  fetchIncomesCtrl,
  updateIncomeCtrl,
  deletIncomeCtrl,
};
