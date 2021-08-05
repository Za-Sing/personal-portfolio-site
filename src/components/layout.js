/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import {navLinks} from "./layout.module.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<header>
                <nav className={navLinks}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cv">CV</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
            </header>
            <div 
				style={{
					margin: `0 auto`,
					maxWidth: 1500,
					padding: `0 1.0875rem 1.45rem`,
				}} 
			>
				<main>
                    
                    
                    {children}
                </main>
				<footer
					style={{
						marginTop: `2rem`,
					}}
				>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
