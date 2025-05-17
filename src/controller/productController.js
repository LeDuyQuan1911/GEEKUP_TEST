const { Product } = require('../model');
const { Op } = require('sequelize');

exports.searchProducts = async (req, res) => {
  const keyword = req.query.keyword || '';
  try {
    const products = await Product.findAll({
      where: {
        name: { [Op.like]: `%${keyword}%` }
      }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
