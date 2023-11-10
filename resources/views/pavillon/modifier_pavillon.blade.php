@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier le pavillon</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('pavillon.update', $data->id)}}" method="POST" class="bg-white p-3 b-raduis">
                    @csrf
                    @method('put')
                    
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control" id="nom" placeholder="Numéro de stand"
                            name="nom" value="{{$data->nom}}" required>
                    </div>
                    <div class="form-group">
                        <label for="type">Type :</label>
                        <select class="form-select" id="type" placeholder="Type de Stand"
                        name="type"  required>
                            <option value="">Selectionnez la fonction</option>
                            <option value="Pavillon climentiser" selected='{{$data->type === "Pavillon climentiser" ? "selected" : ""}}'>Pavillon climentiser</option>
                            <option value="Pavillon ventiller" selected='{{$data->type === "Pavillon ventiller" ? "selected" : ""}}'>Pavillon ventiller</option>
                            <option value="Pavillon simple" selected='{{$data->type === "Pavillon simple" ? "selected" : ""}}'>Pavillon simple</option>
                            <option value="Restaurant" selected='{{$data->type === "Restaurant" ? "selected" : ""}}'>Restaurant</option>
                            <option value="Espace" selected='{{$data->type === "Espace" ? "selected" : ""}}'>Espace</option>
                        </select>
                    </div>
                    
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
