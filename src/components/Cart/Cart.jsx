import PropTypes from "prop-types";


const Cart = ({cart, handleRemoveFromCart}) => {
	return (
		<div>
			<button className="font-semibold block mx-auto text-xl rounded-lg btn btn-warning mb-2 justify-center">Cart: {cart.length}</button>
			<div className="grid grid-cols-12">
				{cart.map(bottle => <div  key={bottle.id}>
					<img className="w-20 rounded-lg gap-2 my-2" src={bottle.img}></img>
					<button onClick={()=> handleRemoveFromCart(bottle.id)} className="btn btn-success">Remove</button>
				</div>)}
			</div>
		</div>
	);
};

Cart.propTypes = {
	cart: PropTypes.array.isRequired,
	handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;