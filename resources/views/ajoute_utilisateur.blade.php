@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Ajoute utilisateur</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('user.store')}}" method="POST" class="bg-white p-3 b-raduis">
                    @csrf
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control" id="nom" placeholder="Nom"
                            name="nom" required>
                    </div>
                
                    <div class="form-group">
                        <label for="prenom">Prenom :</label>
                        <input type="text" class="form-control" id="prenom" placeholder="Prenom"
                            name="prenom" required>
                    </div>

                    
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control" id="email" placeholder="Email"
                            name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="direction">Direction :</label>
                        <select class="form-select" id="direction" placeholder="direction"
                        name="direction" required>
                            <option value="">Selectionnez la direction</option>
                            <option value="dpp">DPP</option>
                            <option value="dcti">DCTI</option>
                            <option value="depe">DEPE</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="fonction">Fonction :</label>
                        <select class="form-select" id="fonction" placeholder="fonction"
                        name="fonction" required>
                            <option value="">Selectionnez la fonction</option>
                            <option value="fonction 1">fonction 1</option>
                            <option value="fonction 2">fonction 2</option>
                            <option value="fonction 3">fonction 3</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="type_user">Type-user :</label>
                        <select class="form-select" id="type_user" placeholder="Type_user"
                        name="type_user" required>
                            <option value="">Selectionnez le type d'utilisateur</option>
                            <option value="administrateur">Administrateur</option>
                            <option value="gestionnaire">Gestionnaire</option>
                            <option value="secretaire">Secretaire</option>
                        </select>
                        
                    </div>
    
                    
                    
                    
                    <div class="form-group">
                        <label for="password">Password :</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"
                            name="password" required>
                    </div>

                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Ajouter</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
