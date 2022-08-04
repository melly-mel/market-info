import { Collection, Flex, Text } from "@aws-amplify/ui-react"

export const PlansAcceptedField = () => {
    return (
        <Flex className="plans-accepted-container" direction={"column"} flex={1} maxWidth={400} >
            <Text>Plans Accepted</Text>
            <Collection
                type="list"
                items={[]}>
                {(item, index) => (
                    <Text key={index}>{item}</Text>
                )}
            </Collection>
        </Flex>
    )
}