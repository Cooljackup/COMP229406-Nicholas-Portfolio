/// <!-- Name: Nicholas Bonneville - Student Number: 301194178 - September 28th, 2025 -->
// Services page. It lists the services and technical skills I am able to do.
import CLanguage from "../assets/clanguage.png";
import WebDevelopment from "../assets/webdevelopment.png";
import UnrealEngine from "../assets/unreal.png";
import Unity from "../assets/unity.png";

export default function Services() {
    return (
        <div>
            <div class="pages-div">
                <div class="pages-text">
                    <h1>Services</h1>
                    <p>Below you can find a list of services that I am knowledgable in and offer:</p>
                </div>

                <div class="pages-content">
                    <img src={CLanguage} class="service-photo"/>
                    <div class="pages-text">
                        <p>• I am familiar with both C# and C++, as well as several other languages.</p>
                    </div>
                </div>

                <div class="pages-content">
                    <img src={WebDevelopment} class="service-photo"/>
                    <div class="pages-text">
                        <p>• I am familiar with Web Development (HTML, CSS, JS).</p>
                    </div>
                </div>
                
                <div class="pages-content">
                    <img src={UnrealEngine} class="service-photo"/>
                    <div class="pages-text">
                        <p>• I am familiar with Unreal Engine.</p>
                    </div>
                </div>

                <div class="pages-content">
                    <img src={Unity} class="service-photo"/>
                    <div class="pages-text">
                        <p>• I am familiar with Unity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}