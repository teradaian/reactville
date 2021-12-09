import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {

	const ingredientStack = props.ingredients.map((ingredient, idx) => (
		props.hasBuns && ingredient.type === 'bun' ? 
		<Ingredient list={true} disabled={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
		:
		<Ingredient list={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
	))
	
	return (
		<ul>
			{ingredientStack}
		</ul>
	)
}

export default IngredientList