@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Informations de stand</p>
            <div class="col-12 col-md-5 mx-auto">
                <div class="tilte">Pavillon: <span class="fw-bold">{{$data->pavillon->nom}}</span></div>
                <div class="tilte">type: <span class="fw-bold">{{$data->pavillon->type}}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">numéro du stand: <span class="fw-bold">{{$data->numero_stand}}</span></div>
            </div>
        </div>
    </div>
@endsection
