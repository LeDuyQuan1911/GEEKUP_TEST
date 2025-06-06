module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false
  });

  Category.associate = (models) => {
    Category.hasMany(models.Product, { foreignKey: 'category_id' });
  };

  return Category;
};
