import {Router} from 'express';
import * as userController from '../controllers/user';
import * as chatController from '../controllers/chatgpt';
import * as conversionController from '../controllers/conversation';

export const router = Router();

router.get('/user/', userController.getUser);
router.post('/user/add', userController.addUser);
router.get('/chat', chatController.getChat);
router.get('/chat/user/:browser/:ip', chatController.getChatUserBrowserIp);
router.post('/conversation/add/:id', conversionController.addConversation);
