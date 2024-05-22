<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\CategoryController;




// Route::apiResource('products', ProductsController::class);
//get visitor
// Route::get('/getVisitor', [VisitorController::class, 'GetVisitorDetails']);
//contact page router

Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);

// patch method is not working properly update is handled by post method
Route::post('update', [ProductsController::class, 'updateProduct']);

Route::post('/addProduct', [ProductsController::class, 'addProduct']);
// Route::post('/list', [ProductsController::class, 'list']);
Route::get('/list', [ProductsController::class, 'list']);

Route::delete('delete/{id}', [ProductsController::class, 'delete']);
Route::get('product/{id}', [ProductsController::class, 'listByID']);


// Route::get('edit/{id}', [ProductsController::class, 'edit']);

Route::post('/search', [ProductsController::class, 'search']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/logout', [UserController::class, 'logout']);
Route::get('/home', [UserController::class, 'home']);


// Route::get('/categories', [CategoryController::class, 'index']);


?>