import React, {useState} from 'react';
import './Login.scss'
import logo from '../../assets/vtb.svg'
import {useLoginUserMutation} from "../../services/userAPI.js";

function Login(props) {
  const [isLoginValid, setIsLoginValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  const [userLogin,] = useLoginUserMutation();

  const handleClick = async () => {
    await userLogin({login, password}).then((user) => {
     props.setAuth(true);
     props.setUser(user.data);
     console.log(user.data);
    })
  }

  return (
    <div className={'auth-page'}>
      <div className="auth-block">
        <div className="auth-aria">
          <div className="container">
            <img src={logo} alt=""/>
            <h1>Вход на платформу</h1>
            <div className={'input-group'}>
              <div className="input">
                <label htmlFor={'login'}>Логин</label>
                <input className={`default ${isLoginValid && 'error'}`} onChange={(e) => setLogin(e.target.value)} id={'login'} type="text"/>
                {
                  isLoginValid && <span className={'error-message'}>Заполните поле</span>
                }
              </div>
              <div className="input">
                <label htmlFor={'password'}>Пароль</label>
                <input className={`default ${isPasswordValid && 'error'}`} onChange={(e) => setPassword(e.target.value)} id={'password'} type="password"/>
              </div>
            </div>
            <div className="checkbox">
              <input id={'custom'} className={'custom'} type="checkbox"/>
              <label htmlFor={'custom'}>Запомнить пароль</label>
              {
                isPasswordValid && <span className={'error-message'}>Заполните поле</span>
              }
            </div>
            <button onClick={handleClick}>Войти</button>
          </div>
        </div>
      </div>
      <div className="media-block">

      </div>
    </div>
  );
}

export default Login;
