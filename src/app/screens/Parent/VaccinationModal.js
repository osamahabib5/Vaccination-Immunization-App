import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function VaccinationModal({ visible, children }) {
    return (
        <View style={styles.ModalBackground}>
            <View style={styles.modalContainer}>
                {children}
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <Image
                            source={require('../../assets/x.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ModalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header:{
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
})
export default VaccinationModal

