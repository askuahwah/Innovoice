import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_tob: {
        marginLeft: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: "700",

    },
    room_cards: {
        // Style for the ScrollView container
    },
    card: {
        // General card style
        backgroundColor: '#FFFADA',
        margin: 10,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        paddingBottom: 2,
    },
    cardImage: {
        // Style for the image
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        // Style for the content in the card
        padding: 10,
    },
    cardTitle: {
        // Style for the card title
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        // Style for the card description
        fontSize: 14,
        color: 'grey',
        marginBottom: 5,
    },
    room_button: {
        marginTop: 10,
    }
});

export default styles;
