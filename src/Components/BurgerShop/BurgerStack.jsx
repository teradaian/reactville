import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {

  const burgerStack = props.ingredients.map((ingredient, idx) => (
    <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />
  )).reverse()

  const balancedBuns = array => {
		if (!props.hasBuns) return
		const bun = array.indexOf(el => el.type === 'bun')
		console.log(bun)
		const fillings = array.filter(el => el.type !== 'bun')
		console.log(fillings)
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