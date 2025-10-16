const asyncHandler = require("express-async-handler");
const Category = require("../model/Category");

const categoryController = {
  //--- Create ---
  create: async (req, res) => {
    try {
      const { name, type } = req.body;
      if (!name || !type) {
        return res.json({
          error: "Name and type are required for creating a category",
        });
      }
      const normalizedName = name.toLowerCase();
      const categoryExists = await Category.findOne({
        name: normalizedName,
        user: req.user,
      });
      if (categoryExists) {
        return res.status(400).json({ message: "Category already exists" });
      }
      const category = await Category.create({
        name: normalizedName,
        user: req.user,
        type,
      });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
  create: asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    if (!name || !type) {
      throw new Error("Name and type are required for creating a category");
    }
  },
    const normalizedName = name.toLowerCase();
    const categoryExists = await Category.findOne({
      name: normalizedName,
      user: req.user,
    });
    if (categoryExists) {
      res.status(400);
      throw new Error("Category already exists");
    }
    const category = await Category.create({
      name: normalizedName,
      user: req.user,
      type,
    });
    res.status(201).json(category);
  }),
  //--- Lists ---
  lists: async (req, res) => {
    try {
      const categories = await Category.find({ user: req.user });
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  lists: asyncHandler(async (req, res) => {
    const categories = await Category.find({ user: req.user });
    res.json(categories);
  }),
  //--- Update ---
  update: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const { type, name } = req.body;
      const normalizedName = name.toLowerCase();
      const category = await Category.findById(categoryId);
      if (!category || category.user.toString() !== req.user.toString()) {
        return res.status(404).json({ message: "Category not found" });
      }
      const oldName = category.name;
      category.name = normalizedName || category.name;
      category.type = type || category.type;
      const updatedCategory = await category.save();
      if (oldName !== updatedCategory.name) {
        //Update transactions
      }
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
  update: asyncHandler(async (req, res) => {
    const { categoryId } = req.params;
    const { type, name } = req.body;
    const normalizedName = name.toLowerCase();
    const category = await Category.findById(categoryId);
    if (!category || category.user.toString() !== req.user.toString()) {
      res.status(404);
      throw new Error("Category not found");
    }
  },
    const oldName = category.name;
    category.name = normalizedName || category.name;
    category.type = type || category.type;
    const updatedCategory = await category.save();
    if (oldName !== updatedCategory.name) {
      //Update transactions
    }
    res.json(updatedCategory);
  }),
  //--- Delete ---
  deleteCat: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (category && category.user.toString() === req.user.toString()) {
        //Find transactions with this category and update them
        await category.deleteOne();
        res.json({ message: "Category removed and transactions updated" });
      } else {
        res.status(404).json({ message: "Category not found or user not authorized" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
  deleteCat: asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category && category.user.toString() === req.user.toString()) {
      //Find transactions with this category and update them
      await category.deleteOne();
      res.json({ message: "Category removed and transactions updated" });
    } else {
      res.status(404);
      throw new Error("Category not found or user not authorized");
    }
  },
  }),
};

module.exports = categoryController;