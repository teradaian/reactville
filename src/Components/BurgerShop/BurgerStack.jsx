import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {

  const bun = props.hasBuns ? props.ingredients.filter(el => el.type === 'bun').map((ingredient, idx) => (
    <Ingredient key={`bun-${idx}`} ingredient={ingredient} removeFromBurger={props.removeBuns} />
  )) : ""

  const fillings = props.ingredients.map((ingredient, idx) => (
    ingredient.type !== 'bun' &&
    <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />
  )).reverse()

  const balancedBurger = [bun, ...fillings, bun]

  return (
    <ul className="burger-stack">
      {props.ingredients.length ?
        balancedBurger
        :
        <div>
          No Ingredients
        </div>
      }
    </ul>
  )
}

export default BurgerStack