const express = require('express')
const router = express.Router()

const newController = require('../controllers/newsController')
/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Retrieve a list of news.
 *     tags:
 *       - News
 *     description: Get all news.
 *     responses:
 *       200:
 *         description: List of news.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   post_by:
 *                     type: string
 *                   count_view:
 *                     type: integer
 *                   img:
 *                     type: string
 *                   category_id:
 *                     type: string
 *             example:
 *               - id: 1
 *                 title: "AI in 2022"
 *                 description: "We have launched a new feature for our platform."
 *                 post_by: "thitipan wo."
 *                 count_view: 5
 *                 img: "https://example.com/image1.jpg"
 *                 category_id: "5e3fc0a6-4a5c-23g51-aab8-1774cd0d2906"
 *               - id: 2
 *                 title: "The Future of AI"
 *                 description: "Exploring the upcoming trends in artificial intelligence."
 *                 post_by: "john doe"
 *                 count_view: 10
 *                 img: "https://example.com/image2.jpg"
 *                 category_id: "5esdfg34-4a5c-4a61-aab8-1774cd0d2906"
 *               - id: 3
 *                 title: "AI Ethics"
 *                 description: "Discussing the ethical considerations in AI development."
 *                 post_by: "jane smith"
 *                 count_view: 3
 *                 img: "https://example.com/image3.jpg"
 *                 category_id: "5e3fc0a6-4a5c-4a61-aab8-17sdfsdfd0d2906"
 *       400:
 *         description: News not found.
 *       500:
 *         description: Server error.
 */

router.get('/',newController.readlist) // get list of news

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     summary: Retrieve a news item by ID.
 *     tags:
 *       - News
 *     description: Get details of a single news article using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of a news 
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A specific news article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 post_by:
 *                   type: string
 *                 count_view:
 *                   type: integer
 *                 img:
 *                   type: string
 *                 category_id:
 *                   type: string
 *             example:
 *               title: "AI in 2022"
 *               description: "We have launched a new feature for our platform."
 *               post_by: "thitipan wo."
 *               count_view: 5
 *               img: "https://example.com/image.jpg"
 *               category_id: "5e3fc0a6-4a5c-4a61-aab8-1774cd0d2906"
 *       400:
 *         description: a News ID not found.
 *       500:
 *         description: Server error.
 */
router.get('/:id',newController.getnewByID) // get new by ID

/**
 * @swagger
 * /api/news:
 *   post:
 *     summary: Create a new news article.
 *     tags:
 *       - News
 *     description: Add a new news article.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               post_by:
 *                 type: string
 *               count_view:
 *                 type: integer
 *               img:
 *                 type: string
 *               category_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: News article created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 post_by:
 *                   type: string
 *                 count_view:
 *                   type: integer
 *                 img:
 *                   type: string
 *                 category_id:
 *                   type: string
 *             example:
 *               title: "AI in 2022"
 *               description: "We have launched a new feature for our platform."
 *               post_by: "thitipan wo."
 *               count_view: 5
 *               img: "https://example.com/image.jpg"
 *               category_id: "5e3fc0a6-4a5c-4a61-aab8-1774cd0d2906"
 *       400:
 *         description: Invalid category ID.
 *       401:
 *         description: Missing required fields.
 *       500:
 *         description: Server error.
 */
router.post('/', newController.createnew) // post method create a new 

/**
 * @swagger
 * /api/news/category:
 *   post:
 *     summary: Create a new category. 
 *     tags:
 *       - News
 *     description: Add a new category to association with new model.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 category:
 *                   type: string
 *       400:
 *         description: Missing category fields.
 *       500:
 *         description: Server error.
 */
router.post('/category',newController.createcategory) // create a category to be foreignKey with a new model
// router.get('/category',readlistController.readcategory)

/**
 * @swagger
 * /api/news/{id}:
 *   put:
 *     summary: Update a news by ID.
 *     tags:
 *       - News
 *     description: Update an existing news article using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the news article to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               post_by:
 *                 type: string
 *               count_view:
 *                 type: integer
 *               img:
 *                 type: string
 *               category_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: A news updated successfully.
 *       400:
 *         description: A new ID not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id',newController.updatenew) // update data in a new

/**
 * @swagger
 * /api/news/{id}:
 *   delete:
 *     summary: Delete a news by ID.
 *     tags:
 *       - News
 *     description: Remove a news from the database using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the news article to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A new deleted successfully.
 *       404:
 *         description: A new ID not found.
 *       500:
 *         description: Server error.    
 */
router.delete('/:id',newController.deletenew) // delete a new by id


module.exports = router;