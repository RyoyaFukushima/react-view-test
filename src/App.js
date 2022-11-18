import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { BetuFile } from './pages/BetuFile';
import { NotAuthedBetu }   from './pages/NotAuthedBetu';

// 同じ画面のなかで条件に応じて切り替え
function DivideAuthOrNot(){
  // 認証判断基準をboolでやってみた
  const isYOUAUTH = true;
  if(isYOUAUTH){
    return <div>
    <p>トップページ</p>
    <p><Link to="/betu">別へ</Link></p>
    </div>
  }else{
    // 条件に応じて画面で別ファイルのビューにする
    return NotAuthedBetu();
  }
}
function App() {
  /*const isYOUAUTH = true;
  // index element
  const TopPage = () => {
  };*/
  // localhost/betuで別ファイルへいく
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<DivideAuthOrNot />} />
      <Route path="betu" element={<BetuFile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
