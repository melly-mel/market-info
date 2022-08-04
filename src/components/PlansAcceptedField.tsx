import { Collection, Flex, Text } from "@aws-amplify/ui-react"
import { useState, useEffect } from "react";
import { DataStoreService } from "../services";
import { InsurancePlans } from '../models';

export const PlansAcceptedField = () => {
    const [plans, setPlans] = useState<InsurancePlans[]>([]);
    useEffect(() => {
        async function fetchMarkets() {
            const plans = await DataStoreService.getAll(InsurancePlans);
            console.log(plans);
            setPlans(plans);
        }
        fetchMarkets();
    }, []);
    return (
        <Flex className="plans-accepted-container" direction={"column"} flex={1} maxWidth={400} >
            <Text>Plans Accepted</Text>
            <Collection
                type="list"
                items={plans}>
                {(item, index) => (
                    <Text key={index}>{`${item.name} ${item.type} ${item.code}`}</Text>
                )}
            </Collection>
        </Flex>
    )
}
