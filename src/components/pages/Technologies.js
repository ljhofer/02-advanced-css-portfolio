import resumeImage from '../../images/resume.pdf';
import resumeScreenShot from '../../images/resume_hofer.jpg';

// Styling for the HTML elements generated in this component
const styles = {
  h1: {
    textAlign: 'center',
    marginBottom: 20,
  },
  h2: {
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    outlineWidth: 2,
    outlineColor: '#8d968e',
    outlineStyle: 'groove',
    marginBottom: 30
  },
  uldiv: {
    justifyContent: 'center',
    marginLeft: '20%',
    marginRight: '15%',
    marginBottom: 30
  },
  ul: {
    display: 'inline',
    justifyContent: 'center',
  },
};

// Generates the HTML that displays in the Resume page
export default function Technologies() {
  return (
    <div>
          
      <div>
        <h2 style={styles.h2}>Technical Skills</h2>
        <div className='row d-flex justify-content-center'>
          <div className='col-4' >
            <div style={styles.uldiv}>
              <ul style={styles.ul}>
                  <li>HMTL</li>
                  <li>CCS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Handlebars</li>
                  <li>Git</li>
                  <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className='col-4'> 
            <div style={styles.uldiv}>
              <ul style={styles.ul}>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>React.js</li>
                  <li>Jest</li>                  
              </ul>
            </div> 
          </div>
        </div>
      </div>

      <h1 style={styles.h1}>Resume</h1>

      <a href={resumeImage} target="_blank" rel='noreferrer'><img src={resumeScreenShot} alt="Resume" style={styles.img}/></a>
    </div>
  );
}
