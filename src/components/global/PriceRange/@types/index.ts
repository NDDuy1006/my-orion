export default interface PriceRangeProps {
    value: {
        min: number;
        max: number;
    },
    className?: string;
    onChange?: (value: {min: number, max: number}) => void;
};