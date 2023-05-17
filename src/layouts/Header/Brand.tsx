import Image from 'next/image';
import Link from 'next/link';

interface BrandProps {
  logo: string;
}

export default function Brand({ logo }: BrandProps) {
  return (
    <Link href={'/'} className="inline-block w-32">
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
