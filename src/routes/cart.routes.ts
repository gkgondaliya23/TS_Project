import express from "express";
import { verifyToken } from "../helpers/verifyToken";
const cartRoutes = express.Router();
import {
    addNewCart,
    getAllCarts,
} from '../controller/cart.controller';

cartRoutes.post('/add-cart',verifyToken, addNewCart);
cartRoutes.get('/get-carts',verifyToken, getAllCarts);
// cartRoutes.put('/update-product', );
// cartRoutes.delete('/delete-product', );

export default cartRoutes;