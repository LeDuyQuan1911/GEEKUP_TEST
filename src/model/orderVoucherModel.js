module.exports = (sequelize, DataTypes) => {
  const OrderVoucher = sequelize.define('OrderVoucher', {
    order_id: DataTypes.INTEGER,
    voucher_id: DataTypes.INTEGER
  }, {
    tableName: 'order_vouchers',
    timestamps: false
  });

  OrderVoucher.associate = (models) => {
    OrderVoucher.belongsTo(models.Order, { foreignKey: 'order_id' });
    OrderVoucher.belongsTo(models.Voucher, { foreignKey: 'voucher_id' });
  };

  return OrderVoucher;
};
