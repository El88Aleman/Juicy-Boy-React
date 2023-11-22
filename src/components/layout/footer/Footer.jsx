const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>&copy; {new Date().getFullYear()} Juicy Boy</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    fontFamily: "bitwise",
    backgroundColor: "#E66FDD",
    padding: "20px 0",
    marginTop: "50px",
    textAlign: "center",
    position: "static",
    bottom: 0,
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    fontSize: "20px",
    color: "#010001",
  },
};

export default Footer;
