import { Layout as AntLayout, theme } from 'antd';
import PropTypes from 'prop-types';
import TitleText from '../../atoms/TitleText';

const { Header, Footer, Content } = AntLayout;
const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};
const contentStyle = {
  padding: '0 50px',
};
const Layout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntLayout>
      <Header style={headerStyle}>
        <TitleText text='Todo List' type='warning' level={1} />
      </Header>
      <Content style={contentStyle}>
        <div
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 20,
            height: 580,
            background: colorBgContainer,
            marginTop: '1em',
            marginBottom: '1em',
            overflowX: 'hidden',
            overflowY: 'auto'
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%'
        }}
      >
        Todo List App | Simple Design ©{new Date().getFullYear()} Created by Rangga Darmajati
      </Footer>
    </AntLayout>
  )
};

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;