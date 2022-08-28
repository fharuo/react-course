import React from 'react';
import styles from './CarDetails.module.css';

const CarDetails = ({car}) => {
  return (
    <div className={styles.card}>
        <h2>{car.brand}</h2>
        <ul>            
            <li>color: {car.color}</li>
            <li>km: {car.km}</li>
        </ul>
    </div>
  )
}

export default CarDetails;