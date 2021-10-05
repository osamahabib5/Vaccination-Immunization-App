import React, { useState } from 'react'
import { View, Modal, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import ChildrenInfoModal from '../Parent/ChildrenInformation/ChildrenInfoModal';
import { Avatar, Button, Card, Title, Text } from 'react-native-paper';
import { fontWeight, style } from 'styled-system';
function WorkerDashboard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [childid, setchildid] = useState(0);
  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.heading}>Children Details</Text>
        </View>
        <View style={styles.ChildrensList}>
          {ChildDetails.map(data => {
            return (
              <Card key={data.id} style={{
                borderStyle: 'solid',
                borderWidth: 2,
                borderRadius: 6,
                borderColor: "black",
                marginTop: 10,
                width: "100%",
              }}>
                <View style={styles.cardstyles}>
                  <View style={styles.displaypicture}>
                    <Card.Content>
                      <View style={{
                        flexDirection: 'row',
                      }}>
                        <View style = {{}}>
                          <Avatar.Image size={40} source={require('../../assets/children.png')} />
                        </View>
                        <View style={{
                          marginLeft: 20,
                        }}>
                          <Text style={styles.childid}>{data.name}</Text>
                        </View>
                      </View>
                    </Card.Content>
                  </View>
                  {/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                  </Card.Actions> */}
                </View>
              </Card>
            )
          })}
        </View>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  ChildrensList: {
    marginTop: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardstyles: {
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    borderColor: 'black',
  },
  displaypicture: {
    alignItems: 'flex-start'
  },
  childid: {
    // marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  },
  searchFilterTextField: {
    backgroundColor: '#eee',
    fontWeight: 'bold',
    fontSize: 14,
    width: 300,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 10
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
})
export default WorkerDashboard;