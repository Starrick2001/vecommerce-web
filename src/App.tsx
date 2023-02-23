import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPage } from "./routes/LandingPage/LandingPage";
import { ThemeProvider } from "./ThemeProvider";

function App() {


	return (
			<ThemeProvider>
				<Navbar />
				<LandingPage />
			</ThemeProvider>
	);
}

export default App;
