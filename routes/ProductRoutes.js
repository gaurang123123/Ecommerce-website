import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createproductcontroller ,getProductController , getSingleProductController,productPhotoController,deleteProductController,productFiltersController,productCountController,productListController,realtedProductController,braintreePaymentsController,braintreeTokenController} from '../controllers/ProductController.js';
import formidable from 'express-formidable';
const router = express.Router();

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(), createproductcontroller);

//route get

router.get('/get-product',getProductController)
export default router;

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//payment route
router.get('/braintree/token',braintreeTokenController)

//payment

router.post('/braintree/payment',requireSignIn,braintreePaymentsController)