import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { profExperience, profSkills } from "../components/layout.module.css";

const CVPage = () => (
	<Layout>
		<Seo title="My CV" />
		<h1>Professional Experience</h1>
        <br></br>
		<table className={profExperience}>
			<tr>
				<td>
					<b style={{fontSize: '16pt'}}>Quality Assurance Analyst</b><br></br>
					Nextep Inc.<br></br>
					March 2021 — Present
				</td>
				<td>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Set up automated web testing software and write test code</li>
						<li>Perform manual testing on company website and processes</li>
                        <li>Perform Business Analyst tasks such as writing reports and documentation, and enhancing company systems outside of code</li>
					</ul>
                </td>
			</tr>
			<tr>
				<td>
					<b style={{fontSize: '16pt'}}>IT Student Employee</b><br></br>
					University of Oklahoma<br></br>
					August 2019 — May 2021
				</td>
				<td>
					<ul style={{listStyleType: 'none'}}>
                        <li>Provide IT support when needed for classroom presentation technology and education software</li>
						<li>Check out equipment for students and faculty</li>
                        <li>Perform maintenance on school tablets and laptops including updating, refreshing, and re-imaging.</li>
					</ul>
				</td>
			</tr>
			<tr>
				<td>
					<b style={{fontSize: '16pt'}}>Sales Associate</b><br></br>
					Walmart Inc.<br></br>
					May 2019 — August 2019, May 2020 — August 2020
				</td>
				<td>
					<ul style={{listStyleType: 'none'}}>
                        <li>Maintain department by merchandising and stocking shelves</li>
						<li>Assist customers by answering questions about products and merchandising</li>
						<li>Coordinate with other departments for freight and online shopping</li>
					</ul>
				</td>
			</tr>
		</table>

        <h1 style={{paddingTop: '3rem'}}>Professional Skills</h1>
        <br></br>
        <table className={profSkills}>
			<tr>
				<td>
					<ul style={{listStyleType: 'none', paddingLeft: '15rem'}}>
                        <li>Team Building</li>
						<li>Multitasking</li>
                        <li>Problem-solving</li>
                        <li>Motivated</li>
                        <li>Results-driven</li>
                        <li>Analytical</li>
					</ul>
				</td>
				<td>
                    <ul style={{listStyleType: 'none', paddingLeft: '10rem'}}>
                        <li>C++, Java, Python, and React + Gatsby</li>
						<li>Selenium Webdriver tools</li>
                        <li>Salesforce Admin tools</li>
                        <li>Proficient with Linux</li>
						<li>Proficient with Microsoft Office</li>
                        <li>Customer-focused service</li>
					</ul>
                </td>
			</tr>
        </table>
	</Layout>
);

export default CVPage;
