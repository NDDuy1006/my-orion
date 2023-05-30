import React, { Fragment } from 'react'
import styles from './FilterBox.module.scss'
import FilterBoxProps from './@types'
import { MoutainIcon } from '@/library'
import clsx from 'clsx'
import {defaultTheme} from '@/config'




const FilterBox = ({data, className}: FilterBoxProps) => {
  return (
    <section style={{background: defaultTheme.components?.Layout?.colorBgHeader}} className={clsx('my-2 p-6',className)}>
      <div className='flex justify-between items-center p-3 border border-solid border-LightGrey'>
        <p>Snow & Mountain</p>
        <MoutainIcon />
      </div>
    </section>
  )
}

export default FilterBox