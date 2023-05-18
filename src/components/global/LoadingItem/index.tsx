import React from 'react'
import styles from './LoadingItem.module.scss'
import LoadingItemProps from './@types'
import clsx from 'clsx'


const LoadingItem = (props: LoadingItemProps) => {
  return (
    <section>
      {<div className={clsx('flex gap-6 mb-4', styles.resultItem)}>
        <div className={clsx('w-56 h-56 rounded-xl bg-lineGray overflow-hidden', styles.loadingLine)}></div>


        <div className='flex flex-col justify-around w-2/3'>

          <div className={clsx('h-[14px] w-full bg-lineGray mb-2', styles.loadingLine)}></div>

          <h1 className={clsx('h-[30px] w-full bg-lineGray mb-2', styles.loadingLine)}></h1>

          <div className={clsx('h-[10px] bg-lineGray w-full mb-6', styles.loadingLine)}></div>

          <div>
            <div className={clsx('h-[14px] w-full bg-lineGray mb-2',styles.loadingLine)}></div>
            <div className={clsx('h-[14px] w-full bg-lineGray mb-2', styles.loadingLine)}></div>
            <div className={clsx('h-[14px] w-full bg-lineGray mb-2', styles.loadingLine)}></div>
          </div>

          <div className={clsx('h-[20px] w-full bg-lineGray mt-2', styles.loadingLine)}></div>
        </div>
      </div>}
    </section>
  )
}

export default LoadingItem