import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
	<Layout>
		<Seo title="Home Page" />
        <h1>My name is Zachary. Welcome to my site!</h1>
		<p>
			I am a full time Computer Science student at the University of Oklahoma, graduating in May 2022.
		</p>
        {/*This is the quote block on the page*/}
        <div style={{background: 'gainsboro', border: '1rem groove steelblue', borderRadius: '0.5rem', display: 'inline-block'}}>
            <p style={{margin: '0', paddingLeft: '10rem', paddingRight: '10rem', lineHeight: '150%', fontSize: '1.8rem', verticalAlign: 'middle', textAlign: 'center'}}>    
                "If you want something you've never had, you must be willing to do something
			    you've never done."<br></br><br></br>— Thomas Jefferson
            </p>
        </div>
	</Layout>
);

export default IndexPage;
