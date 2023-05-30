export interface FilterBoxData {
    label: string | React.ReactNode;
    value: string ;
    icon?: string | React.ReactNode | React.ReactElement;
}

export default interface FilterBoxProps {
    className?: string;
    title?: string;
    data: FilterBoxData[];
    onClick?: (value: string[]) => void;
};