import React from 'react';
import { Link } from 'react-router-dom';

import loginSVG from '../../assets/svg/login.svg';
import statisticSVG from '../../assets/svg/statistic.svg';
import languageSVG from '../../assets/svg/language.svg';
import optionsSVG from '../../assets/svg/settings.svg';

const Header: React.FC = () => {
  return (
    <header>
      <h1>OnPomodoro</h1>
      <nav>
        <ul>
          <li>
            <Link to="/statistic">
              <img src={statisticSVG} alt="Ваша статистика" />
              <p>Statistic</p>
            </Link>
          </li>
          <li>
            <button>
              <img src={languageSVG} alt="Выбор языка интерфейса" />
              <p>Language</p>
            </button>
          </li>
          <li>
            <button>
              <img src={optionsSVG} alt="Настройки таймера" />
              <p>Options</p>
            </button>
          </li>
          <li>
            <Link to={'/login'}>
              <img src={loginSVG} alt="Войти в аккаунт" />
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;