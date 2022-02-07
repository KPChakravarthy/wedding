import React from 'react';
import "./App.css";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	React.useEffect(() => {
		AOS.init({
			duration: 700,
			easing: 'ease-in-out',
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
