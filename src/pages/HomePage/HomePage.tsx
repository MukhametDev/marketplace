import React from 'react';
import { Helmet } from 'react-helmet';
import { Div } from './styled';
interface IPropsHomePage {}

const HomePage: React.FC<IPropsHomePage> = ({}) => {
  return (
    <div>
      <Helmet>
        <title>Главная - MW Marketplace</title>
      </Helmet>
      <Div>HomePage</Div>
    </div>
  );
};

export default HomePage;
