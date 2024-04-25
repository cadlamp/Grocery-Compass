import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';
import BorderItems from "./BorderItems";

/** Looks at state optionNum and loads appropriate options */
const DefOptions = ({ optionsPage, setOptionsPage, GlobalState }) => {

    if (optionsPage === 0) {  // Vegetables
        return (
			<ScrollView>
				<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/broccoli.png")} itemName={"Broccoli"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/carrot.png")} itemName={"Carrots"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/celery.png")} itemName={"Celery"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/onion.png")} itemName={"Onion"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/corn.png")} itemName={"Corn"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/potato.png")} itemName={"Potato"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/greenbeans.png")} itemName={"Green Beans"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/asparagus.png")} itemName={"Asparagus"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/beet.webp")} itemName={"Beets"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/brusselsprouts.png")} itemName={"Brussel Sprouts"} GlobalState={GlobalState}/>
            	</View>
			</ScrollView>
        );
    } else if (optionsPage === 1) {  // Fruits
		return( 
			<ScrollView>
				<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/apple.png")} itemName={"Apple"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/orange.png")} itemName={"Orange"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/blueberry.png")} itemName={"Blueberries"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/peach.png")} itemName={"Peach"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/strawberry.png")} itemName={"Strawberries"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/watermelon.png")} itemName={"Watermelon"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pomegranate.avif")} itemName={"Pomegranate"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cantaloupe.webp")} itemName={"Cantaloupe"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/grapes.png")} itemName={"Grapes"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pear.webp")} itemName={"Pear"} GlobalState={GlobalState}/>
				</View>
			</ScrollView>
		);
	} else if (optionsPage === 2) {  // Spices
		return(
			<ScrollView>
			<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>	
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/salt.png")} itemName={"Salt"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pepper.png")} itemName={"Pepper"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/mustard.png")} itemName={"Mustard"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cinnamon.png")} itemName={"Cinnamon"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/nutmeg.png")} itemName={"Nutmeg"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/allspice.png")} itemName={"All Spice"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/rosemary.webp")} itemName={"Rosemary"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/whitepepper.webp")} itemName={"White Pepper"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/garlicpowder.webp")} itemName={"Garlic Powder"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/onionpowder.webp")} itemName={"Onion Powder"} GlobalState={GlobalState}/>
				</View>
			</ScrollView>
		);
	} else if (optionsPage === 3) {  // Meats
		return (
			<ScrollView>
			<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/chicken.png")} itemName={"Chicken"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/turkey.webp")} itemName={"Turkey"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/ham.png")} itemName={"Ham"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/bacon.png")} itemName={"Bacon"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/beef.png")} itemName={"Beef"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/salmon.webp")} itemName={"Salmon"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pork.webp")} itemName={"Pork"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/salami.png")} itemName={"Salami"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/shrimp.webp")} itemName={"Shrimp"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/chickennuggets.webp")} itemName={"Chicken Nuggets"} GlobalState={GlobalState}/>
				</View>
			</ScrollView>
		);
	} else if (optionsPage === 4) {  // Dairy
		return (
			<ScrollView>
			<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/milk.png")} itemName={"Milk"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/yogurt.png")} itemName={"Yogurt"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/icecream.webp")} itemName={"Ice Cream"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/sourcream.png")} itemName={"Sour Cream"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cheese.png")} itemName={"Cheese"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/creamcheese.png")} itemName={"Cream Cheese"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/butter.png")} itemName={"Butter"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/heavywhippingcream.webp")} itemName={"Heavy Cream"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cottagecheese.png")} itemName={"Cottage Cheese"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/whippedcream.webp")} itemName={"Whipped Cream"} GlobalState={GlobalState}/>
				</View>
			</ScrollView>
			);
		} else if (optionsPage === 5) {  // Bakery
			return (
			<ScrollView>
			<Icon name="back" style={styles.icon} onPress={() => setOptionsPage(6)}/>
				<View style={styles.allButtons}>
					<BorderItems location={require("../icons/img/bread.png")} itemName={"Bread"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/muffin.png")} itemName={"Muffin"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/bagels.png")} itemName={"Bagels"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/bun.png")} itemName={"Hot Dog Buns"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cookies.png")} itemName={"Cookie"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pastry.png")} itemName={"Pastry"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/breadrolls.png")} itemName={"Bread Rolls"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/donut.png")} itemName={"Donut"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/pie.png")} itemName={"Pie"} GlobalState={GlobalState}/>
					<BorderItems location={require("../icons/img/cupcake.png")} itemName={"Cupcake"} GlobalState={GlobalState}/>
				</View>
			</ScrollView>
		);
	} else {  // Default: Home page
		return (
            <View style={styles.allButtons}>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(0)} >
                    <Image
                        source={require("../icons/img/vegetables.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(1)}>
                    <Image
                        source={require("../icons/img/fruits.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Fruit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(2)}>
                    <Image
                        source={require("../icons/img/spices.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Spices</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(3)}>
                    <Image
                        source={require("../icons/img/meats.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Meats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(4)}>
                    <Image
                        source={require("../icons/img/dairy.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Dairy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageBorder} onPress={() => setOptionsPage(5)}>
                    <Image
                        source={require("../icons/img/breadcover.jpg")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Bakery</Text>
                </TouchableOpacity>
            </View>
        );
	}
};

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
		height: "70%",
		width: "60%",
		borderRadius: 15,
	},
	text: {
		alignSelf: "center",
		marginTop: 7,
		fontFamily: 'Magra_400Regular',
		fontSize: 16,
	},
	allButtons: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	icon: {
		color: '#9a9a9a',
		fontSize: 30,
		marginLeft: 15,
		marginTop: 15,
	}
});

export default DefOptions