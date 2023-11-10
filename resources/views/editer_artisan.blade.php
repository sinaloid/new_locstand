@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier artisan</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('artisan.update', $data->id)}}"  method="POST" class="bg-white p-3 b-raduis">
                   @csrf
                   @method('put')
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control" id="nom" placeholder="Entrez votre nom " name="nom" value="{{$data->nom}}"
                            required>  
                            
                    </div>

                    <div class="form-group">
                        <label for="prenom">Prenom :</label>
                        <input type="text" class="form-control" id="prenom" placeholder="Entrez votre prenom" name="prenom" value="{{$data->prenom}}"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control" id="email" placeholder="Entrez votre email" name="email" value="{{$data->email}}"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="raison_social">Raison social :</label>
                        <input type="text" class="form-control" id="raison_social" placeholder="Entrez votre raison social"
                            name="raison_social" value="{{$data->raison_social}}" required>
                    </div>
                    

                    <div class="form-group">
                        <label for="contact">Contact :</label>
                        <input type="text" class="form-control" id="contact" placeholder="Entrez votre contact"
                            name="contact"value="{{$data->contact}}" required>
                    </div>

                
                    <div class="form-group">
                        <label for="domaine_activite">Domaine d'activité :</label>
                        <input type="text" class="form-control" id="domaine_activite" placeholder="Entrez le nom de votre domaine d'activité "
                        name="domaine_activite" value="{{$data->domaine_activite}}" required>
                    </div>

                    <div class="form-group">
                        <label for="pays">Pays :</label>
                        <input type="text" class="form-control" id="pays" placeholder="Entrez le nom de votre pays"
                            name="pays" value="{{$data->ville}}" required>
                    </div>


                    <div class="form-group">
                        <label for="ville">Ville :</label>
                        <input type="text" class="form-control" id="ville" placeholder="Entrez le nom de votre ville"
                            name="ville" value="{{$data->ville}}" required>
                    </div>


                    <div class="form-group">
                        <label for=" responsable_stand">Responsable de stand:</label>
                        <input type="text" class="form-control" id=" responsable_stand" placeholder="Entrez votre le nom du responsable de stand"
                            name=" responsable_stand" value="{{$data->responsable_stand}}" required>
                    </div>


                    <div class="form-group">
                        <label for="accompagnateur1">Accompagnateur 1 :</label>
                        <input type="text" class="form-control" id="accompagnateur1" placeholder="Entrez le nom de l'accompagnateur 1"
                            name="accompagnateur1" value="{{$data->accompagnateur1}}" required>
                    </div>


                    <div class="form-group">
                        <label for="accompagnateur2">Accompagnateur 2 :</label>
                        <input type="text" class="form-control" id="accompagnateur2" placeholder="Entrez le nom de l'accompagnateur 2"
                            name="accompagnateur2" value="{{$data->accompagnateur2}}" required>
                    </div>

                    <div class="form-group">
                        <label for="type_stand">Type de Stand :</label>
                        <select class="form-select" id="type_stand" placeholder="Type de Stand"
                        name="type_stand" value="{{$data->type_stand}}" required>
                            <option value="">Selectionnez la fonction</option>
                            <option value="climentiser">climentiser</option>
                            <option value="ventiller">ventiller</option>
                            <option value="simple">simple</option>
                        </select>   
                    </div>

                    <div class="form-group">
                        <label for="nom_pavillon">Pavillon:</label>
                        <select class="form-select" id="nom_pavillon" placeholder="nom_pavillon"
                        name="nom_pavillon" value="{{$data->pavillon}}" required>
                            <option value="">Selectionnez la fonction</option>
                            <option value="pyramide">Pyramide</option>
                            <option value="kilmadjaro">Kilmadjaro</option>
                            <option value="soleil_levant">Soleil Levant</option>
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
