import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {

	const [bottles, setBottles] = useState([]);
	const [cart, setCart] = useState([]);



	useEffect(()=>{
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/refs/heads/main/public/bottles.json')
			.then(res => res.json())
			.then(data => setBottles(data))
	}, []);

	const handleAddToCart = bottle =>{
		// console.log(bottle);
		const newCart = [...cart, bottle];
		setCart(newCart);
	}


	return (
		<div>
			<h2 className="font-semibold text-center text-2xl my-2">Bottles Available: {bottles.length}</h2>
			<button className="font-semibold block mx-auto text-xl rounded-lg btn btn-warning mb-2 justify-center">Cart: {cart.length}</button>

			<div className="grid grid-cols-3 gap-2">
				{
					bottles.map(bottle => <Bottle 
						key={bottle.id} 
						bottle={bottle}
						handleAddToCart={handleAddToCart}
						></Bottle>)
				}
			</div>
		</div>
	);
};

export default Bottles;