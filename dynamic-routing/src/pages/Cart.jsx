import { useContext } from "react"
import { AppStore } from "../context/ContextApi"
import CartCard from "../components/CartCard";

const Cart = () => {

    const {cartData} = useContext(AppStore)
    console.log(cartData);
    

  return (
    <div>
      {cartData.length > 0 ? (
        cartData.map((cartItem) => <CartCard key={cartItem.id} product={cartItem}/>)
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  )
}

export default Cart