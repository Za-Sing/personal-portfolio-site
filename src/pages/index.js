import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
	<Layout>
		<Seo title="Home Page" />
        <h1>My name is Zachary Singleton. Welcome to my site!</h1>
		<p>
			I am a Computer Science student seeking full-time positions in Software
			Engineering.
		</p>
        <div style={{background: 'lightgrey', border: 'outset 0.5rem steelblue', display: 'inline-block'}}>
            <p style={{margin: '0', paddingLeft: '10rem', paddingRight: '10rem', lineHeight: '120%', fontSize: '2rem', verticalAlign: 'middle', textAlign: 'center'}}>    
                "If you want something you've never had, you must be willing to do something
			    you've never done."<br></br><br></br>— Thomas Jefferson
            </p>
        </div>
	</Layout>
);

export default IndexPage;
