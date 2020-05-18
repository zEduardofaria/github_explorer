import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form action="">
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="tst">
          <img
            src="https://avatars0.githubusercontent.com/u/23220615?s=460&u=41eb573e1b02ef6fc1f4d08996bf0d16596c9563&v=4"
            alt="Eduardo Faria"
          />
          <div>
            <strong>zEduardofaria/gobarber-api-ts</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="tst">
          <img
            src="https://avatars0.githubusercontent.com/u/23220615?s=460&u=41eb573e1b02ef6fc1f4d08996bf0d16596c9563&v=4"
            alt="Eduardo Faria"
          />
          <div>
            <strong>zEduardofaria/gobarber-api-ts</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="tst">
          <img
            src="https://avatars0.githubusercontent.com/u/23220615?s=460&u=41eb573e1b02ef6fc1f4d08996bf0d16596c9563&v=4"
            alt="Eduardo Faria"
          />
          <div>
            <strong>zEduardofaria/gobarber-api-ts</strong>
            <p>Easy peasy lemon squeezy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
