@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Informations de l'utilisateur</p>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Nom: <span class="fw-bold">{{$data->nom}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Prénom: <span class="fw-bold">{{$data->prenom}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Email: <span class="fw-bold">{{$data->email}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Direction: <span class="fw-bold">{{$data->direction}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Fonction: <span class="fw-bold">{{$data->fonction}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Role: <span class="fw-bold">{{$data->type_user}}</span></div>
            </div>
        </div>
    </div>
@endsection
