module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING
  }, {
    tableName: 'stores',
    timestamps: false
  });

  Store.associate = (models) => {
    Store.hasMany(models.Order, { foreignKey: 'store_id' });
    Store.hasMany(models.ProductStock, { foreignKey: 'store_id' });
  };

  return Store;
};
