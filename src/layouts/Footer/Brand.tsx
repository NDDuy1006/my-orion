import Image from 'next/image';
import Link from 'next/link';
export interface BrandProps {
  logo: string;
}
export default function Brand({ logo }: BrandProps) {
  return (
    <Link href={'/'} className="relative inline-block h-8 lg:h-11 w-[130px] lg:w-[160px]">
      <Image src={logo} alt={'logo'} width={0} height={0} className="w-full" unoptimized />
    </Link>
  );
}
