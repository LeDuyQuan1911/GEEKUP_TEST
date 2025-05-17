module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER
  }, {
    tableName: 'order_items',
    timestamps: false
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { foreignKey: 'order_id' });
    OrderItem.belongsTo(models.Product, { foreignKey: 'product_id' });
  };

  return OrderItem;
};
