<?php

use Illuminate\Support\Facades\Route;

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
//     return view('pages/index');
// });
Route::get('/', function () {
         return view('pages/index');
    });
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('menu/{id}', 'MenuController@show');
Route::get('/shop', 'Api\ShopController@index');

//my code
//Route::view('/{path?}', 'app');
