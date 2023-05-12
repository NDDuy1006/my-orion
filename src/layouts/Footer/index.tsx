import Brand from './Brand';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper } from '@/components/shared';
import { FooterContactProps, FooterProps, PolicyFooterProps, SocialsFooterProps } from '@/types';

export default function Footer({ logo, intro, contact, socials, copyright, policy }: FooterProps) {
  return (
    <footer className="w-full border-t border-neutralDividers">
      <div className="bg-neutralSurface">
        <Wrapper>
          <div className='flex flex-col gap-4'>
            <Brand logo={logo} />

            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 lg:gap-4">
                <div className="title1 text-neutralPrimary">{intro}</div>
                <div className="contact w-fit flex flex-col gap-1 lg:gap-2">
                  {contact &&
                    contact.map((item: FooterContactProps, idx: number) => {
                      return (
                        <div className="contact-item" key={idx}>
                          <a
                            href={`${item.type === 'email' ? 'mailto:' : item.type === 'phone' ? 'tel:' : ''
                              }${item.link}`}
                            target={'_blank'}
                            className="flex gap-2 flex-row flex-nowrap items-center"
                          >
                            <Image
                              className="w-6 h-6 self-start"
                              src={item.icon}
                              width={0}
                              height={0}
                              unoptimized
                              alt="dision-location"
                            />
                            {typeof item.text === 'object' ? (
                              <div className="flex gap-3 lg:gap-2">
                                {item.text.map((item, index) => (
                                  <span
                                    key={index}
                                    className="body2 text-neutralPrimary hover:text-primaryMain"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="body2 text-neutralPrimary hover:text-primaryMain">
                                {item.text}
                              </span>
                            )}
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-8">
                <div className="col-span-1 hidden lg:block"></div>
                <div className="footer-right-connect col-span-2 lg:col-span-1 flex flex-col gap-2 lg:gap-4">
                  <h3 className="text-neutralPrimary title1">Connect us</h3>
                  <div className='h-full flex flex-col justify-between items-stretch gap-2 lg:gap-4'>
                    <div className="flex flex-row flex-nowrap">
                      {socials.map((item: SocialsFooterProps, idx: number) => {
                        return (
                          <div key={idx} className="mr-3 lg:mr-4">
                            <a
                              href={item.link}
                              target={'_blank'}
                              className="bg-neutralPrimary hover:text-primaryMain"
                            >
                              <div className="relative w-6 h-6">
                                <Image
                                  src={item.logo}
                                  className="w-full h-full"
                                  alt={'logo'}
                                  width={0}
                                  height={0}
                                />
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-row gap-8">
                      {policy.map((item: PolicyFooterProps, idx: number) => {
                        return (
                          <Link key={idx} href={item.link}>
                            <p className="body2 text-neutralPrimary hover:text-primaryMain">
                              {item.text}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Wrapper>
      </div>
      <div className="copyright bg-neutralPrimary">
        <p className="container max-[767px]:max-w-full body2 text-neutralBackground text-center py-3">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
