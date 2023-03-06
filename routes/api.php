<?php

use App\Http\Controllers\Category\CategoryApi;
use App\Http\Controllers\Product\ProductApi;
use App\Http\Controllers\Attribute\AttributeApi;
use App\Http\Controllers\User\UserApi;
use App\Http\Controllers\Order\OrderApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Categories
Route::prefix('category')->group(function () {
    Route::get('/', [CategoryApi::class, 'index']);
    Route::post('/store', [CategoryApi::class, 'store'])->name('api.category.store');
    Route::get('show/{id}', [CategoryApi::class, 'show']);
    Route::post('/update/{id}', [CategoryApi::class, 'update'])->name('api.category.update');
    Route::get('/destroy/{id}', [CategoryApi::class, 'destroy'])->name('api.category.destroy');
});

// Products
Route::prefix('product')->group(function () {
    Route::get('/', [ProductApi::class, 'index']);
    Route::get('show/{id}', [ProductApi::class, 'show']);
});

// Attributes
Route::prefix('attribute')->group(function () {
    Route::get('/', [AttributeApi::class, 'index']);
    Route::get('show/{id}', [AttributeApi::class, 'show']);
});

// User
Route::prefix('user')->group(function () {
    Route::get('/', [UserApi::class, 'index']);
    Route::get('show/{id}', [UserApi::class, 'show']);
});

// Orders
Route::prefix('order')->group(function () {
    Route::get('/', [OrderApi::class, 'index']);
    Route::get('show/{id}', [OrderApi::class, 'show']);
});

