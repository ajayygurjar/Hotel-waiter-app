
import React from 'react';

const OrderItem = ({ order, table, deleteOrder }) => {
  return (
    <li>
      {`${order.dish} - ₹${order.price}`}
      <button onClick={() => deleteOrder(table, order.orderId)}>Delete</button>
    </li>
  );
};

export default OrderItem;
