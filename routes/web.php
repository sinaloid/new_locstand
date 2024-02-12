<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtisanControlleur;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StandController;
use App\Http\Controllers\PavillonController;
use App\Http\Controllers\LocationReservationController;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('/artisan', ArtisanControlleur::class);
Route::resource('/user', UserController::class);
Route::resource('/pavillon', PavillonController::class);
Route::resource('/stand', StandController::class);
Route::resource('/location_reservation', LocationReservationController::class);

Route::post('/recherche', [App\Http\Controllers\LocationReservationController::class, 'recherche'])->name('recherche');

Route::get('/list-artisan/export/', [ArtisanControlleur::class, 'export'])->name("exportArtisans");
Route::get('/list-reservation/export/', [LocationReservationController::class, 'export'])->name("exportReservations");

Route::get('/ajoute_artisan', function () {
    return view('ajoute_artisan');
})->name('ajoute_artisan');

Route::get('/liste_artisan', function () {
    return view('liste_artisan');
})->name('liste_artisan');

Route::get('/ajoute_utilisateur', function () {
    return view('ajoute_utilisateur');
})->name('ajoute_utilisateur');

Route::get('/modifier_utilisateur', function () {
    return view('modifier_utilisateur');
})->name('modifier_utilisateur');

Route::get('/supprimer_utilisateur', function () {
    return view('supprimer_utilisateur');
})->name('supprimer_utilisateur');

Route::get('/ajouter_stand', function () {
    return view('ajouter_stand');
})->name('ajouter_stand');

Route::get('/modifier_stand', function () {
    return view('modifier_stand');
})->name('modifier_stand');

Route::get('/modifier_artisan', function () {
    return view('modifier_artisan');
})->name('modifier_artisan');

Route::get('/supprimer_artisan', function () {
    return view('supprimer_artisan');
})->name('supprimer_artisan');

Route::get('/liste_stand', function () {
    return view('liste_stand');
})->name('liste_stand');

Route::get('/location_reservation',function () {

    //$datas = [];
    $datas = App\Models\LocationReservation::all();
    return view('location_reservation', compact('datas'));
})->name('location_reservation');

Route::get('/faire_location_reservation',function () {
    return view('faire_location_reservation');
})->name('faire_location_reservation');