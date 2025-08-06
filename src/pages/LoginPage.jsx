import LoginForm from '../components/LoginForm';

function LoginPage({ setIsAuthenticated, setPhone }) {
  return <LoginForm setIsAuthenticated={setIsAuthenticated} setPhone={setPhone} />;
}

export default LoginPage;