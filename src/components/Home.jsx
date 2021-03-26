import React from 'react'

import {Link} from "react-router-dom";
import languageCPlus from "../image/c-plus.png";
import languagePython from "../image/python100.png";
import languageSwift from "../image/swift.jpg";
import languageJava from "../image/programming-language-java.png";
import languageJS from "../image/javascript-programming-language.png";
import languageNode from "../image/node-js-512-100x100.png";
import homeCloud2 from "../image/cloud-2-300x300.png";
import homeCloud from "../image/cloud-300.png";


export default function Home() {
    return (
        <main>
            {/* <img src={image} alt="Sydney"
            className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-3xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"
                >Welcome. I'm Amanda</h1> */}
                <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit sunt praesentium sit, laborum eum! Quam beatae recusandae adipisci hic, odio consequuntur. Dolore fugiat voluptatibus earum iste fuga nobis doloremque?
                </p>
                <Link to="/feature" class="btn btn-outline">Read more</Link>
            </div>
            <div class="showcase-form card">
                <h2>Request a Demo</h2>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="">
                    <input type="hidden" name="form-name" value="contact" />
                    <p class="hidden">
                        <label for="">Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div class="form-control">
                        <input type="text" name="name"
                        placeholder="Name" required />
                    </div>
                    <div class="form-control">
                        <input type="text" name="company"
                        placeholder="Company Name" required />
                    </div>
                    <div class="form-control">
                        <input type="email" name="email"
                        placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary" />

                </form>
            </div>

        </div>
    </section>
    <section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde harum, distinctio nemo atque similique itaque deserunt incidunt ab rem nisi corporis magnam temporibus numquam eius voluptatibus? Facere, odio ullam!
            </h3>
            <div class="grid grid-3 text-center my-4">
                <div>
                    <i class="fas fa-server fa-3x"> </i>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Deployments</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"> </i>
                    <h3>987 TB</h3>
                    <p class="text-secondary">Published</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"> </i>
                    <h3>2,343,265</h3>
                    <p class="text-secondary">Projects</p>
                </div>
            </div> 
        </div>
    </section>
    <section class="cli">
       <div class="container grid">
           <img src={homeCloud2} alt="" />
           <div class="card">
               <h3>Easy to use, cross platform CLI</h3>
           </div>
           <div class="card">
               <h3>Deploy in seconds</h3>
           </div>
        </div>
    </section>
    <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
            <div class="text-center">
                <h2 class="lg">Extreme Cloud Hosting</h2>
                <p class="lead my-1">Cloud hosting like you've never seen.
                    Fast, efficient and scalable
                </p>
                <Link to="/feature" class="btn btn-dark">Read More</Link>
            </div>
            <img src={homeCloud} alt="" />
        </div>
    </section>
    <section class="languages">
        <h2 class="md text-center my-2">
            Support Languages
        </h2>
        <div class="container flex">
            <div class="card">
                <h4>C++</h4>
                <img src={languageCPlus} alt="C++" />
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src={languagePython} alt="" />
            </div>
            <div class="card">
                <h4>SWIFT</h4>
                <img src={languageSwift} alt="" />
            </div>
            <div class="card">
                <h4>Java</h4>
                <img src={languageJava} alt="" />
            </div>
            <div class="card">
                <h4>JavaScript</h4>
                <img src={languageJS} alt="" />
            </div>
            <div class="card">
                <h4>Node.js</h4>
                <img src={languageNode} alt="" />
            </div>
        </div>
    </section>

        
        </main>
    )
}
