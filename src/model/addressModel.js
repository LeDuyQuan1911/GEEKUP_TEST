module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    user_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    commune: DataTypes.STRING,
    address_detail: DataTypes.STRING,
    housing_type: DataTypes.STRING
  }, {
    tableName: 'addresses',
    timestamps: false
  });

  Address.associate = (models) => {
    Address.belongsTo(models.User, { foreignKey: 'user_id' });
    Address.hasMany(models.Order, { foreignKey: 'address_id' });
  };

  return Address;
};
