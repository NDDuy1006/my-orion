import Image from 'next/image';

interface GuestTypesProps {
    value: number;
    handleIncrease: (mode: string) => void;
    handleDescrease: (mode: string) => void;
    guestTitle: string;
    description?: string;
    disabledUp?: boolean;
    disabledDown?: boolean;
    mode: string;
}

const GuestTypes: React.FC<GuestTypesProps> = ({
    guestTitle,
    description,
    value,
    disabledUp,
    disabledDown,
    mode,
    handleIncrease,
    handleDescrease,
}) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <p className="text-Main">{guestTitle}</p>
                <p className="text-Main text-[12px] font-light">{description}</p>
            </div>
            <div className="flex items-center justify-end">
                <p className="flex items-center justify-center w-8 h-8 border border-[#B9C0C5] rounded">
                    {value}
                </p>
                <div className="ml-2 flex flex-col">
                    <button
                        disabled={disabledUp}
                        onClick={() => handleIncrease(mode)}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="relative w-4 h-4">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={require('@/assets/icons/icon_chevron-up.svg')}
                            />
                        </div>
                    </button>
                    <button
                        disabled={disabledDown}
                        onClick={() => handleDescrease(mode)}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="relative w-4 h-4">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={require('@/assets/icons/icon_chevron-down.svg')}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestTypes;
