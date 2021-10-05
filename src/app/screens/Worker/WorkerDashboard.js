import React, { useState } from 'react'
import { View, Modal, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import ChildDetails from '../Parent/ChildrenInformation/ChildDetails';
import ChildrenInfoModal from '../Parent/ChildrenInformation/ChildrenInfoModal';
import { Avatar, Button, Card, Title, Text } from 'react-native-paper';
import UpdateVaccinationDetails from './UpdateVaccinationDetails.js';
function WorkerDashboard() {
  const child_details = (name, dob) => {
    return (
      <View>
        <Text style={styles.subtitle}>Parent Name: {name}</Text>
        {/* <Text style={styles.subtitle}>DOB: {dob}</Text> */}
      </View>
    )
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [childid, setchildid] = useState(0);
  const closeModal = () => {
    setModalVisible(false);
  }
  const LeftContent = props => <Avatar.Icon {...props} icon={() => (
    <Image
      source={require('../../assets/images/baby.png')}
      style={{ width: 55, height: 55, borderRadius: 20 }}
    />
  )} size={40} />

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style = {{
          flex: 1,
          alignItems: 'center',
          marginTop: "6%"
        }}>
          <Text style = {{fontSize: 30,
          fontWeight: 'bold'}}>Children Information</Text>
        </View>
        <View style={{ 
        padding: 20 }}>
          {ChildDetails.map((u, i) => {
            return (
              <Card key={u.id} id={u.id} onPress={() => {
                setchildid(u.id);
                setModalVisible(true);
              }} style={{
                marginBottom: 16,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'black',
              }}>
                <Card.Title title={u.name + "  (Click to View)"}
                  // subtitleStyle={{ marginBottom: 2 }}
                  subtitle={child_details(u.parentName,
                    u.dateOfBirth)}
                  left={LeftContent} />
              </Card>

            );
          })}
        </View>
        <Modal
          animationType="slide"
          visible={modalVisible}
          // transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <UpdateVaccinationDetails childid={childid}
            closeModal={closeModal}
          />
        </Modal>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  ChildrensList: {
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
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