import React, { useState, useEffect } from 'react'
import '../../styles/burger.css'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  const [stack, setStack] = useState([])
  const [hasBuns, setHasBuns] = useState(false)

	useEffect(() => {
		setHasBuns(stack.filter(el => el.type === 'bun'))
	}, [stack])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} stack={stack} addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} hasBuns={hasBuns} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop