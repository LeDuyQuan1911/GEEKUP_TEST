const {
  Order,
  OrderItem,
  OrderVoucher,
  sequelize
} = require('../model');

exports.createOrder = async (req, res) => {
  const { user_id, store_id, address_id, items, voucher_ids, total_price } = req.body;

  const transaction = await sequelize.transaction();

  try {
    // 1. Tạo đơn hàng
    const order = await Order.create({
      user_id,
      store_id,
      address_id,
      total_price
    }, { transaction });

    // 2. Tạo các item
    for (const item of items) {
      await OrderItem.create({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        unit_price: item.unit_price
      }, { transaction });
    }

    // 3. Gán voucher nếu có
    if (voucher_ids && voucher_ids.length > 0) {
      for (const vid of voucher_ids) {
        await OrderVoucher.create({
          order_id: order.id,
          voucher_id: vid
        }, { transaction });
      }
    }

    await transaction.commit();
    res.status(201).json({ order_id: order.id, status: 'created' });

  } catch (err) {
    await transaction.rollback();
    res.status(500).json({ error: err.message });
  }
};


// Ở đây em có thể dùng nodemailer để gửi email xác nhận đơn hàng cho người dùng ạ
exports.confirmOrder = async (req, res) => {
  const orderId = req.params.id;
  res.json({ message: `Order ${orderId} confirmed.` });
};
