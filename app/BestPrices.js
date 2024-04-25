import { useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from "react-native";

import { useFonts, Magra_400Regular } from "@expo-google-fonts/magra";

import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../hook/useFetch";


export default function BestPrices({ navigation, GlobalState }) {
	const [fontsLoaded] = useFonts({ Magra_400Regular });
	
	const { groceryList, setGroceryList, } = GlobalState;
    const { data, isLoading, error, refetch } = useFetch();

    useEffect(() => {
        setGroceryList([...groceryList]);
        refetch(groceryList);
    }, []);

    const organizeItemsByStore = () => {
		const organizedItems = {};
		data.forEach((item) => {
			if (!organizedItems[item.store]) {
				organizedItems[item.store] = [];
			}
			organizedItems[item.store].push(item);
		});
		return organizedItems;
	};
    
	if (!fontsLoaded) return null;

	return (
        <View style={styles.screen}>
        <Header headtext="Your Best Prices" />
        <View style={styles.body}>
                {data.length === 0 && isLoading ? (
					<View style={styles.centeredContainer}>
						<View style={styles.loadingOverlay}>
						    <ActivityIndicator size="large" color="#FF9800" />
					    </View>
					</View>
				) : data.length === 0 ? (
					<View style={styles.centeredContainer}>
						<Text style={styles.emptyListMessage}>You must add items to your list then press the 'Find the best prices!!' button</Text>
					</View>
				) : (
					<ScrollView>
						{Object.entries(organizeItemsByStore()).map(([store, items]) => (
							<View key={store}>
								<Text style={styles.storeHeader}>{store}</Text>
								{items.map((item) => (
									<View style={styles.itemList} key={item.id}>
										<View style={styles.itemContainer}>
											<Text style={styles.groceryItem}>{item.name}</Text>
											<Text style={styles.groceryPrice}>$ {item.price}</Text>
										</View>
									</View>
								))}
							</View>
						))}
					</ScrollView>
				)}
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
    centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    groceryItem: {
        fontFamily: 'Magra_400Regular',
		fontSize: 18,
		color: '#333',
		marginBottom: 5,
    },
    groceryPrice: {
        fontFamily: 'Magra_400Regular',
		fontSize: 16,
		color: '#666',
    },
    itemList: {
        backgroundColor: '#F4F4F4',
		borderRadius: 12,
		marginVertical: 10,
        marginHorizontal: 15,
		padding: 15,
		shadowColor: '#000',
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
        textAlign: 'center',
        marginHorizontal: 30,     
    }, 
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		justifyContent: 'center',
		alignItems: 'center',
    },
    storeHeader: {
		fontFamily: 'Magra_400Regular',
		fontSize: 25,
		color: '#FF9800',
		marginVertical: 10,
		marginHorizontal: 15,
	},
});
