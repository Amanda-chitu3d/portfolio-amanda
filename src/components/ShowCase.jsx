import React from 'react'

function ShowCase() {
    return (
        <div>
           
           <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit sunt praesentium sit, laborum eum! Quam beatae recusandae adipisci hic, odio consequuntur. Dolore fugiat voluptatibus earum iste fuga nobis doloremque?
                </p>
                <Link to="/src/feature.html" class="btn btn-outline">Read more</Link>
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
           <img src="../images/cloud-2-300x300.png" alt="" />
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
                <Link to="feature.html" class="btn btn-dark">Read More</Link>
            </div>
            <img src="../images/cloud-300.png" alt="" />
        </div>
    </section>
        </div>
    )
}

export default ShowCase
