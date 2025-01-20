// src/pages/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      // Fetch data from the API
      fetch('https://newsapi.org/v2/everything?q=apple&from=2025-01-08&to=2025-01-08&sortBy=popularity&apiKey=c3e081277de44247afaa618fd7001226')
        .then((response) => response.json())
        .then((data) => {
          // Store the articles in the state
          setNewsData(data.articles);
        })
        .catch((error) => console.error('Error fetching the news data:', error));
    }, []);

  return (
    <div>
      <h1>Welcome to Purple Buzz</h1>
      <p>This is the homepage content.</p>
   

    


<section class="service-wrapper py-3">
    <div class="container-fluid pb-3">
        <div class="row">
            <h2 class="h2 text-center col-12 py-5 semi-bold-600">Services</h2>
            <div class="service-header col-2 col-lg-3 text-end light-300">
                <i class='bx bx-gift h3 mt-1'></i>
            </div>
            <div class="service-heading col-10 col-lg-9 text-start float-end light-300">
                <h2 class="h3 pb-4 typo-space-line">Make Success for future</h2>
            </div>
        </div>
        <p class="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
            You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy and repost this template.
        </p>
    </div>

    <div class="service-tag py-5 bg-secondary">
        <div class="col-md-12">
        <h2 class="h2 text-center col-12 py-5 semi-bold-600"> Live News</h2>
        </div>
    </div>

</section>

<section class="container overflow-hidden py-5">
    <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">

     

    <div class="row projects gx-lg-5">
    {newsData.map((article, index) => (
            <div class="col-sm-6 col-lg-4 text-decoration-none project marketing social business">
                <div class="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
                <img className="service card-img" src={article.urlToImage} alt={article.title} />
                    <div class="card-body">
                        <h5 class="card-title light-300 text-dark">Digital Marketing</h5>
                        <p className="card-text">{article.description}</p>
                        <span class="text-decoration-none text-primary light-300">
                              Read more <i class='bx bxs-hand-right ms-1'></i>
                          </span>
                    </div>
                </div>
            </div>
             ))}
        </div>

  
     

    </div>
</section>
</div>

  );
};

export default Home;
