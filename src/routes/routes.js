import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Discount from '~/pages/Discount';
import Seat from '~/pages/Seat';
import Activate from '~/pages/Activate';
import HotelPlane from '~/pages/HotelPlane';
import Apartment from '~/pages/Apartment';
import Flight from '~/pages/Flight';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.discount, component: Discount },
    { path: config.routes.seat, component: Seat },
    { path: config.routes.activate, component: Activate },
    { path: config.routes.hotelplane, component: HotelPlane },
    { path: config.routes.apartment, component: Apartment },
    { path: config.routes.flight, component: Flight },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
