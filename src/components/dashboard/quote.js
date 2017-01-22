import React from 'react'
import styles from './quote.less'

function Quote (props) {
  const { name, content, title, avatar } = props
  return (
    <div className={styles.quote}>
      <div className={styles.inner}>
        {content}
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Quote
