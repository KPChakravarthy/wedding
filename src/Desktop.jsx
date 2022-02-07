import { QRCode } from "./icons";

const Desktop = () => {
	return (
		<>
			<div className="bg-img"></div>
			<div className="quote">
				<p>Where there is love, there is life. - Mahatma Gandhi</p>
			</div>
			<div className="inv-name">
				<p>Nithya Aathreya</p>
				<p>weds</p>
				<p>Krishna Prasad Chakravarthy</p>
			</div>
			<div className="content">
				<p>
					As the saying goes "marriages are made in heaven" which we solemnize
					on earth.
				</p>
				<p>
					Please consider this as our personal invitation for our{" "}
					<strong>Vivaha Mahotsava</strong>. We cordially invite you to grace
					the occassion with your benevolent presence and be with us as we
					celebrate the beginning of a new life together.
				</p>
				<p>
					<strong>
						On Sunday, the 24th of April 2022 from 8:25AM to 9:20AM
					</strong>
				</p>
				<p className="mt-2">
					<strong>
						Venue - Sri Brahmasthana Kalyana Mantapa, 922/A, Sahukar Chennaiah
						Road, Janatha Nagar, Bogadi 2nd Stage, Doora, Mysore
					</strong>
				</p>
			</div>
			<div className="qr-code">
				<QRCode />
			</div>
			<div className="get-dir-btn">
				<a href="https://t.ly/SeJg" target="_blank">
					<button className="primary-button">GET DIRECTIONS</button>
				</a>
			</div>
		</>
	);
};

export default Desktop;
