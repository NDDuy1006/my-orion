export default interface BookingStepProps {
    data:{
        step: number;
        stepName: string;
    }[];
    className?: string;
    activeStep: number;
};