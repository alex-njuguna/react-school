const Cart = () => {
  const cart_items = ['headphones', 'hoodie', 'server', 'fan']

  return (
    <>
      <h1>Cart</h1>
      {
        (cart_items.length > 0) ? <h2>You have {cart_items.length} in your cart</h2> : <h2></h2>
        // cart_items.length > 0 && <h2>You have {cart_items.length} in your cart</h2>

      }
      <ul>
      <h4>Products</h4>
      {
        cart_items.map((item) => (
          <li key={Math.random() * 10}>
            {item}
          </li>
        ))
      }
      </ul>
      
    </>
  )
}

const App = () => {
  return (
  <>
    <Cart/>
  </>
  )
}

export default App
