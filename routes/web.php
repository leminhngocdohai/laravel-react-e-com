<?php

use App\Http\Controllers\Product\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('/');

Route::get('/', function () {
    return Inertia::render('Frontend/Home');
})->name('/');


Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Backend/Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    // Category
    Route::get('/category', function () {
        return Inertia::render('Backend/Category/Index');
    })->middleware(['auth', 'verified'])->name('dashboard.category');
    Route::get('/category/create', function () {
        return Inertia::render('Backend/Category/Create');
    })->middleware(['auth', 'verified'])->name('dashboard.category.create');
    Route::get('/category/edit/{id}', function ($id) {
        return Inertia::render('Backend/Category/Edit', [
            'id' => $id,
        ]);
    })->middleware(['auth', 'verified'])->name('dashboard.category.edit');
    Route::get('/category/destroy/{id}', [CategoryApi::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.category.destroy');

    Route::get('/product', function () {
        return Inertia::render('Backend/Product/Index');
    })->middleware(['auth', 'verified'])->name('dashboard.product');
    Route::get('/product/create', [ProductController::class, 'create'])->middleware(['auth', 'verified'])->name('dashboard.product.create');

    Route::get('/user', function () {
        return Inertia::render('Backend/User/Index');
    })->middleware(['auth', 'verified'])->name('dashboard.user');

    Route::get('/order', function () {
        return Inertia::render('Backend/Order/Index');
    })->middleware(['auth', 'verified'])->name('dashboard.order');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('welcome');

// Category
Route::get('/category/index', function () {
    return Inertia::render('Backend/Category/Category');
})->name('category.index');

require __DIR__.'/auth.php';
