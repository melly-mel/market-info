import { useEffect, useState } from 'react';
import { DataStoreService } from '../../services/index';
import { Providers } from '../../models';
import { Dropdown } from '../base/Dropdown';
import { Flex, TextField, View } from '@aws-amplify/ui-react';

export const ProviderSection = () => {
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState(null);
    useEffect(() => {
        async function fetchMarkets() {
            const providers = await DataStoreService.getAll(Providers);
            console.log(providers);
            setProviders(providers);
        }
        fetchMarkets();
    }, []);
    return (
        <View>
            <Dropdown label='Provider' placeHolder='Select a provider' selections={providers} valueKey='first_name' displayKey='first_name' />
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