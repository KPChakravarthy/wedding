import React from 'react';
import "./App.css";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	React.useEffect(() => {
		AOS.init({
			debounceDelay: 20,
			throttleDelay: 50,
			offset: 10,
			duration: 700,
			easing: 'ease-in-out',
			mirror: true,
			anchorPlacement: 'top-bottom',
		});
		AOS.refresh();
	}, []);

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
