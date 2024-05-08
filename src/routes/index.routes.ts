import express from 'express';
import userRoutes from './user.routes';
import productRoutes from './product.routes';
import cartRoutes from './cart.routes';
import orderRoutes from './order.routes';

const appRoutes = express.Router();

appRoutes.use('/user', userRoutes);
appRoutes.use('/product', productRoutes);
appRoutes.use('/cart', cartRoutes);
appRoutes.use('/order', orderRoutes);

export default appRoutes;