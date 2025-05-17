module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    order_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_price: DataTypes.INTEGER
  }, {
    tableName: 'orders',
    timestamps: false
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'user_id' });
    Order.belongsTo(models.Address, { foreignKey: 'address_id' });
    Order.belongsTo(models.Store, { foreignKey: 'store_id' });
    Order.hasMany(models.OrderItem, { foreignKey: 'order_id' });
    Order.hasMany(models.OrderVoucher, { foreignKey: 'order_id' });
  };

  return Order;
};
