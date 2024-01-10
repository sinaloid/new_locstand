@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Ajouter un artisan</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form method="POST" action="{{route('artisan.store')}}" class="bg-white p-3 b-raduis">
                   @csrf
                    <div class="form-group">
                        <label for="nom">Nom :</label>
                        <input type="text" class="form-control" id="nom" placeholder="Entrez votre nom " name="nom"
                            required>  
                            
                    </div>

                    <div class="form-group">
                        <label for="prenom">Prenom :</label>
                        <input type="text" class="form-control" id="prenom" placeholder="Entrez votre prenom" name="prenom"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control" id="email" placeholder="Entrez votre email" name="email"
                            required>
                    </div>
                    <div class="form-group">
                        <!--label for="raison_social">Raison social :</label-->
                        <input type="hidden" class="form-control" id="raison_social" value="raison_social" placeholder="Entrez votre raison social"
                            name="raison_social" required>
                    </div>
                    

                    <div class="form-group">
                        <label for="contact">Contact :</label>
                        <input type="text" class="form-control" id="contact" placeholder="Entrez votre contact"
                            name="contact" required>
                    </div>

                
                    <div class="form-group">
                        <label for="domaine_activite">Domaine d'activité :</label>
                        <input type="text" class="form-control" id="domaine_activite" placeholder="Entrez le nom de votre domaine d'activité "
                        name="domaine_activite" required>
                    </div>

                    <div class="form-group">
                        <label for="pays">Pays :</label>
                        <input type="text" class="form-control" id="pays" placeholder="Entrez le nom de votre pays"
                            name="pays" required>
                    </div>


                    <div class="form-group">
                        <label for="ville">Ville :</label>
                        <input type="text" class="form-control" id="ville" placeholder="Entrez le nom de votre ville"
                            name="ville" required>
                    </div>


                    <div class="form-group">
                        <!--label for=" responsable_stand">Responsable de stand:</label-->
                        <input type="hidden" class="form-control" id=" responsable_stand" placeholder="Entrez votre le nom du responsable de stand"
                            name=" responsable_stand" value=" responsable_stand" required>
                    </div>


                    <div class="form-group">
                        <!--label for="accompagnateur1">Accompagnateur 1 :</label-->
                        <input type="hidden" class="form-control" id="accompagnateur1" placeholder="Entrez le nom de l'accompagnateur 1"
                            name="accompagnateur1" value="accompagnateur1" required>
                    </div>


                    <div class="form-group">
                        <!--label for="accompagnateur2">Accompagnateur 2 :</label-->
                        <input type="hidden" class="form-control" id="accompagnateur2" placeholder="Entrez le nom de l'accompagnateur 2"
                            name="accompagnateur2" value="accompagnateur2" required>
                    </div>

                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Ajouter</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
