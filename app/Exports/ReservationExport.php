<?php

namespace App\Exports;

use App\Models\LocationReservation;
use Maatwebsite\Excel\Concerns\FromCollection;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ReservationExport implements FromView
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view() : View
    {
        return view('exports.reservations',[
            'reservations' => LocationReservation::all()
        ]);
    }
}
