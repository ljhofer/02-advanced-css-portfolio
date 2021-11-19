import headshot from '../../images/blurred.png'

// Styling for the HTML elements generated by this component
const styles = {
  h1: {
    textAlign: 'center',
    marginBottom: 20,
  },
  div: {
    textAlign: 'center',
  },
  p: {
    fontSize: 25,
    padding: 25,
    backgroundColor: '#bbccbd',
    margin: 20,
  },
};

// Generates the HTML to be displayed in the About section
export default function About() {
  return (
    <>
      <h1 style={styles.h1}>About Me</h1>
      <div style={styles.div}>
        <img id='head-shot' src={headshot} alt='Laura Hofer' />
        <p style={styles.p}>
        After teaching elementary school for 11 years, I am looking forward to transitioning into a career in web development. I love to travel and learn about different cultures, explore nature, and sample new foods.  I am an avid reader and enjoy reading many genres. In addition, I am passionate about the ethical treatment of animals. I live in Minnesota with my husband, dog, cat, and two foster chickens.
        </p>
      </div>
    </>
  );
}
