import { useEffect, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { Practices } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Flex, TextField, View } from '@aws-amplify/ui-react';

export const PracticeSection = () => {
    const [practices, setPractices] = useState([]);
    const [practice, setPractice] = useState(null);
    useEffect(() => {
        async function fetchMarkets() {
            const practices = await DataStoreService.getAll(Practices);
            console.log(practices);
            setPractices(practices);
        }
        fetchMarkets();
    }, []);
    return (
        <View>
            <Dropdown label='Practice' placeHolder='Select a practice' selections={practices} valueKey='name' displayKey='name' />
            <Flex>
                <TextField label="Phone Number" value={"N/A"} isDisabled/>
                <TextField label="FaxNumber" value={"N/A"} isDisabled/>
            </Flex>
            <Flex>
                <TextField label="Website" value={"N/A"} isDisabled/>
                <TextField label="Address" value={"N/A"} isDisabled/>
            </Flex>
            <TextField className="practice-textfield" label="Practice Location Description" value={"N/A"} isMultiline={true} isDisabled/>
        </View>
    );
}