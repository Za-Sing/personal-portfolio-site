import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { profExperience } from "../components/layout.module.css"

const CVPage = () => (
	<Layout>
		<Seo title="My CV" />
		<h1>Professional Experience</h1>
		<table className={ profExperience }>
			<tr>
				<td>
					Quality Assurance Analyst<br></br>
					<a href="https://www.nextep.com/">Nextep Inc</a><br></br>
					March 2021 — Present
				</td>
				<td>
                    I do stuff and things at Nextep
                </td>
			</tr>
			<tr>
				<td>
					Computer Lab Assistant<br></br>
					University of Oklahoma<br></br>
					August 2019 — May 2021
				</td>
				<td>
                    I did stuff and things at OU
                </td>
			</tr>
            <tr>
				<td>
                    Sales Associate<br></br>
                    Walmart Inc<br></br>
                    May 2019 — August 2019, May 2020 — August 2020
				</td>
				<td>
                    I did stuff and things at Walmart
                </td>
			</tr>
		</table>
	</Layout>
);

export default CVPage;
