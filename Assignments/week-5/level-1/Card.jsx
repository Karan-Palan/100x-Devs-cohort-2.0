import React from 'react';

const styles = {
  card: {
    border: '1px solid #4CAF50', 
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#DFF0D8',  
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '8px',
    color: '#4CAF50', 
  },
  interestsList: {
    listStyleType: 'none',
    padding: 0,
  },
  interestItem: {
    background: '#4CAF50', 
    color: '#fff',  
    padding: '4px 8px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  socialLinks: {
    marginTop: '16px',
    display: 'flex',
    gap: '8px',
  },
  link: {
    textDecoration: 'none',
    padding: '8px 16px',
    color: '#fff', 
    backgroundColor: '#4CAF50',  
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

function Card(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{props.name}</h2>
      <p>{props.description}</p>
      <h3>My Interests</h3>
      <ul style={styles.interestsList}>
        {props.interests.map((interest) => (
          <li key={interest} style={styles.interestItem}>
            {interest}
          </li>
        ))}
      </ul>
      <div style={styles.socialLinks}>
        <a href={props.linkedin} style={styles.link}>
          Linkedin
        </a>
        <a href={props.twitter} style={styles.link}>
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Card;
