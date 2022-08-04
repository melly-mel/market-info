import { SelectField } from '@aws-amplify/ui-react';
import './Dropdown.css'

interface DropdownProp {
    label: string;
    selections: { [key: string]: string }[];
    valueKey: string;
    displayKey: string;
};

export const Dropdown = ({ label, selections, valueKey, displayKey }: DropdownProp) => {
    return (
        <SelectField label={label}>
            {selections.map((selection, index) =>
                <option key={index} value={selection[valueKey]}>{selection[displayKey]}</option>
            )}
        </SelectField>
    )
}
