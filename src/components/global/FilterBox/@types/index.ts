export interface FilterBoxData {
    label: string | React.ReactNode;
    value?: string | number;
    icon?: string | React.ReactNode | React.ReactElement;
}

export default interface FilterBoxProps {
    className?: string;
    data: FilterBoxData[]
};