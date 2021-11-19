import React from 'react';

const styles = {
  h1: {
    textAlign: 'center',
  },
  div: {
    margin: 15,
  }
};

// TODO: Update for this homework
export default function Contact() {
  return (
    <div >
      <h1 style={styles.h1}>Contact Page</h1>

      <form style={styles.div}>
        <div className="form-group" style={styles.div}>
          <label for="exampleFormControlInput1">Enter your name</label>
          <input type="input" className="form-control" id="exampleFormControlInput2" placeholder="" />
        </div>
                
        <div className="form-group" style={styles.div}>
          <label for="exampleFormControlInput1">Enter your email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
     
        <div className="form-group" style={styles.div}>
          <label for="exampleFormControlTextarea1">Enter your message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div style={styles.div}>
          <button type="submit" class="btn btn-secondary btn-lg">Submit</button>
        </div>
      </form>





    </div>
  );
}
