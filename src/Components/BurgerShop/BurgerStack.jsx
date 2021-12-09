import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {

  const burgerStack = props.ingredients.map((ingredient, idx) => (
    <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />
  )).reverse()

  const balancedBuns = array => {
		if (!props.hasBuns) return
		const bun = array.find(el => el.props.ingredient.type === 'bun')
		const fillings = array.filter(el => el.props.ingredient.type !== 'bun')
	}

	balancedBuns(burgerStack)

  return (
    <ul className="burger-stack">
      {props.ingredients.length ?
        burgerStack
        :
        <div>
          No Ingredients
        </div>
      }
    </ul>
  )
}

export default BurgerStack