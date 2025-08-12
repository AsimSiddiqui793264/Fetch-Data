  import { Container } from 'react-bootstrap';

  function Footer() {
    return (
      <footer className="bg-primary text-white py-3 mt-auto">
        <Container className="text-center fw-bold">
          <small>&copy; {new Date().getFullYear()} Product Showcase. All rights reserved.</small>
        </Container>
      </footer>
    );
  }

  export default Footer;
