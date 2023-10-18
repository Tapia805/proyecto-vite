import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard/OrderCard'
import { totalPrice } from '../../utils' 
import './styles.css'


const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProdutcs = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProdutcs)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }
  
  return(
    <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-1 border border-black rounded-lg bg-white`}
      >
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-2xl'>My Order</h2>
        <div>
        <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.cartProducts.map(product => (
          <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className='px-6 mb-5'>
        <p className='flex justify-between items-center mb-3'>
          <span className='font-light'>Total a pagar: </span>
          <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
        <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu