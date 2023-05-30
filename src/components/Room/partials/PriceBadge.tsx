import { HTMLAttributes } from 'react';
import styles from '../Room.module.scss';
import clsx from 'clsx';

const PriceBadge = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={clsx(styles['price-badge'], props.className)}></div>;
};

export default PriceBadge;
