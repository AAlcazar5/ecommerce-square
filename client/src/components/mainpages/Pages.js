import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/NotFound/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import {GlobalState} from '../../GlobalState'

import Contact from './about/contact/Contact'
import faq from './about/faq/faq'
import terms from './about/terms/terms'
import CreateBlog from './createBlog/CreateBlog'
import DetailBlog from './detailBlog/DetailBlog'
import Home from './home/Home'
import Blogs from './blogs/Blogs'
import PaymentPageForm from './cart/PaymentPageForm'
import PaymentPage from './cart/PaymentPage'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/" exact component={Products} /> */}

            <Route path="/shop" exact component={Products} />
            <Route path="/blog" exact component={Blogs} />

            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/blog/:id" exact component={DetailBlog} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />

            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/create_blog" exact component={isAdmin ? CreateBlog : NotFound} />
            <Route path="/edit_blog/:id" exact component={isAdmin ? CreateBlog : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/contact" exact component={Contact} />
            <Route path="/faq" exact component={faq} />
            <Route path="/terms" exact component={terms} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={ PaymentPage } />
            {/* <Route path="/index" exact component= { index } /> */}

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages