@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Supprimer utilisateur</p>
            
            <div class="col-12 col-md-8 mx-auto my-5">
                <div class="dropdown my-3 d-flex justify-content-center">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      Sélectionnez un utilisateur
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Traorer Ali</a>
                      <a class="dropdown-item" href="#">Ouedraogo Moussa</a>
                      <a class="dropdown-item" href="#">Tapsoba Alima</a>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-danger ">Supprimer</button>

                </div>
            </div>
        </div>
    </div>
@endsection
