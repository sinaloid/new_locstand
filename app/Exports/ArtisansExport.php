<?php

namespace App\Exports;

use App\Models\Artisan;
use Maatwebsite\Excel\Concerns\FromCollection;

use App\Invoice;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ArtisansExport implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view() : View
    {
        return view('exports.artisans',[
            'artisans' => Artisan::all()
        ]);
    }
}
