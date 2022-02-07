const Mobile = () => {
	return (
		<>
			<div className="bg-img"></div>
			<div className="mobile-container">
				<div className="quote" data-aos="fade-up">
					<p className="quotation">Where there is love, there is life.</p>
					<div className="author">- Mahatma Gandhi</div>
				</div>
				{window.location.search === "?n" ? (
					<div className="inv-name">
						<p data-aos="fade-up" data-aos-delay="100">Nithya Aathreya</p>
						<p data-aos="fade-up" data-aos-delay="150">weds</p>
						<p data-aos="fade-up" data-aos-delay="200">Krishna Prasad Chakravarthy</p>
					</div>
				) : (
					<div className="inv-name">
						<p data-aos="fade-up" data-aos-delay="100">Krishna Prasad Chakravarthy</p>
						<p data-aos="fade-up" data-aos-delay="150">weds</p>
						<p data-aos="fade-up" data-aos-delay="200">Nithya Aathreya</p>
					</div>
				)}
				<div className="content">
					<p data-aos="fade-up" data-aos-delay="200">
						As the saying goes "marriages are made in heaven" which we solemnize
						on earth.
					</p>
					<p data-aos="fade-up" data-aos-delay="250">
						Please consider this as our personal invitation for our{" "}
						<strong>Vivaha Mahotsava</strong>. We cordially invite you to grace
						the occassion with your benevolent presence and be with us as we
						celebrate the beginning of a new life together.
					</p>
					<p data-aos="fade-up" data-aos-delay="300">
						<strong>
							On Sunday, the 24th of April 2022 from 8:25AM to 9:20AM
						</strong>
					</p>
					<p className="mt-2" data-aos="fade-up" data-aos-delay="350">
						<strong>
							Venue - Sri Brahmasthana Kalyana Mantapa, 922/A, Sahukar Chennaiah
							Road, Janatha Nagar, Bogadi 2nd Stage, Doora, Mysore
						</strong>
					</p>
				</div>
			</div>
			<div className="get-dir-btn" data-aos="flip-up">
				<a href="https://t.ly/SeJg" target="_blank">
					<button className="primary-button">GET DIRECTIONS</button>
				</a>
			</div>
		</>
	);
};

export default Mobile;
