import { Typography } from '@mui/material'
import CartHeader from 'components/CartHeader/CartHeader'
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
                <CartHeader productsInCart={productsInCart} />
            </Typography>
        </div>
    )
}

export default CartPage
