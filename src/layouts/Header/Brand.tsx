import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
    return (
        <Link href={'/'} className="inline-block w-32">
            <div className="relative w-full">
                <Image
                    src={require('@/assets/logos/HeaderLogo.png')}
                    alt={'logo'}
                    width={0}
                    height={0}
                    unoptimized
                />
            </div>
        </Link>
    );
}
