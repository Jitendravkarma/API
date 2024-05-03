import express from 'express';
import { status, product1, product2 } from '../controllers/controllers.js';
const Router = express.Router();
Router.route("/status").get(status);

Router.route("/product1").get(product1);

Router.route("/product2").get(product2);

export default Router;