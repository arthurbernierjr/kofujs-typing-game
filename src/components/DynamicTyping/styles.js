export const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin : '0 auto'
  },
  textarea: {
    height: '20rem',
    width: '50vw',
    minWidth: '300px',
    fontSize: '2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    '&:focus':{
      boxShadow: '0 8px 16px rgba(0,0,0,0.8)'
    }
  },
  words: {
    margin: '0 10%',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    padding: '4px',
    backgroundColor: 'black',
    color: 'ghostwhite',
    fontSize: 'calc(1.25rem + 1vw)',
    letterSpacing: '2px',
    lineheight: 'calc(1.75rem + 1vw)',
  },
  button: {
    backgroundColor: '#00ff00',
    color: 'white',
    height: '2.5rem',
    fontSize: '2rem',
    width: '12rem',
    marginTop: '2rem'
  },
  score: {
    margin: '0 10%',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    padding: '4px',
    backgroundColor: 'blue',
    color: 'ghostwhite'
  }
}
