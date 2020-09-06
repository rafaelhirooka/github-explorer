import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28057280?s=460&u=e9abff7e74551503b72f4b491e2d682389dc6f38&v=4"
            alt="Rafael Hirooka"
          />
          <div>
            <strong>rafaelhirooka/gobarber</strong>
            <p>Blalblablalbla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28057280?s=460&u=e9abff7e74551503b72f4b491e2d682389dc6f38&v=4"
            alt="Rafael Hirooka"
          />
          <div>
            <strong>rafaelhirooka/gobarber</strong>
            <p>Blalblablalbla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/28057280?s=460&u=e9abff7e74551503b72f4b491e2d682389dc6f38&v=4"
            alt="Rafael Hirooka"
          />
          <div>
            <strong>rafaelhirooka/gobarber</strong>
            <p>Blalblablalbla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
