import './App.css';
import Menu from './containers/Menu';
import Information from './containers/Information';
import Button from './containers/Button';
import Hello from './containers/Hello';
import Car from './containers/Car';
import Login from './containers/Login';


const App = () => {
  const userName = "Agirato";
  const isLogin = false;

  const handleButtonClick = () => {
    alert('Nút đã được nhấn!');
  };


  return (
    <div>
      <h1>Menu</h1>
      <Information userName={userName} />
      <Menu />
      <Button onClick={handleButtonClick} />
      {!isLogin && <div>Chưa đăng nhập</div>}
      <div className="App">
        <Hello />
      </div>
      <div className="App">
        <Car />
      </div>
      <div>
        <h1>Ứng dụng Đăng Nhập</h1>
        <Login /> {/* Sử dụng component Login */}
      </div>

    </div>

  );
}

export default App;