import { HTMLInputTypeAttribute } from "react";

export interface CheckBoxLabelProps{
    label?: String;
    value: HTMLInputTypeAttribute;
    onChange?: (value: {value: string, checked: Boolean}) => void;
    onCheck?: string;
}

export interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }

export default interface CheckBoxProps {
  cb?: (value: string[]) => void;
  data? : {label: string, value: string | number}[];
};