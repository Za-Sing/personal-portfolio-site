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
import LinkBar from "./linkbar";
import "./layout.module.css";

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
		<div style={{position: 'relative', minHeight: '100vh'}}>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<LinkBar/>
            <div 
				style={{
					padding: `1.25rem 1.25rem 2.5rem`
				}}
            >
				<main>
                    {children}
                </main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://github.com/gatsbyjs/gatsby-starter-default">Gatsby's Default Starter</a>
				</footer>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
