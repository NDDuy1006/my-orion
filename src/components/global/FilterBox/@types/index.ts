export interface FilterBoxData {
    label: string ;
    value: string ;
    icon?: string | React.ReactNode | React.ReactElement;
}

export default interface FilterBoxProps {
    className?: string;
    title?: string;
    data: FilterBoxData[];
    onClick?: (value: any[]) => void;
};