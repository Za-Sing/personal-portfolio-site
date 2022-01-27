import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { projectCard } from "../components/layout.module.css";

const ProjectPage = () => (
	<Layout>
		<Seo title="My Projects" />
		<h1>My Projects</h1>
		<h4>Here are all of my personal & collaborative projects:</h4>
        <div style={{margin: 'auto'}}>
		<ol style={{display: 'flex', listStyle: 'none'}}>
			<li>
				<div className={projectCard}>
                    <a href="https://github.com/Za-Sing/Risk-Genetic-Algorithm" target="_blank">
						Genetic Algorithm for Risk
					</a>
                    <p style={{fontSize: '11pt'}}>
                        A genetic algorithm AI that learns the game Risk
					</p>
				</div>
			</li>
            <li>
				<div className={projectCard}>
					<a href="https://github.com/RezaTorbati/ComputerSecurityProject" target="_blank">
						Computer Security Project
					</a>
                    <p style={{fontSize: '11pt'}}>
                        Three different ways of detecting adversarial image attacks on object detection AI
					</p>				
                </div>
			</li>
            <li>
				<div className={projectCard}>
                    <p>
                        <a href="https://github.com/bentonsmith8/SoonerRoverTeamV" target="_blank">
						    Sooner Rover Team
					    </a>
                        <br></br>
                        The codebase for OU's Sooner Rover Team, of which I worked on the Autonomous code
					</p>
				</div>
			</li>
            {/*<li>
				<div className={projectCard}>
					<p>
						<a href="https://github.com/Za-Sing/3D-Particle-Simulation" target="_blank">
							3D Particle Simulation
						</a>
					</p>
				</div>
			</li>*/}
            <li>
				<div className={projectCard}>
					<p>
						<a href="https://github.com/Za-Sing/personal-portfolio-site" target="_blank">
							My Portfolio Site
						</a>
					</p>
				</div>
			</li>
		</ol>
        </div>
	</Layout>
);

export default ProjectPage;
