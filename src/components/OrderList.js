
import React from 'react';
import OrderItem from './OrderItem';

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <div>
      {['table1', 'table2', 'table3'].map((table, idx) => (
        <div key={table}>
          <h3>{`Table ${idx + 1}`}</h3>
          <ul id={table}>
            {orders[table].map(order => (
              <OrderItem key={order.orderId} order={order} table={table} deleteOrder={deleteOrder} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
