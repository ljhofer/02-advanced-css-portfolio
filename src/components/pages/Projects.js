import React from 'react';
import catImage from '../../images/cat_computer.jpg';
import movieImage from '../../images/movies.jpg';
import weatherImage from '../../images/weather.jpg';
import employeeImage from '../../images/employee.jpg';
import emailImage from '../../images/email.jpg';
import blogImage from '../../images/blog.jpg';

// Styling for the HTML elements generated in this component
const styles = {
  h1: {
    textAlign: 'center'
  },
  card: {
    margin: 20,
    marginLeft: 15,
  },
  section: {
    margin: 15,
    justifyContent:'center',
  }, 
  a: {
    textDecoration: 'none',
    textAlign: 'center',
  },
  p: {
    textAlign: 'justify',
  },
};


// Generated the HTML that is displayed on the Portfolio page
export default function Projects() {
  return (
    <div>
      <h1 style={styles.h1}>Projects</h1>
      <section style={styles.section} className='row' id='project-section'>
        <div style={styles.card} className="card col-10 col-md-5 col-lg-3" >
            <a href="https://captionmeme.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img-top" src={catImage} alt="Cat looking at a computer" /></a>
            <div className="card-body">
              <h5 className="card-title">CaptionMe(me)</h5>
              <p style={styles.p} className="card-text">This app allows users to caption an image to create a meme. I coded the routes, models, seeds, event handlers, server, and index files. I also served as Project Manager.</p>
            </div>
            <div className="card-body">
              <a href="https://captionmeme.herokuapp.com/" style={styles.a} className="card-link" target="_blank" rel="noreferrer">Deployed Code</a>
              <a href="https://github.com/jordanlindgren/GroupProject2" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>

        <div style={styles.card}className="card col-10 col-md-5 col-lg-3">
            <a href="https://cleadi.github.io/nextflix/" target="_blank" rel="noreferrer"><img className="card-img-top" src={movieImage} alt="Film equipment" /></a>
            <div className="card-body">
              <h5 className="card-title">Nextflix Movie Favorites</h5>
              <p style={styles.p} className="card-text">This app allows the user to search movies and add titles to a favorites list. I coded the JavaScript and jQuery for the landing page and served as Project Manager.</p>
            </div>
            <div className="card-body">
              <a href="https://cleadi.github.io/nextflix/" style={styles.a}className="card-link" target="_blank" rel="noreferrer">Deployed Code</a>
              <a href="https://github.com/ljhofer/nextflix" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>

        <div style={styles.card} className="card col-10 col-md-5 col-lg-3">
            <a href="https://ljhofer.github.io/06-server-side-apis-weather-dashboard/" target="_blank" rel="noreferrer"><img className="card-img-top" src={weatherImage} alt="Foggy landscape" /></a>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p style={styles.p} className="card-text">The page allows the user to search by city and displays current weather and a five-day forecast.</p>
            </div>
            <div className="card-body">
              <a href="https://ljhofer.github.io/06-server-side-apis-weather-dashboard/" style={styles.a} className="card-link" target="_blank" rel="noreferrer">Deployed Code</a>
              <a href="https://github.com/ljhofer/06-server-side-apis-weather-dashboard" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>

        <div style={styles.card} className="card col-10 col-md-5 col-lg-3">
            <a href="https://ljhofer-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer"><img className="card-img-top" src={blogImage} alt="Foggy landscape" /></a>
            <div className="card-body">
              <h5 className="card-title">Tech Blog</h5>
              <p style={styles.p} className="card-text">This Tech Blog allows users to see all blog posed and comment created on the page. Onece logged in users can comment on posts, as well as create, update, and delete their own posts.</p>
            </div>
            <div className="card-body">
              <a href="https://ljhofer-tech-blog.herokuapp.com/" style={styles.a} className="card-link" target="_blank" rel="noreferrer">Deployed Code</a>
              <a href="https://github.com/ljhofer/mvc-tech-blog" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>

        <div style={styles.card} className="card col-10 col-md-5 col-lg-3">
            <a href="https://github.com/ljhofer/sql-employee-tracker" target="_blank" rel="noreferrer"><img className="card-img-top" src={employeeImage} alt="Table with laptops, headphones, snacks, and drinks" /></a>
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p style={styles.p} className="card-text">This command line app allows users to create deparments, roles, and employees in their database. It also allows them to update and delete as necessary.</p>
            </div>
            <div style={styles.singleLink} className="card-body">
              <a href="https://github.com/ljhofer/sql-employee-tracker" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>
        
        <div className="card col-10 col-md-5 col-lg-3">
            <a href="https://gist.github.com/ljhofer/d8682f596f60a59e280b1f8f07cf43b2" target="_blank" rel="noreferrer"><img className="card-img-top" src={emailImage} alt="At symbol" /></a>
            <div className="card-body">
              <h5 className="card-title">Email Validation Gist</h5>
              <p style={styles.p} className="card-text">I wrote a gist explaining a regular expression for validating emails. It details the different sections of the regex and gives examples of their uses.</p>
            </div>
            <div className="card-body">
              <a href="https://gist.github.com/ljhofer/d8682f596f60a59e280b1f8f07cf43b2" style={styles.a} className="card-link" target="_blank" rel="noreferrer">GitHub Gist</a>
            </div>
        </div>
      </section>
    </div>
  );
}
