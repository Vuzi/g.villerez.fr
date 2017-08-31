import * as Express from 'express'
import data from '../data'

const router = Express.Router()

// Test
router.get('/', (req, res, next) => {
	res.render('index.html', data);
})

export default router