<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artisan;
use Illuminate\Support\Facades\Hash;

class ArtisanControlleur extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
     $datas = Artisan::all();
     return view('liste_artisan', compact('datas'));


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
        // dd($request->all());
        Artisan::create($request->all());

        return redirect()->route('artisan.index');
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
        $data = Artisan::find($id)->first();
        return view('afficher_artisan', compact('data'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $data = Artisan::find($id)->first();
        return view('editer_artisan', compact('data'));
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
        //
        $artisan = Artisan::find($id);

        $artisan->nom = $request->nom;
        $artisan->prenom = $request->prenom;
        $artisan->raison_social = $request->raison_social;
        $artisan->contact = $request->contact;
        $artisan->domaine_activite = $request->domaine_activite;
        $artisan->email = $request->email;
        $artisan->ville = $request->ville;
        $artisan->pays = $request->pays;
        $artisan->responsable_stand = $request->responsable_stand;
        $artisan->accompagnateur1 = $request->accompagnateur1;
        $artisan->accompagnateur2 = $request->accompagnateur2;
        $artisan->type_stand = $request->type_stand;
        $artisan->nom_pavillon = $request->nom_pavillon;
        $artisan->save();
        return redirect()->route('artisan.index');
    
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
        $artisan = Artisan::find($id);

        $artisan->delete();
        return redirect()->route('artisan.index');
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         