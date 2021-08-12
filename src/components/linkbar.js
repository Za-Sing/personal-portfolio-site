import * as React from "react";
import { Link } from "gatsby";
import { navLinks, navLinksText } from "./layout.module.css";

const LinkBar = () => (
	<header style={{ background: `#333333`, height: "2.5rem"}}>
		<nav className={navLinks}>
			<ul>
				<li><Link to="/" className={navLinksText}>Home</Link></li>
				<li><Link to="/cv" className={navLinksText}>&nbsp;&nbsp;CV&nbsp;&nbsp;</Link></li>
				<li><Link to="/projects" className={navLinksText}>Projects</Link></li>
				<li><Link to="/about" className={navLinksText}>About</Link></li>
			</ul>
		</nav>
	</header>
);

export default LinkBar;
