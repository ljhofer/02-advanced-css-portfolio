import React from 'react';
import { FaGithub, FaLinkedin} from "react-icons/fa";

// Styling for the HTML elements generated in this component
const styles = {
  h1: {
    textAlign: 'center',
  },
  contactIcon: {
    margin: 25,
    fontSize: '7em',
    color: 'black'
  },
  emailDiv: {
    textAlign: 'center',
    marginBottom: 55, 
    marginTop: 25 
  },
  email: {
    fontSize: '2em',
    color: 'black',
    textDecoration: 'none',
    outlineWidth: 1,
    outlineColor: '#8d968e',
    outlineStyle: 'groove',
    backgroundColor: '#bbccbd',
    padding: 10,
    
  },

};

// Generated the HTML to be displayed on the Contact page
export default function Contact() {
  return (
    <div >
      <h1 style={styles.h1}>Check Me Out:</h1>

      
        <div className="container text-center">
          <a 
              href="https://github.com/ljhofer" 
              target="_blank" rel="noreferrer">
                  <FaGithub style={styles.contactIcon}/>
          </a>
          <a 
              href="https://www.linkedin.com/in/laura-hofer/" 
              target="_blank" rel="noreferrer">
                  <FaLinkedin style={styles.contactIcon} />
          </a>
        </div>  
        <h1 style={styles.h1}>Contact Me:</h1>
        <div style={styles.emailDiv}>  
          <a style={styles.email}
              href="mailto:ljhofer@gmail.com" 
              target="_blank" rel="noreferrer">
              ljhofer@gmail.com
          </a>
        </div>
      
    </div>
  );
}
