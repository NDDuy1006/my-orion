import Image from 'next/image';
import Link from 'next/link';

interface BrandProps {
  logo: string;
}

export default function Brand({ logo }: BrandProps) {
  return (
    <Link href={'/'} className="inline-block h-8 lg:h-11 w-[130px] lg:w-12 lg:mac-w-[160px]">
      <div className="relative w-full">
        <Image
          src={require('public/images/pics/logo.png')}
          alt={'logo'}
          width={0}
          height={0}
          unoptimized
        />
      </div>
    </Link>
  );
}
