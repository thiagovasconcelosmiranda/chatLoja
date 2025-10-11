import {Router} from 'express';
import * as userController from '../controllers/user';
import * as chatController from '../controllers/chatgpt';

export const router = Router();

router.get('/user/:id/:ip/:browser', userController.getUser);
router.get('/chat', chatController.getChat);