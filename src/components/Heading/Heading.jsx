import React from 'react'
import styles from "./Heading.module.scss"

const Heading = ({text}) => {
  return (
    <div><h1 className={styles.heading}>{text}</h1></div>
  )
}

export default Heading