import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <>
    return code ? <Dashboard code = {code}/> : <Login/>
    </>
  );
}

export default App;
