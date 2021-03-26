import React from 'react';
import cloudSystem from "../image/cloud-system-300.png";
import homeCloud2 from "../image/cloud-2-300x300.png";
import '../css/style.css';
import '../css/utilities.css';


function Feature() {
    return (
        <div>
            <section class="features-head bg-primary py-3">
        <div class="container grid">
            <div>
                <h1 class="x1">Features</h1>
                <p class="lead">
                    Check out the features of FalconWin that 
                    separate us from the competition
                </p>
            <img src={cloudSystem} alt="" />
            </div>
        </div>
    </section>
    <section class="features-sub-head bg-light py-3">
        <div class="container grid">
            <div>
                <h1 class="md">The FalconWin Platform</h1>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nobis molestias consequuntur aperiam porro ab labore obcaecati deleniti, eius magni ea. Provident commodi officiis cumque. Fuga voluptatum ducimus adipisci dolore.
                </p>
            </div>
            <img src={homeCloud2} alt="" />
        </div>
    </section>

   <section class="features-main my-2">
       <div class="container grid grid-3">
           <div class="card flex">
               <i class="fas fa-server fa-3x">
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
                  </p>
               </i>
           </div>
           <div class="card flex">
            <i class="fas fa-database fa-3x">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
               </p>
            </i>
        </div>
        <div class="card flex">
            <i class="fas fa-power-off fa-3x">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
               </p>
            </i>
        </div>
        <div class="card flex">
            <i class="fas fa-upload fa-3x">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
               </p>
            </i>
        </div>
        <div class="card flex">
            <i class="fas fa-download fa-3x">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
               </p>
            </i>
        </div>
        <div class="card flex">
            <i class="fas fa-laptop-code fa-3x">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro maxime atque sit quasi obcaecati asperiores! Dolore natus incidunt totam perferendis.
               </p>
            </i>
        </div>
       </div>
   </section>
            
        </div>
    )
}

export default Feature
