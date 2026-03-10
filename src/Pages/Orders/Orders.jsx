import React, { useContext, useEffect, useState } from 'react'
import Classes from './Orders.module.css'
import LayOut from "../../components/Layout/Layout"
import { db } from "../../Utility/firebase"
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'

import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore"

function Orders() {
  React.useEffect(() => {
    document.title = "Your Orders";
  }, []);

  const [{ user }] = useContext(DataContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (!user) {
      setOrders([])
      return
    }

    const ordersRef = collection(db, "users", user.uid, "orders")
    const q = query(ordersRef, orderBy("created", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })

    return () => unsubscribe()
  }, [user])

  return (
    <LayOut>
      <section className={Classes.container}>
        <div className={Classes.Orders_container}>
          <h2>Your Orders</h2>

          <div>
            {orders.length === 0 && (
              <div style={{ padding: "20px" }}>No orders yet.</div>
            )}

            {orders.map((eachOrder) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Order ID: {eachOrder.id}</p>

                {eachOrder.data?.basket?.map((order) => (
                  <ProductCard
                    key={order.id}
                    flex={true}
                    product={order}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>
    </LayOut>
  )
}

export default Orders
