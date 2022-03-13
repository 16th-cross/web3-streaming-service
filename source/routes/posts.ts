import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/get-all', controller.getAll);
router.post('/add-video', controller.addVideo);

export = router;