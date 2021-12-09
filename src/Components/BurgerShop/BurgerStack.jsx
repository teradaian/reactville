import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = ({ ingredients, hasBuns, removeBuns, removeFromBurger }) => {

  const bun = hasBuns ? ingredients.filter(el => el.type === 'bun').map((ingredient, idx) => (
    <Ingredient key={`bun-${idx}`} ingredient={ingredient} removeFromBurger={removeBuns} />
  )) : ""

  const fillings = ingredients.map((ingredient, idx) => (
    ingredient.type !== 'bun' &&
    <Ingredient key={idx} idx={idx} ingredient={ingredient} removeFromBurger={removeFromBurger} />
  )).reverse()

  const balancedBurger = [bun, ...fillings, bun]

  return (
    <ul className="burger-stack">
      {ingredients.length ?
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