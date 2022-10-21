import './App.css';
import {Layout, Menu} from "antd";
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Layout className="layout">
        <Header>
        </Header>
        <Content
            style={{
              padding: '0 50px',
            }}
        >
          <div className="site-layout-content">Content</div>
        </Content>
      </Layout>
  );
}

export default App;
