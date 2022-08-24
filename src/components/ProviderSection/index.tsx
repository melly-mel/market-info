import { Flex, TextField, View } from '@aws-amplify/ui-react';
import { setSelectedId } from '../base/actions';
import { Dropdown } from '../base/Dropdown';
import { useProviderReducer } from './hooks';

interface ProviderSectionProps {
    selectedPractice: string;
}

export const ProviderSection: React.VFC<ProviderSectionProps> = ({selectedPractice: selectedPracticeId}) => {
    const [providers, dispatchProviderAction] = useProviderReducer(selectedPracticeId);
    return (
        <View>
            <Dropdown
                label='Provider'
                placeHolder='Select a provider'
                selections={providers.items}
                valueKey='id'
                displayKey='first_name'
                value={providers.selectedId}
                onChange={(e) => setSelectedId(dispatchProviderAction, e.target.value)}/>
            <Flex>
                <TextField label="Credential" value={"N/A"} isDisabled/>
                <TextField label="Languages Spoken" value={"N/A"} isDisabled/>
            </Flex>
            <Flex>
                <TextField label="Provider NPI" value={"N/A"} isDisabled/>
                <TextField label="Sex" value={"N/A"} isDisabled/>
            </Flex>
            <TextField label="Provider Background" value={"N/A"} isMultiline={true} isDisabled/>
        </View>
    );
}