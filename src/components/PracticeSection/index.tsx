import { Dropdown } from '../base/Dropdown';
import { Flex, TextField, View } from '@aws-amplify/ui-react';
import { usePracticeReducer } from './hooks';
import { setSelectedId } from '../base/actions';

interface PracticeSectionProps {
    selectedMarket: string;
}

export const PracticeSection: React.VFC<PracticeSectionProps> = ({selectedMarket}) => {
    const [practices, dispatchPracticeAction] = usePracticeReducer(selectedMarket);
    const selectedPractice = practices.items.find((item) => item.id === practices.selectedId)
    return (
        <View>
            <Dropdown
                label='Practice'
                placeHolder='Select a practice'
                selections={practices.items}
                valueKey='id'
                displayKey='name' 
                value={practices.selectedId}
                onChange={(e) => setSelectedId(dispatchPracticeAction, e.target.value)}/>
            <Flex>
                <TextField label="Phone Number" value={selectedPractice?.phone_number ?? 'N/A'} isDisabled/>
                <TextField label="FaxNumber" value={selectedPractice?.fax ?? 'N/A'} isDisabled/>
            </Flex>
            <Flex>
                <TextField label="Website" value={selectedPractice?.website ?? 'N/A'} isDisabled/>
                <TextField label="Address" value={selectedPractice?.address ?? 'N/A'} isDisabled/>
            </Flex>
            <TextField className="practice-textfield" label="Practice Location Description" value={selectedPractice?.nearby_landmarks ?? 'N/A'} isMultiline={true} isDisabled/>
        </View>
    );
}