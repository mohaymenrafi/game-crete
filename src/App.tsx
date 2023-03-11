import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game/:id" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
