import { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { Button, Select } from "antd";
import CartSummary from "./CartSummary";
import { useContext } from "react";
import { StoreContext } from "../store"
import { AddCartItem, RemoveCartItem, SetActivityDetail } from "../actions";
import Cookie from "js-cookie";
import { Link } from 'react-router-dom';

const { Option } = Select;

export default function CartModalformobile() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };

    const { state: { cartItems }, dispatch } = useContext(StoreContext);

    useEffect(()=>{
        Cookie.set("cartItems", JSON.stringify(cartItems));
     }, [cartItems])

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
            cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
            : 0;
    }
  
    return (
        <>
        <p className="nav-item" activeClassName="nav-item--active" type="primary" onClick={showDrawer}>
            <CartSummary/>
        </p>
        <Drawer
          closable={false}
          onClose={onClose}
          visible={visible}
          className="drawer_style"
          width="350"
        >
          {cartItems.length === 0 ? (
            <div>婐ㄉ心空空如也。･ﾟ･(つд`ﾟ)･ﾟ･</div>
         ) : (
            cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <Link to={`/activity/${item.id}`}>
                        <div className="cart-image" onClick={()=>{
                            SetActivityDetail(dispatch, item.id, item.qty);
                        }}>
                            <img src={item.image} alt={item.name} />
                        </div>
                    </Link>
                    <div className="cart-item-content">
                        <div className="cart-qty">
                            <Link to={`/activity/${item.id}`} className="cart-name link">{item.name}</Link>
                            <div className="cart-item-delete" onClick={()=>RemoveCartItem(dispatch, item.id)}>
                                x
                            </div>
                        </div>
                        <div className="cart-qty">
                            <div className="product-qty">
                                數量: {"   "}
                                <Select
                                    defaultValue={item.qty}
                                    value={item.qty}
                                    className="select-style"
                                    onChange={(qty) => AddCartItem(dispatch, item, qty)}
                                    >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <Option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div className="cart-price">
                                ${item.price * item.qty}    
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
        <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
        </div>
        <Button
            className="cart-modal-btn"
            type="primary"
            >
            <span>結帳去</span>
            </Button>
    </Drawer>
    </>
);}