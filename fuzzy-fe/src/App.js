import './App.css';
import {Layout} from "antd";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import ResultPage from "./page/ResultPage";

const { Header, Content} = Layout;

function App() {
  return (
      <Layout className="layout">
        <Header style={{
            height: '80px'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                padding: '0 50px',
                display: 'flex',
                justifyContent: "flex-end",
                alignItems: 'center',
                fontSize: '16px',
                color: 'white',
                textTransform: 'uppercase'
            }}>
                <Link style={{
                    marginRight: '20px',
                    color: 'white'
                }} to={"/"}>
                    Trang chủ
                </Link>
                <div style={{
                    marginLeft: '20px'
                }}>
                    Liên hệ
                </div>
            </div>
        </Header>
        <Content
            style={{
              padding: '0 100px',
            }}
        >
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/result" element={<ResultPage/>}/>
            </Routes>
        </Content>
      </Layout>
  );
}

export default App;
