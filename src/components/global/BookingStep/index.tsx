import React, { Fragment, useState } from 'react'
import styles from './BookingStep.module.scss'
import BookingStepProps from './@types'
import clsx from 'clsx'



const BookingStep = ({data, activeStep, className}: BookingStepProps) => {


  return (
    <section className={clsx('flex justify-center relative py-10', className)}>

      {
        data.map((ele: any, idx: number) => {
          return (
            <div className={clsx(
              styles.stepItem,
              idx < activeStep - 1 && styles.stepItemActive
            )} key={idx}>
              <div className={styles.stepBox}>
                <h6 className={clsx(
                  styles.stepText,
                  idx <= activeStep - 1 && styles.stepTextActive,
                )}>{ele.step}</h6>
                <p>{ele.stepName}</p>
              </div>
            </div>
          )
        })
      }

    </section>
  )
}

export default BookingStep