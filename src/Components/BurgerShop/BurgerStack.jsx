import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {

  const bunBracket = props.hasBuns && props.ingredients.map((ingredient, idx) => (
    ingredient.type === 'bun' &&
    <Ingredient key={`bun-${idx}`} ingredient={ingredient} removeFromBurger={props.removeBuns} />
  ))

  const fillingStack = props.ingredients.filter(el => el.type !== 'bun').map((ingredient, idx) => (
    <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={props.removeFromBurger} />
  )).reverse()

  const balancedBurger = [bunBracket || "", ...fillingStack, bunBracket || ""]

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