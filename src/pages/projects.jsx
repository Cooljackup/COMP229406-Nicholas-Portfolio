/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Projects page. Displays a list of projects I have worked on with a picture and short description included and a link to the repository.
// Imports images.
import SpyroScope from "../assets/spyroscope.png";
import BogGarden from "../assets/boggarden.png";
import DoubleJump from "../assets/doublejump.jpg";

export default function Projects() {
    return (
        <div>
            <div className="pages-div">
                <div className="pages-text">
                    <h1>Projects</h1>
                    <p>I have worked on several types of projects, ranging from different game engines, all the way to different programming languages.</p>
                    <p>Below you can find 3 of my most recent projects that I have worked on/contributed to.</p>
                </div>
            </div>

            <div className="pages-div">
                <div className="pages-content">
                    <img src={SpyroScope} className="projects-photo"/>
                    <div className="pages-text">
                        <h2>Spyro Scope</h2>
                        <p>Spyro Scope is a project that was created based on the program showcased during a live interview for Spyro Reignited Trilogy. It was a in-house made program that was never released, so Spyro Scope was created to replicate that and showcase the data being displayed from the original games. It is programmed in Beef.</p>
                        <div className="projects-link">
                            <p>GitHub Link: <a href="https://github.com/FranklyGD/Spyro-Scope" target="_blank">https://github.com/FranklyGD/Spyro-Scope</a></p>
                        </div>
                        <a>Picture drawn by FranklyGD.</a>
                    </div>
                </div>
            </div>

            <div className="pages-div">
                <div className="pages-content">
                    <img src={BogGarden} className="projects-photo"/>
                    <div className="pages-text">
                        <h2>Bog Garden - Spyro Reignited Trilogy Level Mod</h2>
                        <p>Bog Garden was a level mod that was made utilizing the workspace that was made for the game. It was created to showcase a milestone of when we were able to finally modify levels instead of having to create them manually, and we created a heavily modified and custom version of the Spyro 3 homeworld Midday Gardens. It was made in Unreal Engine using C#.</p>
                        <div className="projects-link">
                            <p>GitHub Link: <a href="https://github.com/InfinateXtremer/MiddayGardensMod" target="_blank">https://github.com/InfinateXtremer/MiddayGardensMod</a></p>
                        </div>
                        <a>Picture taken by me.</a>
                    </div>
                </div>
            </div>

            <div className="pages-div">
                <div className="pages-content">
                    <img src={DoubleJump} className="projects-photo"/>
                    <div className="pages-text">
                        <h2>Spyro Double Jump Patcher</h2>
                        <p>The Spyro Double Jump Patcher was a program that was made to automate the process of patching the game to reintroduce a bug that originated in Spyro 2 available in Spyro 3. It was programmed in Beef.</p>
                        <div className="projects-link">
                            <p>GitHub Link: <a href="https://github.com/Cooljackup/Spyro-Double-Jump-Patcher" target="_blank">https://github.com/Cooljackup/Spyro-Double-Jump-Patcher</a></p>
                        </div>
                        <a>Picture created by CrystalFissure.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}