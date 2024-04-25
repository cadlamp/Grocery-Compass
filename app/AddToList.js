import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Alert, } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { useFonts, Magra_400Regular } from '@expo-google-fonts/magra';

import Footer from "../components/Footer";
import Header from "../components/Header";
import DefOptions from "../components/DefOptions";

export default function AddToList({ navigation, GlobalState }) {
	const [fontsLoaded] = useFonts({ Magra_400Regular });
	const [optionsPage, setOptionsPage] = useState(6);
	const { groceryList, setGroceryList, grocery, setGrocery } = GlobalState;

	useEffect(() => {
        setGroceryList(prevList => [...prevList])
    }, [])

	const addItem = () => {
        const isItemInList = groceryList.some((listItem) => listItem.grocery === grocery);

		if (!isItemInList) {
			const index = groceryList.length + 1;
			setGroceryList((prevState) => [...prevState, { id: index, grocery: grocery }]);
			setGrocery('');
			Alert.alert(`${grocery} added to your list`);
		} else {
			setGrocery('');
			Alert.alert(`${grocery} is already in your list`);
		}
    }

    if (!fontsLoaded) return null;
	
	return (
		<View style={styles.screen}>
			<Header headtext="Add To Grocery List" />
			<View style={styles.body}>
				{optionsPage === 6 && ( 
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Add to your list..."
						onChangeText={setGrocery}
						value={grocery}
					/>
					<TouchableOpacity style={styles.button} onPress={addItem}>
						<Icon
							name="search1"
							style={styles.icon}
							size={15}
							color="white"
						/>
					</TouchableOpacity>
				</View> )}
				<DefOptions optionsPage={optionsPage} setOptionsPage={setOptionsPage} GlobalState={GlobalState}/>
			</View>
			<Footer navigation={navigation} GlobalState={GlobalState}/>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		flex: 8,
		width: "100%",
		backgroundColor: "white",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		marginTop: 20,
	},
	input: {
		backgroundColor: "#D9D9D970",
		padding: 15,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 18,
		width: "75%",
		fontFamily: "Magra_400Regular",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#141414",
		padding: 15,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 18,
		marginLeft: 10,
	},
});
