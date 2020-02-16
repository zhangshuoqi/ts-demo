import React from 'react'
import { Layout, Menu, LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { Route, Link } from 'react-router-dom'
import Employee from './employee'
import 'antd/dist/antd.css';
import './App.css'
import Setting from './setting'
const { Header, Content, Footer } = Layout

const App = ({match}: any) => {
  let defaultKey = match.url.replace('/', '') || 'employee'
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
            className="menu"
          >
            <Menu.Item key="employee"><Link to="/employee">员工管理</Link></Menu.Item>
            <Menu.Item key="setting"><Link to="/setting">系统设置</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path="/" exact component={Employee} />
            <Route path="/emplioyee" exact component={Employee} />
            <Route path="/setting" exact component={Setting} />
            <Employee />
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </LocaleProvider>
  )
}


export default App
  