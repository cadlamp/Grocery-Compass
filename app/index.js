import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Page from './Page';
import AddToList from './AddToList';
import BestPrices from './BestPrices';


const Stack = createStackNavigator();

export default function Index() {
	const [ groceryList, setGroceryList ] = useState([]);
	const [grocery, setGrocery] = useState('');
	const [cheapestItems, setCheapestItems] = useState([]);
	
	const GlobalState = {
		groceryList, setGroceryList,
		grocery, setGrocery,
		cheapestItems, setCheapestItems,
	}

	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator>
				<Stack.Screen name="Home" options={{ headerShown: false }}>
					{props => <Page {...props} GlobalState={GlobalState} />}
				</Stack.Screen>
	
				<Stack.Screen name="AddToList" options={{ headerShown: false }}>
			  		{props => <AddToList {...props} GlobalState={GlobalState} />}
				</Stack.Screen>

				<Stack.Screen name="BestPrices" options={{ headerShown: false }}>
			  		{props => <BestPrices {...props} GlobalState={GlobalState} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	  );
}
