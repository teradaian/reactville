import React, { useEffect, useState } from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(props.stack.filter(el => el.type === 'bun'))
	}, [props.stack])

	const ingredientStack = props.ingredients.map((ingredient, idx) => (
		hasBuns && ingredient.type === 'bun' ? 
		<Ingredient list={true} disabled={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
		:
		<Ingredient list={true} key={idx} ingredient={ingredient} addToBurger={props.addToBurger} />
	))

	const balancedBuns = ingredientStack()
	
	return (
		<ul>
			{ingredientStack}
		</ul>
	)
}

export default IngredientList