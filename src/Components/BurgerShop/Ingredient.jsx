import React from "react"

const Ingredient = (props) => {
	return (
		<div style={{ background: props.ingredient.color }}>
			{props.ingredient.name}
			{props.list ?
				<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
				:
				<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
			}
		</div>
	)
}

export default Ingredient