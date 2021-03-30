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
                <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Falcon IT Service is a leading provider of IT services, providing IT solutions to a wide range of customers and industry sectors throughout Australia. Our business aims to deliver high quality IT solutions and maintain the company's IT infrastructure.

                </p>
                <Link to="/feature" className="btn btn-outline">Read more</Link>
            </div>
            <div className="showcase-form card">
                <h2>Request a Demo</h2>
                <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label for="">Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div className="form-control">
                        <input type="text" name="name"
                        placeholder="Name" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="company"
                        placeholder="Company Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email"
                        placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />

                </form>
            </div>

        </div>
    </section>
    <section className="stats">
        <div className="container">
            <h3 className="stats-heading text-center my-1">
            Our goal is to offer IT solutions which are unique and extremely cost effective, and establish a long term business relationship with our customers. By using us, you can reduce your tech workload while maximising your productivity and growth.
                 </h3>
            <div className="grid grid-3 text-center my-4">
                <div>
                    <i className="fas fa-server fa-3x"> </i>
                    <h3>10,349,405</h3>
                    <p className="text-secondary">Deployments</p>
                </div>
                <div>
                    <i className="fas fa-upload fa-3x"> </i>
                    <h3>987 TB</h3>
                    <p className="text-secondary">Published</p>
                </div>
                <div>
                    <i className="fas fa-project-diagram fa-3x"> </i>
                    <h3>2,343,265</h3>
                    <p className="text-secondary">Projects</p>
                </div>
            </div> 
        </div>
    </section>
    <section className="cli">
       <div className="container grid">
           <img src={homeCloud2} alt="" />
           <div className="card">
               <h3>Easy to use, cross platform CLI</h3>
           </div>
           <div className="card">
               <h3>Deploy in seconds</h3>
           </div>
        </div>
    </section>
    <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
            <div className="text-center">
                <h2 className="lg">Extreme Cloud Hosting</h2>
                <p className="lead my-1">Cloud hosting like you've never seen.
                    Fast, efficient and scalable
                </p>
                <Link to="/feature" className="btn btn-dark">Read More</Link>
            </div>
            <img src={homeCloud} alt="" />
        </div>
    </section>
    <section className="languages">
        <h2 className="md text-center my-2">
            Support Languages
        </h2>
        <div className="container flex">
            <div className="card">
                <h4>C++</h4>
                <img src={languageCPlus} alt="C++" />
            </div>
            <div className="card">
                <h4>Python</h4>
                <img src={languagePython} alt="" />
            </div>
            <div className="card">
                <h4>SWIFT</h4>
                <img src={languageSwift} alt="" />
            </div>
            <div className="card">
                <h4>Java</h4>
                <img src={languageJava} alt="" />
            </div>
            <div className="card">
                <h4>JavaScript</h4>
                <img src={languageJS} alt="" />
            </div>
            <div className="card">
                <h4>Node.js</h4>
                <img src={languageNode} alt="" />
            </div>
        </div>
    </section>

        
        </main>
    )
}
