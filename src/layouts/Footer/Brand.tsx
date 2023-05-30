import { Wrapper } from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Brand() {
  return (
    <Wrapper className={clsx(`pt-8 flex items-center justify-center`, styles.borderFooter)}>
      <Link href={'/'} className="relative inline-block h-8 lg:h-11 w-[130px] lg:w-[160px]">
        <Image
          src={require('@/assets/logos/FooterLogo.png')}
          alt={'logo'}
          width={0}
          height={0}
          className="w-full"
          unoptimized
        />
      </Link>
    </Wrapper>
  );
}
