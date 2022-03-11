import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/getall', controller.getAll);
router.post('/addvideo', controller.addVideo);

export = router;