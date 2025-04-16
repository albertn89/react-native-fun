import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";

const App = () => {
	const [fontsLoaded] = useFonts({
		"Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}

	return (
		<SafeAreaView style={styles.root}>
			<Text style={styles.title}>GAMEON</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.subtitle}>Let's Begin</Text>
				<MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#20315F",
	},
	button: {
		backgroundColor: "#AD40AF",
		padding: 20,
		width: "90%",
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	subtitle: {
		fontWeight: "bold",
		fontSize: 18,
		color: "#fff",
		fontFamily: "Roboto-Bold",
	},
});

export default App;
