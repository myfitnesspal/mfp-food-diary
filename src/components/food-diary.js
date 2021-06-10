import React, { useState } from 'react'
import FoodEntry from './food-entry'
import styles from './food-diary.module.css'

function FoodDiary() {
  const [foods, setFoods] = useState([
    {name: 'muffin', description: 'a tasty treat!', descriptionVisible: false, meal: 'breakfast', id: Math.random()},
    {name: 'sandwich', description: 'peanut butter and jelly', descriptionVisible: false, meal: 'lunch', id: Math.random()},
    {name: 'soup', description: 'low cal and tasty on a winter day', descriptionVisible: false, meal: 'dinner', id: Math.random()}
  ])

  const [foodInput, setFoodInput] = useState('')

  const [descriptionInput, setDescriptionInput] = useState('')

  const [mealDropdown, setMealDropdown] = useState('')

  const handleFoodInputChange = (event) => {
    setFoodInput(event.target.value)
  }

  const handleDescriptionInputChange = (event) => {
    setDescriptionInput(event.target.value)
  }

  const handleMealDropdownChange = (event) => {
    setMealDropdown(event.target.value)
  }

  const toggleDescription = (id) => {
    const alteredFoods = [...foods]
    const foodSelected = alteredFoods.filter(food => food.id === id)[0]
    !foodSelected.descriptionVisible ? foodSelected.descriptionVisible = true : foodSelected.descriptionVisible = false

    setFoods(alteredFoods)
  }

  const deleteFood = (id) => {
    const newFoods = foods.filter(food => food.id !== id)
    setFoods(newFoods)
  }

  const addFood = () => {
    const newFood = {mame: foodInput, description: descriptionInput, meal: mealDropdown, id: Math.random()}
    const newFoods = foods.concat(newFood)
    setFoods(newFoods)
    clearForm()
  }

  const clearForm = () => {
    setFoodInput('')
    setDescriptionInput('')
    setMealDropdown('')
  }

  const renderFoodEntries = (meal) => {
    const mealFoods = foods.filter(food => food.meal === meal)
    
    return mealFoods.map(mealFood =>
      <FoodEntry 
        key={mealFood.id}  
        id={mealFood.id} 
        name={mealFood.name} 
        description={mealFood.description} 
        onDelete={deleteFood(mealFood.id)}
        toggleDescription={() => toggleDescription(mealFood.id)}
        descriptionVisible={mealFood.descriptionVisible}
      /> 
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Food Diary</h1>
        <h2>My Meals</h2> 
        <div className={styles.wrapper}>
          <h3>Breakfast</h3>
            {renderFoodEntries('breakfast')}
          <h3>Lunch</h3>
            {renderFoodEntries('lunch')}
          <h3>Dinner</h3>
            {renderFoodEntries('dinner')}
        </div>
        <h2>Add Foods</h2>
        <div className={[styles.wrapper, styles.addFoodsContainer].join(' ')}>
          <div>
            <h3>Food</h3>
            <input type='text' value={foodInput} onChange={handleFoodInputChange}/>
          </div>
          <div>
            <h3>Description</h3>
            <input type='text' value={descriptionInput} onChange={handleDescriptionInputChange}/>
          </div>
          <div>
            <h3>Meal</h3>
            <select value={mealDropdown} onChange={handleMealDropdownChange}>
              <option value=''>Choose Meal</option>
              <option value='lunch'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
            </select>
          </div>
          <button className={styles.addButton} onClick={addFood}>+</button>
        </div>
    </div>   
  )
}

export default FoodDiary
