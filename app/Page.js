import { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView, } from "react-native";

import { useFonts, Magra_400Regular, Magra_700Bold } from "@expo-google-fonts/magra";
import Icon from 'react-native-vector-icons/AntDesign';

import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../hook/useFetch";

export default function Page({ navigation, GlobalState }) {
	const [fontsLoaded] = useFonts({ Magra_400Regular, Magra_700Bold });
	
	const { groceryList, setGroceryList, cheapestItems, setCheapestItems, } = GlobalState;

    useEffect(() => {
        setGroceryList([...groceryList]);
        setCheapestItems([...cheapestItems]);
    }, [])

    const handleDeleteItem = (itemId) => {
        const updatedGroceryList = groceryList.filter(item => item.id !== itemId);
        setGroceryList(updatedGroceryList);
    };

    const handleClearList = () => {
        setGroceryList([]);
    }

    const bestPrice = async () => {
		navigation.navigate('BestPrices');
	}

    const handleBestPrice = () => {
        if (groceryList.length === 0) {
            Alert.alert('You must add something to your list!')
        } else {
            Alert.alert(
                'Find the Best Prices',
                'Are you ready to find the best prices?',
                [{
                    text: 'No',
                    style: 'cancel',
                }, {
                    text: 'Yes',
                    onPress: bestPrice
                }, ],
                { cancelable: false }
            );
        }
    }
    
	if (!fontsLoaded) return null;

	return (
        <View style={styles.screen}>
        <Header headtext="Grocery List" />
        <View style={styles.body}>
            <ScrollView>	
            {groceryList.length === 0 ? (
                <Text style={styles.emptyListMessage}>You have nothing in your list!</Text>
            ) : (
            groceryList.map((item) => (
            <View key={item.id} style={styles.itemList}>
                <View style={styles.itemContainer}>
                <Text style={styles.groceryItem}>{item.grocery}</Text>
                </View>
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteItem(item.id)}
                >
                <Icon name="delete" size={25} color="#FF5733" />
                </TouchableOpacity>
            </View>
            ))
            )}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddToList')}>
                <Text style={styles.text}>Add groceries to your list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClearList}>
                <Text style={styles.text}>Clear the items from your list</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.importantButton} onPress={handleBestPrice}>
                <Text style={styles.importantText}>Find the best prices!!</Text>
            </TouchableOpacity>
        </View>
        <Footer navigation={navigation} GlobalState={GlobalState} />
        </View>
		
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		width: "100%",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		flex: 8,
		width: "100%",
		backgroundColor: "white",
	},
    button: {
		alignItems: "center",
		borderColor: '#FF9800',
        borderWidth: 2,
		padding: 10,
		borderRadius: 20,
		marginTop: 15,
		marginHorizontal: 15,
	},
	importantButton: {
		alignItems: "center",
		backgroundColor: "#FF9800",
		padding: 15,
		borderRadius: 25,
		marginTop: 15,
		marginHorizontal: 15,
        marginBottom: 15,
	},
	text: {
		alignSelf: "center",
		fontFamily: 'Magra_400Regular',
		fontSize: 15,
	},
    importantText: {
		alignSelf: "center",
		fontFamily: 'Magra_700Bold',
		fontSize: 17,
	},
    groceryItem: {
        fontFamily: 'Magra_400Regular',
        fontSize: 20,
        color: '#333',
    },
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F4F4F4',
        borderRadius: 15,
        marginTop: 15,
        marginHorizontal: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.62,
        elevation: 4,
    },
    deleteButton: {
        marginLeft: 15,
        padding: 5,
        borderRadius: 50,
        backgroundColor: '#FFF',
    },
    emptyListMessage: {
        fontFamily: 'Magra_400Regular',
        fontSize: 20,
        color: '#333',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 25
    }
});
