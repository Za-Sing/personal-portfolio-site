import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const CVPage = () => (
	<Layout>
		<Seo title="My CV" />
		<h1>Professional Experience</h1>
        <br></br>
		<div style={{margin: 'auto', display: 'flex', width: '45rem'}}>
			<div style={{flex: '50%', textAlign: 'left'}}>
                Quality Assurance Analyst <br></br>
				<a href="https://www.nextep.com/">Nextep Inc</a> <br></br>
				March 2021 — Present
			</div>
			<div style={{flex: '50%', textAlign: 'right'}}>
				I do stuff and things at Nextep
			</div>
		</div>
		{/*<table style={{margin: 'auto', width: '50rem'}}>
			<tr>
				<td>
					Quality Assurance Analyst <br></br>
					<a href="https://www.nextep.com/">Nextep Inc</a> <br></br>
					March 2021 — Present
				</td>
                <td>
                    I do stuff and things at Nextep
                </td>
			</tr>
        </table>*/}
		{/*<div style={{margin: 'auto', textAlign: 'left', width: '50rem'}}>
            Quality Assurance Analyst <br></br>
            <a href="https://www.nextep.com/">Nextep Inc</a> <br></br>
            March 2021 — Present 
            <br></br><br></br><br></br><br></br>
            Computer Lab Assistant <br></br>
            University of Oklahoma — JRCoE <br></br>
            August 2019 — May 2021
            <br></br><br></br><br></br><br></br>
            Sales Associate <br></br>
            Walmart Inc<br></br>
            May 2019 — August 2019, May 2020 — August 2020 
        </div>*/}
	</Layout>
);

export default CVPage;
