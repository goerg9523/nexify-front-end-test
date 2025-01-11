import React from 'react'
import Add from './buttons/add'
import Save from './buttons/save'
import Update from './buttons/update'
import Delete from './buttons/delete'
import styles from './buttons.module.css'

export default function Buttons() {
  return (
    <div className={styles['top-bt']}>
      <Add />
      <Save />
      <Update />
      <Delete />
    </div>
  )
}
