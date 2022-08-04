import { useEffect, useState } from 'react';
import { DataStoreService } from '../services/index';
import { Insurances } from '../models';
import { Dropdown } from './base/Dropdown';

export const InsuranceSelectionField = () => {
    const [insurances, setInsurances] = useState([]);
    useEffect(() => {
        async function fetchMarkets() {
            const insurances = await DataStoreService.getAll(Insurances);
            console.log(insurances);
            setInsurances(insurances);
        }
        fetchMarkets();
    }, []);
    return <Dropdown label='Insurance Provider' selections={insurances} valueKey='name' displayKey='name' />;
}