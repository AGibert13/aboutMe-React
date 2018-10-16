import React from 'react';



export default ()=>{
    return (
        <section id="projects">
            <h2>Projects</h2>
            <section className="website" data-link="https://agibert13.github.io/MovieWebsite/fresh_tomatoes.html">
                <img className="websiteImg" src="images/movie.jpg"/>
                <h4>Favorite Movies</h4>
            </section>

            <section className="website" data-link="https://agibert13.github.io/ProjectYourself/about.html">
                <img className="websiteImg" src="images/project.jpg"/>
                <h4>Project Yourself</h4>
            </section>

            <section className="website" data-link="https://agibert13.github.io/algorithmPerformance/sort.html">
                <img className="websiteImg" src="images/sort.jpg"/>
                <h4>Sort</h4>
            </section>

        </section>
    )
}