import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux';

function Shop() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
        <h2>Increment/Decrement Amount</h2>
        {/* <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}> - </button>
        Add to cart
        <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositeMoney(100))}}> + </button> */}

        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}> - </button>
        Add to cart
        <button className="btn btn-primary mx-2" onClick={() => {depositeMoney(100)}}> + </button>
    </div>
  )
}

export default Shop
