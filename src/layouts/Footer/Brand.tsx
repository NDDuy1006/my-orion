import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <div className="py-6 flex items-center justify-center border-t border-[#0000001A]">
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
    </div>
  );
}
