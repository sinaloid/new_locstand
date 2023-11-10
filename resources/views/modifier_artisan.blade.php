@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier artisan</p>
            
            <div class="col-12 col-md-8 mx-auto my-5">
                <div class="dropdown my-3">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      Sélectionnez un utilisateur
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Traorer Ali</a>
                      <a class="dropdown-item" href="#">Ouedraogo Moussa</a>
                      <a class="dropdown-item" href="#">Tapsoba Alima</a>
                    </div>
                  </div>
                <form action="/action_page.php" class="bg-white p-3 b-raduis">
                    <div class="form-group">
                        <label for="uname">Nom :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Nom" name="uname"
                            required>

                    </div>

                    <div class="form-group">
                        <label for="uname">Prenom :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Prenom" name="uname"
                            required>

                    </div>

                    <div class="form-group">
                        <label for="uname">Raison social :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Raison social"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Contact :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Contact"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Pays :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Pays"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Ville :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Ville"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Domaine d'activité :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Domaine d'activité"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="pwd">Responsable de stand:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Responsable de stand"
                            name="pswd" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Accompagnateur 1 :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Accompagnateur 1"
                            name="uname" required>


                    </div>
                    <div class="form-group">
                        <label for="uname">Accompagnateur 2 :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Accompagnateur 2"
                            name="uname" required>


                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Modifier</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
