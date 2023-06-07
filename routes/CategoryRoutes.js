import express from "express";
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js';
// import CreateCategory from "../client/src/pages/Admin/CreateCategory";
import CreateCategory,{updateCategoryController,categoryController,singlecategoryController,deletecategorycontroller} from "../controllers/CreateCategory.js";

const router = express.Router();

//routes

router.post('/create-category',requireSignIn,isAdmin,CreateCategory)

//update

router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)
//get all category
router.get('/get-category',categoryController)

//single category
router.get('/singlecategory/:slug',singlecategoryController)
//delete category

router.delete('/delete-category/:id',requireSignIn,isAdmin,deletecategorycontroller)
export default router;