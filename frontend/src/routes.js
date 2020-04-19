import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AddItem, Cart, ListItem } from './pages'


const Routes = () => {
  return (
<switch>
  <Route path='/lista-item' component={ListItem} />
  <Route path="adicionar-item" component={AddItem} />
  <Route path="carrinho" component={Cart} />
  <Redirect path="/" to="/lista-item" />
</switch>
  )
}

export default Routes
