import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { profExperience } from "../components/layout.module.css";

const CVPage = () => (
	<Layout>
		<Seo title="My CV" />
		<h1>Professional Experience</h1>
        <br></br>
		<table className={profExperience}>
			<tr>
				<td>
					Quality Assurance Analyst<br></br>
					<a href="https://www.nextep.com/">Nextep Inc</a>
					<br></br>
					March 2021 — Present
				</td>
				<td>
                    <ul>
                        <li>Spearheaded use of Selenium Webdriver for automated web testing</li>
                        <li>Set up Allure Framework test reporting for Selenium tests</li>
						<li>Perform manual testing on company website and processes</li>
                        <li>Perform Business Analyst tasks such as writing reports and documentation, and enhancing company systems outside of code</li>
					</ul>
                </td>
			</tr>
			<tr>
				<td>
					Computer Lab Assistant<br></br>
					University of Oklahoma<br></br>
					August 2019 — May 2021
				</td>
				<td>
					<ul>
						<li>Check out equipment for students and faculty</li>
						<li>Run refresh software on school tablets, update and upkeep school laptops</li>
						<li>Assist with IT support such as presentation tech and education software</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					Sales Associate<br></br>
					Walmart Inc<br></br>
					May 2019 — August 2019, May 2020 — August 2020
				</td>
				<td>
					<ul>
						<li>Stocked shelves and kept department tidy</li>
						<li>Assisted customers with locating items and pricing</li>
						<li>Aided other departments with freight and helped with returns</li>
					</ul>
				</td>
			</tr>
		</table>
	</Layout>
);

export default CVPage;
