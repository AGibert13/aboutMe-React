import React from 'react';


export default ()=>{
    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            <article id="dance">
                <h3 className="hobbyHeader">Dance</h3>
                <p className="hobbyText">Dancing has always been something that interested me. I was always trying to
                    imitate what I saw in
                    movies and on television. One day I decided to take initative and learn to dance on my own.
                    I went to YouTube and started watching different videos on different techniques.</p>
                <img src="images/dance.jpg" alt="LED shoes I use for dancing"/>
            </article>
            <br/>
            <article id="guitar">
                <h3 className="hobbyHeader">Guitar</h3>
                <p className="hobbyText">I started playing the guitar when I was 17. I always had a passion for music, but
                    I was unable to
                    find the an instrument that felt natural to play. The guitar was a common sight to see, and I loved
                    the way it sounded. Eventually, I ended up buying an acoustic guitar. I learned from different
                    online sources and I now know how to read tabs.</p>
                <img src="images/guitar.jpg" alt="Aesthetically pleasing pictue including my guitar"/>
            </article>
        </section>
    )
}