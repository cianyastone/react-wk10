import { useContext } from "react";
import { Layout } from 'antd';
// import NavBar from "../components/NavBar";
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import CartModalformobile from '../components/CartModalformobile';
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;

function Cart() {
    const { state: { page: { title } } } = useContext(StoreContext);
    return (
        <>
        <Header style={{ position: 'fixed', zIndex: 99, width:'100%'}} className="layout-header new-header">
            <AppHeader title="Rock Bae"/>
        </Header>
        <Layout className="container main-layout">
            <Layout className="bg-gray">
                <Header className="layout-header">
                    <AppHeader title={title} />
                </Header>
                <Content className="layout-content content-activity">
                    <CartModalformobile />
                </Content>
                <Footer className="layout-footer">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
        </>
    );
}

export default Cart;