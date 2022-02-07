import "./App.css";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function App() {
	return (
		<div className="App">
			<div className="isDesktop">
				<Desktop />
			</div>
			<div className="isMobile">
				<Mobile />
			</div>
		</div>
	);
}

export default App;
