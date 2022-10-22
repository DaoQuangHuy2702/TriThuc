import './App.css';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import ResultPage from "./page/ResultPage";

const { Header, Content} = Layout;

function App() {
  return (
      <Layout className="layout">
        <Header>
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
