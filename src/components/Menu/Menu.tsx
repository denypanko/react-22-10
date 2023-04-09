import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <Button color="inherit">About</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Payment</Button>
            <NavLink to="/cart">Cart</NavLink>
        </>
    )
}
export default Menu
