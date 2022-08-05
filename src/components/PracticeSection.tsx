import { useEffect, useState } from 'react';
import { DataStoreService } from '../services/index';
import { Practices } from '../models';
import { Dropdown } from './base/Dropdown';

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
        <Dropdown label='Practice' selections={practices} valueKey='name' displayKey='name' />
    );
}