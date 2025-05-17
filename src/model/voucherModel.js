module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    code: DataTypes.STRING,
    discount_percent: DataTypes.INTEGER,
    valid_from: DataTypes.DATE,
    valid_to: DataTypes.DATE
  }, {
    tableName: 'vouchers',
    timestamps: false
  });

  Voucher.associate = (models) => {
    Voucher.hasMany(models.OrderVoucher, { foreignKey: 'voucher_id' });
  };

  return Voucher;
};
