import { ArrowLeftIcon, ChevronRightIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';

export enum ButtonVariant {
  OUTLINED = 'outlined',
  SMALL = 'small',
  LARGE = 'large',
  TAGS = 'tag',
  REDIRECT = 'redirect',
  FILTER = 'filter',
  TEXT = 'text',
}

export const btnVariantClassName: { [name in ButtonVariant]: string } = {
  [ButtonVariant.OUTLINED]: 'btn btnOutline',
  [ButtonVariant.SMALL]: 'btn btnSmall',
  [ButtonVariant.LARGE]: 'btn btnLarge',
  [ButtonVariant.TAGS]: 'btn btnTag',
  [ButtonVariant.REDIRECT]: 'btn btnRedirect',
  [ButtonVariant.FILTER]: 'btn btnFilter',
  [ButtonVariant.TEXT]: 'btn btnText',
};

interface ButtonProps {
  url?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  btnText: string;
  width?: string;
  variant: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

export function Button({ url, type, btnText, width, variant, className, onClick }: ButtonProps) {
  return (
    <>
      {url ? (
        <Link
          href={url}
          className={clsx(
            `flex flex-row flex-nowrap items-center`,
            className,
            width,
            btnVariantClassName[variant]
          )}
        >
          {variant === ButtonVariant.REDIRECT ? <ArrowLeftIcon className="h-4 w-4" /> : null}
          <span className="truncate">{btnText}</span>
          {variant === ButtonVariant.LARGE ? <ChevronRightIcon className="h-5 w-5" /> : null}
          {variant === ButtonVariant.TEXT ? <ArrowSmallRightIcon className="h-5 w-5" /> : null}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={clsx(
            `flex flex-row flex-nowrap items-center`,
            className,
            width,
            btnVariantClassName[variant]
          )}
        >
          {variant === ButtonVariant.REDIRECT ? <ArrowLeftIcon className="h-4 w-4" /> : null}
          <span className="truncate">{btnText}</span>
          {variant === ButtonVariant.LARGE ? <ChevronRightIcon className="h-5 w-5" /> : null}
          {variant === ButtonVariant.FILTER ? <FunnelIcon className="h-5 w-5" /> : null}
        </button>
      )}
    </>
  );
}
