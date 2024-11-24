import PropTypes from "prop-types";


const Bottle = ({bottle, handleAddToCart}) => {

	const {name, img, price} = bottle;
	return (
		<div className="border border-green-600 rounded-lg shadow-lg justify-center items-center text-center py-4">
			<h3 className="font-semibold">Name: {name}</h3>
			<img className="w-28 rounded-lg mx-auto py-2" src={img} alt="" />
			<p className="font-semibold">Price: ${price}</p>
			<button onClick={()=> handleAddToCart(bottle)} className="btn btn-info mt-2">Purchase</button>
		</div>
	);
};

Bottle.propTypes = {
	bottle: PropTypes.object.isRequired,
	handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;