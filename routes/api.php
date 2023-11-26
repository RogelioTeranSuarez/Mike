<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [RegisterController::class,'login']);

Route::get('/', function () {
    return view('welcome');
});

