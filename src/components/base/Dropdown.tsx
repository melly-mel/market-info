import { SelectField } from '@aws-amplify/ui-react';
import './Dropdown.css'

interface DropdownProp {
    label: string;
    selections: any[];
    valueKey: string;
    displayKey: string;
    placeHolder?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export const Dropdown = ({ label, selections, valueKey, displayKey, placeHolder, value, onChange }: DropdownProp) => {
    return (
        <SelectField label={label} placeholder={placeHolder} value={value} onChange={onChange}>
            {selections.map((selection, index) =>
                <option key={index} value={selection[valueKey]}>{selection[displayKey]}</option>
            )}
        </SelectField>
    )
}
