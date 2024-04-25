import { useState } from "react";
import axios from "axios";

const useFetch = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async (groceryList) => {
		setIsLoading(true);

		try {
			const response = await axios.post(
				"https://grocery-compass-backend.onrender.com",
				groceryList
			);
			
			console.log(response.data)
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			console.error("Error fetching data:", error);
			alert("There was an error...");
		} finally {
			setIsLoading(false);
		}
	};

	const refetch = (groceryList) => {
		setIsLoading(true);
		
		const groceryNames = groceryList.map(item => item.grocery);
		console.log("groceryNames: ", groceryNames);
		fetchData(groceryNames);
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;