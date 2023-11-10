@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Ajouter un pavillon</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('pavillon.store')}}" method="POST" class="bg-white p-3 b-raduis">
                    @csrf
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control" id="nom" placeholder="Numéro de stand"
                            name="nom" required>
                    </div>
                    <div class="form-group">
                        <label for="type">Type :</label>
                        <select class="form-select" id="type" placeholder="Type de Stand"
                        name="type" required>
                            <option value="">Selectionnez la fonction</option>
                            <option value="Pavillon climentiser">Pavillon climentiser</option>
                            <option value="Pavillon ventiller">Pavillon ventiller</option>
                            <option value="Pavillon simple">Pavillon simple</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Espace">Espace</option>
                        </select>
                    </div>
                    
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
