import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para el inicio de sesión
  };

  return (
    <div className="login-form-container">
      <h2>Entra a tu cuenta</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Correo:
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="login-input"
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            placeholder="Contraseña"
            required
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
      <div className="extra-links">
        <a href="#forgot-password" className="forgot-password-link">
          ¿Olvidaste tu contraseña? <span>RECUPERALA AQUÍ</span>
        </a>
        <a href="#register" className="register-link">
          ¿Aún no estás registrado? <span>REGISTRATE AQUÍ</span>
        </a>
      </div>
      <div className="social-buttons">
        <button className="social-button google">Iniciar con Google</button>
        <button className="social-button facebook">Iniciar con Facebook</button>
      </div>
    </div>
  );
};

export default LoginForm;