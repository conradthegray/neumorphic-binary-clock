import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>
      <Header />

      <div>
        <h1>This page does not exist</h1>
        <Link to="/">Take me back to the clock</Link>
      </div>

      <Footer />
    </Container>
  </Layout>
);

export default NotFoundPage;
