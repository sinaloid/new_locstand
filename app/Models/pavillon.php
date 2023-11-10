<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pavillon extends Model
{

    use HasFactory;
    protected $fillable = [
        'nom',
        'type'
    ];

    public function stands(){

        return $this->hasMany(Stand::class);
    }
}
