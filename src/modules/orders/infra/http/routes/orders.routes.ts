import { Router } from 'express';
import { celebrate, Segments, Joi } from  'celebrate';

import OrdersController from '../controller/OrdersController';
import { join } from 'path';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);

ordersRouter.get('/:id', ordersController.show);

export default ordersRouter;
