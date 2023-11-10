<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pavillon;
use Illuminate\Support\Facades\Hash;

use App\Models\Stand;

class PavillonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
     $datas = Pavillon::all();
     return view('pavillon.liste_pavillon', compact('datas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pavillon.ajouter_pavillon');
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
        Pavillon::create($request->all());
        return redirect()->route('pavillon.index');
        //return back();
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
        $data = Pavillon::where("id",$id)->first();
        $stands = $data->stands;
        return view('pavillon.afficher_pavillon', compact('data','stands'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Pavillon::where("id",$id)->first();
        return view('pavillon.modifier_pavillon', compact('data'));
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
        $pavillon = Pavillon::find($id);

        $pavillon->nom = $request->nom;
        $pavillon->type = $request->type;
        $pavillon->save();
        return redirect()->route('pavillon.index');
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
        $pavillon = Pavillon::find($id);

        $pavillon->delete();
        return redirect()->route('pavillon.index');
    }
}
