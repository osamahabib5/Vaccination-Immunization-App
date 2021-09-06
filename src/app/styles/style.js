import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    signup_screen: {
        flex:1,
        flexDirection:"column",
    },
    container: {
        flex: 1,
        width:'100%',      
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',      
    },
    top_container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    roundButton: {
        // bottom:100,
        width: 250,
        height: 250,
        alignItems: 'center',
        backgroundColor: '#1796b3',
        borderRadius: 200,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
    },
    welcomeSplashScreen: {
        color: '#FFFFFF',
        fontFamily: 'Audiowide-Regular',
        fontStyle: "normal",
        fontSize: 20,
        width: 160,
        lineHeight: 24,
        textAlign: "center",
        marginTop: 50,
    },
    welcomeSubTitleSplashScreen: {
        top: 18,
        width: 175,
        flex: 1,
        fontFamily: 'Roboto',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 17,
        fontSize: 16,
        fontWeight: "100",
        color: '#00000087',

    },
    second_container: {
        flex: 1,
        flexDirection: 'row',
    },
    home_triangleButtongradient: {
        height: 90,
        width: '45%',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 25,
        margin:5,
    },
    home_touchabletriangle: {
        width: '100%',
        alignItems: "center",
        height: 90,
    },
    home_triangleText: {
        color: '#00000087',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "300",
    },
    inputView: {
        backgroundColor: '#eee',
        borderRadius: 30,
        height: 45,
        marginBottom: 30,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        color:'#00000087',
        textAlign:"left",
        width: 300,
        padding:15,
      }


});