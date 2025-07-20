import { useState } from "react";
import "../css/loading.css"; // Assuming you have a CSS file for styling

function Loading() {


    return (
        <div className="loading">

           
            <div class="loader-wrapper">
                <span class="loader-letter">M</span>
                <span class="loader-letter">y</span>
                <span class="loader-letter"> </span>
                <span class="loader-letter">P</span>
                <span class="loader-letter">o</span>
                <span class="loader-letter">r</span>
                <span class="loader-letter">t</span>
                <span class="loader-letter">f</span>
                <span class="loader-letter">o</span>
                <span class="loader-letter">l</span>
                <span class="loader-letter">i</span>
                <span class="loader-letter">o</span>

                <div class="loader"></div>
            </div>


        </div>
    );
}

export default Loading;
