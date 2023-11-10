<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocationReservation extends Model
{
    use HasFactory;

    protected $fillable = [
        "etat_stand",
        "date_debut",
        "date_fin",
        "artisan_id",
        "stand_id",
    ];
}
