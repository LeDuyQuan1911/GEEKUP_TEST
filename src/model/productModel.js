module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    tableName: 'products',
    timestamps: false
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
    Product.hasMany(models.OrderItem, { foreignKey: 'product_id' });
    Product.hasMany(models.ProductStock, { foreignKey: 'product_id' });
  };

  return Product;
};
