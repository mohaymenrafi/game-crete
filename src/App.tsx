import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game/:id" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
