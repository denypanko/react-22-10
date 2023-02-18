import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}
const ProductsListItem = ({
    title,
    description,
    capacity,
    type,
    price,
    image,
}: Product) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">{price}$</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem