import { Dropdown } from '../base/Dropdown';
import { Collection, Flex, View, Text } from '@aws-amplify/ui-react';
import { setSelectedId } from '../base/actions';
import { MarketState } from './reducer';
import { useInsuranceReducer, usePlanState } from './hooks';

interface InsuranceSectionProps {
    markets: MarketState;
    onMarketChange: (marketId: string) => void;
};

export const InsuranceSection: React.VFC<InsuranceSectionProps> = ({
    markets,
    onMarketChange,
}) => {
    const [insuranceState, dispatchInsuranceAction] = useInsuranceReducer(markets.selectedId);
    const [plans] = usePlanState(insuranceState.selectedId);
    return (
        <Flex>
            <Dropdown
                label='Market'
                placeHolder='Select a market'
                selections={markets.items}
                valueKey='id'
                displayKey='state'
                value={markets.selectedId}
                onChange={(e) => onMarketChange(e.target.value)} />
            <Dropdown
                label='Insurance Provider'
                placeHolder='Select an insurance'
                selections={insuranceState.items}
                valueKey='id'
                displayKey='name'
                value={insuranceState.selectedId}
                onChange={(e) => setSelectedId(dispatchInsuranceAction, e.target.value)} />
            <View>
                <Text>Plans Accepted</Text>
                <Collection
                    type="list"
                    items={plans}>
                    {(item, index) => (
                        <Flex key={index}>
                            <Text>{item.name}</Text>
                            <Text>{`(${item.type})`}</Text>
                            <Text>{item.code}</Text>
                        </Flex>
                    )}
                </Collection>
            </View>
        </Flex>
    );
}