import React from 'react'
import useCart from '../../hook/useCart'

export default function Cart() {
  const {data,isLoading,isError,error}=useCart();
  return (
    <div>Cart</div>
  )
}
