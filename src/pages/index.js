import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
	<Layout>
		<Seo title="Home Page" />
		<h1></h1>
        <h2>My name is Zachary Singleton. Welcome to my site!</h2>
		<p><br></br>
			I am a Computer Science student seeking full-time positions in Software
			Engineering.
		</p><br></br>
        <div style={{display: 'block', paddingTop: '2rem', borderStyle: 'solid'}}>
            <p style={{paddingLeft: '1rem', lineHeight: '200%'}}>
			    "If you want something you've never had, you must be willing to do something
			    you've never done."<br></br>— Thomas Jefferson
		    </p>
        </div>
	</Layout>
);

export default IndexPage;
