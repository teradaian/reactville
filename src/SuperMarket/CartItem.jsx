const CartItem = (props) => {


	return (
		<div className="product-card">
			{props.item.name} {props.item.price}
			<p>Quantity: {props.item.quantity}</p>
			<button onClick={() => props.removeFromCart(props.item)}>Remove From Cart</button>
		</div>
	)
}

export default CartItem