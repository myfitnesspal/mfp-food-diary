import React from 'react'
import styles from './food-entry.module.css'
import PropTypes from 'prop-types'

function FoodEntry({name, description, descriptionVisible, onDelete}) {
  return (
    name ? 
    <React.Fragment>
      <div className={styles.foodEntryWrapper}>
        <button className={styles.foodName}>{name}</button>
        <button className={styles.deleteButton} onClick={onDelete}></button>
      </div>   
      <div className={styles.foodDescription}>
        {descriptionVisible ? <p>Description: {description}</p> : null}
      </div>
    </React.Fragment>
    : null
  )
}

FoodEntry.propTypes = {
  name: PropTypes.string.isRequired
}

export default FoodEntry