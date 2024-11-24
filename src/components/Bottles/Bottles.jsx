import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import  { addToLS, getStoredCart, removeFromLS } from '../utils/utils'
import Cart from "../Cart/Cart";


const Bottles = () => {

	const [bottles, setBottles] = useState([]);
	const [cart, setCart] = useState([]);



	useEffect(()=>{
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/refs/heads/main/public/bottles.json')
			.then(res => res.json())
			.then(data => setBottles(data))
	}, []);

	//load cart from local storage

	useEffect(()=>{
		console.log('called the useEffect' , bottles.length);

		if(bottles.length){
			const storedCart = getStoredCart();
			console.log(storedCart, bottles);

			const savedCart = [];
			for(const id of storedCart){
				console.log(id);
				const bottle = bottles.find(bottle => bottle.id === id);
				
				if(bottle){
					savedCart.push(bottle);
				}
			}
			console.log('saved cart', savedCart);
			setCart(savedCart);
		}
	}, [bottles])

	const handleAddToCart = bottle =>{
		// console.log(bottle);
		const newCart = [...cart, bottle];
		setCart(newCart);
		addToLS(bottle.id)
	}

	const handleRemoveFromCart = (id) =>{
		//visual cart remove

		const remainingCart = cart.filter(bottle => bottle.id !== id);
		setCart(remainingCart)
		//remove from ls

		removeFromLS(id);
	}


	return (
		<div>
			<h2 className="font-semibold text-center text-2xl my-2">Bottles Available: {bottles.length}</h2>
			
			<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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