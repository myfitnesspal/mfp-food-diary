import React from 'react'
import styles from './food-entry.module.css'

function FoodEntry({name, description, descriptionVisible, onDelete}) {
  return (
    <React.Fragment>
      <div className={styles.foodEntryWrapper}>
        <button className={styles.foodName}>{name}</button>
        <button className={styles.deleteButton} onClick={onDelete}>-</button>
      </div>   
      <div className={styles.foodDescription}>
        {descriptionVisible ? <p>Description: {description}</p> : null}
      </div>
    </React.Fragment>
  )
}

export default FoodEntry