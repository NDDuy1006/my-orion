export interface BookingStepData {
        step: number;
        stepName: string;
}

export default interface BookingStepProps {
    data: BookingStepData[];
    className?: string;
    activeStep: number;
};