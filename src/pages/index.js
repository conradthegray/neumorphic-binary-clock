import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BinaryClock from '../components/BinaryClock';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';

const IndexPage = () => (
  <Layout>
    <SEO title="Neumorphic Binary Clock #Neumorphism" />

    <Container>
      <Header />
      <BinaryClock />
      <Footer />
    </Container>
  </Layout>
);

export default IndexPage;
