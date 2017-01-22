import React from 'react'
import styles from './weather.less'

function Weather (props) {
  const {city, icon, dateTime, temperature, name} = props
  return <div className={styles.weather}>
    <div className={styles.left}>
      <div className={styles.icon} style={{
        backgroundImage: `url(${icon})`
      }} />
      <p>{name}</p>
    </div>
    <div className={styles.right}>
      <h1 className={styles.temperature}>{26 + '°'}</h1>
      <p className={styles.description}>مسقط</p>
    </div>
  </div>
}

export default Weather
