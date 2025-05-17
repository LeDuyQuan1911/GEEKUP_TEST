const { Category, Product } = require('../model');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findAll({ where: { category_id: id } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
