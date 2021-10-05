import React, { useState } from 'react'
import {
    Flex,
    Center,
    ScrollView,
    VStack,
    Spacer, CheckIcon, Input, Text, Select
} from "native-base"
import { View } from 'react-native';

function ChildGrowthSymptoms(props) {
    let [service, setService] = React.useState("")
    return (
        <ScrollView>
            <Center mt="4">
                <VStack w="100%">
                    <Flex
                        direction="row"
                    >
                        <Spacer />
                        <Center >
                            {props.symptom === "Weight" ||
                                props.symptom === "Height" ||
                                props.symptom === "Age" ?
                                <Input
                                    mx="3"
                                    placeholder={props.symptom}
                                    style={{
                                        fontSize: 20,
                                        width: 200
                                    }}
                                /> : props.symptom === "Emotional Problem" ?
                                    <Select
                                        selectedValue={service}
                                        minWidth="200"
                                        accessibilityLabel="Choose Service"
                                        placeholder={props.symptom}
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        style={{
                                            fontSize: 20
                                        }}
                                        mt={1}
                                        onValueChange={(itemValue) => setService(itemValue)}
                                    >
                                        <Select.Item label="Yes" value="poor" />
                                        <Select.Item label="No" value="fair" />
                                    </Select> :
                                    <Select
                                        selectedValue={service}
                                        minWidth="200"
                                        accessibilityLabel="Choose Service"
                                        placeholder={props.symptom}
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        style={{
                                            fontSize: 20
                                        }}
                                        mt={1}
                                        onValueChange={(itemValue) => setService(itemValue)}
                                    >
                                        <Select.Item label="Poor" value="poor" />
                                        <Select.Item label="Fair" value="fair" />
                                        <Select.Item label="Good" value="good" />
                                        <Select.Item label="Excellent" value="excellent" />
                                    </Select>
                            }
                        </Center>
                    </Flex>
                </VStack>
            </Center>
        </ScrollView>
    )
}

export default ChildGrowthSymptoms
