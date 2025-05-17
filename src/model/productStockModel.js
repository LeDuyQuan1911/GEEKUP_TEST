module.exports = (sequelize, DataTypes) => {
  const ProductStock = sequelize.define('ProductStock', {
    store_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'product_stocks',
    timestamps: false
  });

  ProductStock.associate = (models) => {
    ProductStock.belongsTo(models.Product, { foreignKey: 'product_id' });
    ProductStock.belongsTo(models.Store, { foreignKey: 'store_id' });
  };

  return ProductStock;
};
