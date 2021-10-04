import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ListItem, Icon } from 'react-native-elements'
import ChildDetails from './ChildDetails';
import ChildrenInfoModal from './ChildrenInfoModal';
import DietPlanModal from './DietPlanModal';
const users = [
    {
        id: 0,
        name: 'Ali',
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        color: 'white',

    },
    {
        id: 1,
        name: 'Kamran',
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        color: 'white',

    },
    {
        id: 2,
        name: 'Saleem',
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        color: 'white',

    },
    {
        id: 3,
        name: 'Ahmed',
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        color: 'white',

    },
    {
        id: 4,
        name: 'Junaid',
        avatar: 'https://reactnative.dev/img/tiny_logo.png',
        color: 'white',

    }
]

function ChildrenInformation(props, { navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [childid, setchildid] = useState(0);
    const closeModal = () => {
        setModalVisible(false);
    }
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        users.map((u, i) => {
            return (
                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
                // <Card key={u.id} style={{ backgroundColor:'blue'}}>
                //     {/* <Card.Title>{u.name}</Card.Title> */}
                //     {/* <Card.Divider /> */}
                //     <View key={i} style={styles.Card}>
                //         <Image
                //             style={styles.image}
                //             resizeMode="cover"
                //             source={{ uri: u.avatar }}
                //         />
                //         <Text>{u.name}</Text>
                //     </View>
                // </Card>
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

