import React from 'react';
import Layout from '../components/Layout';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Home = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-4">This is the home page of the app.</p>
        <ThemeSwitcher />
      </div>
    </Layout>
  );
};

export default Home;
