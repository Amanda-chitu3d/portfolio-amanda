import React from 'react';
import {Link} from "react-router-dom";
import serverPic from "../image/server-300x300.png";
import '../css/style.css';
import '../css/utilities.css';


function Docs() {
    return (
        <div>
    <section class="docs-head bg-primary py-3">
        <div class="container grid">
            <div>
                <h1 class="x1">Docs</h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque.
                </p>
            </div>
            <div>
                <img src={serverPic} alt=""/>
            </div>
        </div>
    </section>
   
    <section class="docs-main my-4">
        <div class="container grid">
            <div class="card bg-light p-3">
                <h3 class="my-2">Essentials</h3>
                <nav>
                    <ul>
                        <li><Link to="#">Introduction</Link></li>
                        <li><Link to="#">About FalconWin</Link></li>
                        <li><Link to="#">Installation</Link></li>
                    </ul>
                </nav>
                <h3 class="my-2">Deployment</h3>
                <nav>
                    <ul>
                        <li><Link class="text-primary" to="#">Setting up a container</Link></li>
                        <li><Link to="#">Using the CLI</Link></li>
                        <li><Link to="#">Managing resources</Link></li>
                        <li><Link to="#">Upgrade downgrade</Link></li>
                    </ul>
                </nav>
            </div>
            <div class="card">
                <h2>Introduction</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deleniti assumenda sed laborum aliquid nostrum dolor aperiam, fugiat eius in quibusdam possimus facilis debitis nulla minima quisquam soluta sapiente. Qui!
                </p>

                <div class="alert alert-success">
                    <i class="fas fa-info"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, expedita!</p>
                </div>

                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt aperiam eaque saepe. Reiciendis, cum beatae!
                </p>
                <Link to="#" class="btn btn-primary">Install CLI</Link>

                <h3>Requirements</h3>
                <ul>
                    <li>Windows 10, Mac OSX, Linus</li>
                    <li>Node.js v12 or above</li>
                </ul>

                <h3>Install</h3>
                <p>Mac (Homebrew)</p>
                <pre><code>$ brew install FalconWin-cli</code></pre>
                <p>NPM</p>
                <pre><code>$ npm install FalconWin-cli</code></pre>
                <p>Yarn</p>
                <pre><code>$ yarn install FalconWin-cli</code></pre>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Docs
