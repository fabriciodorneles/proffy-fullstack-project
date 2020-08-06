import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex:1,
        justifyContent:'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight:37,
        maxWidth: 180,
    },

    description: {
        marginTop:24,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04b361',
        height:58,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },

    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
    },

});

export default styles;