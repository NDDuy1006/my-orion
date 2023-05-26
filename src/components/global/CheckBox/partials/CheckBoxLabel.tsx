import React, { useEffect, useMemo, useState } from 'react';
import { CheckBoxLabelProps, HandleNameChangeInterface } from '../@types';
import styles from '../Component.module.scss';
import clsx from 'clsx';
import { CheckSquareFilled } from '@ant-design/icons';

const CheckBoxLabel = ({ label, value, onChange, onCheck }: CheckBoxLabelProps) => {
    const [checked, setChecked] = useState<Boolean>(false);

    const handleChecked = (value: HandleNameChangeInterface) => {
        setChecked((current) => !current);
        onChange && onChange({ value: value.target.value, checked: value.target.checked });
    };

    useEffect(() => {
        if (onCheck === value) {
            setChecked(true);
        }
    }, [onCheck]);

    return (
        <div className={styles.checkBox}>
            <label className="flex items-center cursor-pointer">
                <div className=" flex items-center">
                    <span className={styles.boxChecked}>
                        {checked && (
                            <CheckSquareFilled
                                className={clsx(styles.IconChecked, 'inline-block')}
                            />
                        )}
                    </span>
                    <input
                        value={value}
                        onChange={(e) => handleChecked(e)}
                        className={clsx(styles.inputCheckBox)}
                        type="checkbox"
                    />
                </div>
                <span className="text-[16px] leading-4 ml-2">{label}</span>
            </label>
        </div>
    );
};

export default CheckBoxLabel;
