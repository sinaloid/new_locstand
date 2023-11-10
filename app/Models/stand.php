<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Stand extends Model
{
    protected $fillable = [
        'numero_stand',
        'pavillon_id',
        
    ];

    public function pavillon(){

        return $this->belongsTo(Pavillon::class);
    }
}
