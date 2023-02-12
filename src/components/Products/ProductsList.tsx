import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This Iphone 14 Pro"
                        type="phone"
                        capacity="512"
                        price={999}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13 Pro"
                        description="This Iphone 13 Pro"
                        type="phone"
                        capacity="256"
                        price={799}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12 Pro"
                        description="This Iphone 12 Pro"
                        type="phone"
                        capacity="128"
                        price={699}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
