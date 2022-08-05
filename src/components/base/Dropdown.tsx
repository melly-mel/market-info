import { SelectField } from '@aws-amplify/ui-react';
import './Dropdown.css'

interface DropdownProp {
    label: string;
    selections: { [key: string]: string }[];
    valueKey: string;
    displayKey: string;
    placeHolder?: string;
};

export const Dropdown = ({ label, selections, valueKey, displayKey, placeHolder }: DropdownProp) => {
    return (
        <SelectField label={label} placeholder={placeHolder}>
            {selections.map((selection, index) =>
                <option key={index} value={selection[valueKey]}>{selection[displayKey]}</option>
            )}
        </SelectField>
    )
}
