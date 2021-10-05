import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ListItem, Icon } from 'react-native-elements'
import ChildDetails from './ChildDetails';
import ChildrenInfoModal from './ChildrenInfoModal';
import DietPlanModal from './DietPlanModal';
import { marginBottom } from 'styled-system';
const users = [
    {
        id: 0,
        name: 'Ali',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 1,
        name: 'Kamran',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 2,
        name: 'Saleem',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 3,
        name: 'Ahmed',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 4,
        name: 'Junaid',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 5,
        name: 'Kamil',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 6,
        name: 'Sameer',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    },
    {
        id: 7,
        name: 'Nadir',
        parent : 'Parent: Sami',
        avatar: '../../../assets/images/baby.png',
        color: 'white',

    }
]

function ChildrenInformation(props, { navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [childid, setchildid] = useState(0);
    const closeModal = () => {
        setModalVisible(false);
    }
    const LeftContent = props => <Avatar.Icon {...props} icon={() => (
        <Image
          source={require('../../../assets/images/baby.png')}
          style={{ width: 40, height: 40, borderRadius:20 }}
        />
      )} size={40} />
    return (
        users.map((u, i) => {
            return (
                <Card id={u.id} onPress={()=>null} style={{marginBottom:16, borderRadius:30}}>
                    <Card.Title title={u.name} subtitle={u.parent} left={LeftContent} />
                    {/* <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content> */}
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                    {/* <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions> */}
                </Card>
                
            );
        })
    )
}

const styles = StyleSheet.create({
    ChildName: {
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 20,
        width: 100,
        fontSize: 1,
        fontWeight: 'bold'
    },
    ViewDetailsButton: {
        backgroundColor: '#0Cb8B6',
        width: 80,
        height: 80,
        justifyContent: 'center',
        borderRadius: 40,
        marginLeft: 20
    },
    tinyImage: {
        width: 100
    },
    Card: {
        borderRadius: 20,
    }

})

export default ChildrenInformation

