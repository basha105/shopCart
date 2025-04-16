import Homepage from './HomePage.jsx';
import Shoppage from './ShopPage.jsx';
import Cartpage from './CartPage.jsx';

const routes = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "shop",
        element: <Shoppage />
    },
    {
        path: "cart",
        element: <Cartpage />
    },
];

export default routes;