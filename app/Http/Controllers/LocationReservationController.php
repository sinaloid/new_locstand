<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stand;
use App\Models\Artisan;
use App\Models\LocationReservation;

class LocationReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
     $datas = LocationReservation::all();
     return view('location_reservation', compact('datas'));
    }

    public function recherche(Request $request)
    {

        $stand = Stand::where('numero_stand', $request->recherche)->first();
        $datas = [];
        //dd($stand);
        if($stand){
            $datas = LocationReservation::where('stand_id',$stand->id)->get();
        }
        
     return view('location_reservation', compact('datas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request->all());
        LocationReservation::create($request->all());

        return redirect()->route('location_reservation');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = LocationReservation::where("id",$id)->first();
        return view('afficher_stand', compact('data'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = LocationReservation::where("id",$id)->first();
        return view('editer_stand', compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $locreserv = LocationReservation::find($id);

        $locreserv->type_stand = $request->type_stand;
        $locreserv->numero_stand = $request->numero_stand;
        $locreserv->save();
        return redirect()->route('stand.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $stand = LocationReservation::find($id);

        $stand->delete();
        return redirect()->route('stand.index');
    }
}