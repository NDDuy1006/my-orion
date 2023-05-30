import { LayoutProps } from '@/types/layoutType';
import clsx from 'clsx';

export const Wrapper = ({ children, className }: LayoutProps) => {
  return <section className={clsx(`relative container py-8`, className)}>{children}</section>;
};
