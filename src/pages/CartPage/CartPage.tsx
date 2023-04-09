import { Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1">
                <div>Cart</div>
                <div>
                    {Object.keys(productsInCart).map((productId) => (
                        <div key={productId}>
                            {productsObject[parseInt(productId)].title}:{' '}
                            {productsInCart[parseInt(productId)]}:
                            {productsObject[parseInt(productId)].price}
                        </div>
                    ))}
                </div>
                <CartTotal productsInCart={productsInCart} />
            </Typography>
        </div>
    )
}

export default CartPage
