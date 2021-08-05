import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => (
	<Layout>
		<Seo title="Contact Information" />
		<h1>Welcome! Below you'll find my contact information:</h1>
		<ul>
			<li><b>Email: </b><a href="mailto:za.sing227@gmail.com">za.sing227@gmail.com</a></li>
			<li><b>LinkedIn: </b><a href="https://www.linkedin.com/in/zachary-singleton-a91411186">Zachary Singleton</a></li>
		</ul>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default ContactPage;
