import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card4 = () => {

  const context = useContext(ShoppingCartContext)

  const showProduct = () => {
   context.openProductDetail()
   context.setTarget(4)
   context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event) => {
   event.stopPropagation()
   context.setCount(context.count + 1)
   context.setCartProducts([...context.cartProducts, ])
   context.openCheckoutSideMenu()
   context.setAñadiendo(4)
   context.closeProductDetail()
   console.log('CART: ', context.cartProducts)
  }

  return(
     <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
          onClick={() => showProduct()}
        >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Squirtle</span>
            <img className='w-full h-full object-cover rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91FvZajNygLlkV4C9he6gs04igeMxdO349Q&usqp=CAU' alt='Agua' />
            <div 
              className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
              onClick={(event) => addProductsToCart(event)}>
                <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
            </div>
        </figure>
        <p className='flex justify-between'>
           <span className='text-sm font-light'>Pokemon</span>
           <span className='text-lg font-medium'>$225</span>
        </p>
     </div>
  )
}

export default Card4