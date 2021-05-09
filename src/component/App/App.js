import React from 'react'
import logo from '../../img/puma-logo.svg';
import bg1 from '../../img/img-1.jpg';
import bg2 from '../../img/img-2.jpg';
import bg3 from '../../img/img-3.jpg';
import bg4 from '../../img/img-4.jpg';
import bg5 from '../../img/img-5.jpg';
import Menu from './../Menu/Menu';
import Card from './../Card/Card';
import personFirst from '../../img/person-1.jpg';
import personSecond from '../../img/person-2.jpg';
import personThird from '../../img/person-3.jpg';
import personFourth from '../../img/person-4.jpg';
import personFiveth from '../../img/person-5.jpg';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import linkedin from '../../img/linkedin.png';
import './App.sass';


// Навигационный текст
const menu = [
    {
        text: 'Studio'
    },
    {
        text: 'Partners'
    },
    {
        text: 'Media'
    },
    {
        text: 'user'
    }
]


// Информация внутри круга
const card = {
	img: [personFirst, personSecond, personThird, personFourth, personFiveth],
	alt: "profileImg",
	name: ["Carl Yohan", "May Clarcson", "Zac Manson", "Nelson Onil", "Adam Burns"],
	status: ["I love YouTube", "Hater facebook", "Like icecream", "LoveJs", "AnimeLiker"],
	links: 1
}

const App = () => {
	
	const [point, setPoint] = React.useState({
		strokeDashoffset: 1004,
		background: bg1,
		absolute: "100px"
	});
	
		return (
			<main id="main"
				style={{ backgroundImage: `url(${point.background})` }}
			>
				<nav className="navbar">
						<div className="logo">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
						<nav>
							<ul>
								<Menu items={menu} />
							</ul>
						</nav>
				</nav>
				<div className="circle-box">
					<svg height="402px" width="402px">
						<circle r="200" cx="201" cy="201" strokeWidth="1px" stroke="grey" fill="none" />
					</svg>
					<svg height="402px" width="402px">
						<circle r="200" cx="201" cy="201" strokeWidth="1px" stroke="#fff" fill="none" strokeDasharray="1256" strokeDashoffset={point.strokeDashoffset} id="svgCircle" />
					</svg>
					<div id="steps">
						<span id="step1" onClick={() => setPoint({strokeDashoffset: 1004, background: bg1, absolute: "100px"})}></span>
						<span id="step2" onClick={() => setPoint({strokeDashoffset: 753, background: bg2, absolute: "-350px"})}></span>
						<span id="step3" onClick={() => setPoint({strokeDashoffset: 502, background: bg3, absolute: "-800px"})}></span>
						<span id="step4" onClick={() => setPoint({strokeDashoffset: 251, background: bg4, absolute: "-1250px"})}></span>
						<span id="step5" onClick={() => setPoint({strokeDashoffset: 0, background: bg5, absolute: "-1700px"})}></span>
					</div>
					<div className="cards" style={{top: `${point.absolute}`}}>
						<Card src={personFirst} alt={card.alt} cardName={card.name[0]} cardStatus={card.status[0]} srcFacebook={facebook} srcInstagram={instagram} srcTwitter={twitter} srcLinkedin={linkedin} />
						<Card src={personFirst} alt={card.alt} cardName={card.name[1]} cardStatus={card.status[1]} srcFacebook={facebook} srcInstagram={instagram} srcTwitter={twitter} srcLinkedin={linkedin} />
						<Card src={personFirst} alt={card.alt} cardName={card.name[2]} cardStatus={card.status[2]} srcFacebook={facebook} srcInstagram={instagram} srcTwitter={twitter} srcLinkedin={linkedin} />
						<Card src={personFirst} alt={card.alt} cardName={card.name[3]} cardStatus={card.status[3]} srcFacebook={facebook} srcInstagram={instagram} srcTwitter={twitter} srcLinkedin={linkedin} />
						<Card src={personFirst} alt={card.alt} cardName={card.name[4]} cardStatus={card.status[4]} srcFacebook={facebook} srcInstagram={instagram} srcTwitter={twitter} srcLinkedin={linkedin} />
					</div>
				</div>
			</main>
		)
	}

export default App;
