export default interface BoxContentProps {
    onClick?: (value: any) => void;
    className?: string;
    label?: string  ;
    labelStyle?: string;
    icon?: React.ReactNode | React.ReactElement;
    width?: string;
    height?: string;
    style?: string;
};