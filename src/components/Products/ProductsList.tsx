import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of products
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
            >
                {productsArray.map(
                    (
                        {
                            id,
                            title,
                            description,
                            capacity,
                            type,
                            price,
                            image,
                        }: Product,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
