@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Informations de l'artisan</p>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">Nom: <span class="fw-bold">{{$data->nom}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">Prénom: <span class="fw-bold">{{$data->prenom}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">raison_social: <span class="fw-bold">{{$data->raison_social}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">contact: <span class="fw-bold">{{$data->contact}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">domaine_activite: <span class="fw-bold">{{$data->domaine_activite}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">ville: <span class="fw-bold">{{$data->ville}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">pays: <span class="fw-bold">{{$data->pays}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">responsable_stand: <span class="fw-bold">{{$data->responsable_stand}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">accompagnateur1: <span class="fw-bold">{{$data->accompagnateur1}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">accompagnateur2: <span class="fw-bold">{{$data->accompagnateur2}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">email: <span class="fw-bold">{{$data->email}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">type_stand: <span class="fw-bold">{{$data->type_stand}}</span></div>
            </div>
            <div class="col-12 col-md-4 my-3 mx-auto">
                <div class="tilte">nom_pavillon: <span class="fw-bold">{{$data->nom_pavillon                    }}</span></div>
            </div>
        </div>
    </div>
@endsection













