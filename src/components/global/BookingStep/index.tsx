import React, { Fragment } from 'react'
import styles from './BookingStep.module.scss'
import BookingStepProps from './@types'
import clsx from 'clsx'

const stepData = [
  {
    step: 1,
    stepName: 'Room and rate'
  },
  {
    step: 2,
    stepName: 'Extra Services'
  },
  {
    step: 3,
    stepName: 'Personal Information'
  },
  {
    step: 4,
    stepName: 'Payment'
  },
  {
    step: 5,
    stepName: 'Comfirmation'
  }
]

const BookingStep = (props: BookingStepProps) => {
  return (
    <section className='flex justify-center relative py-10'>

      {
        stepData.map((ele: any, idx: number) => {
          return (
            <div className={clsx(
              styles.stepItem,
              idx < 1 && styles.stepItemActive
            )} key={idx}>
              <div className={styles.stepBox}>
                <h6 className={clsx(
                  styles.stepText,
                  idx <= 1 && styles.stepTextActive,
                )}>{ele.step}</h6>
                <p className='mt-2'>{ele.stepName}</p>
              </div>
            </div>
          )
        })
      }

    </section>
  )
}

export default BookingStep