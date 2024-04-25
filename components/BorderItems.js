import { useEffect } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";


const BorderItems = ({location, itemName, GlobalState}) => {
	const { groceryList, setGroceryList, } = GlobalState;

	useEffect(() => {
        setGroceryList(prevList => [...prevList])
    }, [])

	const addItem = (item) => {
        const isItemInList = groceryList.some((listItem) => listItem.grocery === item);

		if (!isItemInList) {
			const index = groceryList.length + 1;
			setGroceryList((prevState) => [...prevState, { id: index, grocery: item }]);
			Alert.alert(`${itemName} added to your list`);
		} else {
			Alert.alert(`${itemName} is already in your list`);
		}
    }

    return (
        <TouchableOpacity style={styles.imageBorder} onPress={() => addItem(itemName)}>
            <Image
                source={location}
                style={styles.image}
				resizeMode="contain"
            />
            <Text style={styles.text}>{itemName}</Text>
		</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageBorder: {
		backgroundColor: "white",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#9a9a9a",
		borderRadius: 30,
		height: 130,
		width: 130,
		marginTop: 20,
		marginHorizontal: 15,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.62,
        elevation: 4,
	},
	image: {
		height: "60%",
		width: "60%",
	},
	text: {
		alignSelf: "center",
		marginTop: 7,
		fontFamily: 'Magra_400Regular',
		fontSize: 16,
	},
});

export default BorderItems