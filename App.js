import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar
} from 'react-native';


const App = () => {
	const initialRandomColor = 'rgb(0, 0, 0)'
	const [randomColor, setRandomColor] = useState(initialRandomColor);

	const changeBackground = () => {
		const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
		setRandomColor(color);
	};

	return (
		<>
			<StatusBar backgroundColor={randomColor} />
			<View style={[styles.container, { backgroundColor: randomColor }]}>
				<TouchableOpacity
					onPress={changeBackground}
				>
					<Text style={styles.text}>Tap Me</Text>
				</TouchableOpacity>
				{randomColor !== initialRandomColor && (
					<TouchableOpacity
						onPress={() => setRandomColor(initialRandomColor)}
					>
						<Text style={[styles.text, { backgroundColor: "#000" }]}>Reset</Text>
					</TouchableOpacity>
				)}
			</View>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 30,
		backgroundColor: "#BB2CD9",
		paddingVertical: 10,
		paddingHorizontal: 40,
		color: "#fff",
		borderRadius: 15,
		textTransform: "uppercase",
		marginVertical: 10
	}
});