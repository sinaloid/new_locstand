@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier utilisateur</p>
            
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
                        <label for="uname">Direction :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Raison social"
                            name="uname" required>
                    </div>

                    <div class="form-group">
                        <label for="uname">Fonction :</label>
                        <input type="text" class="form-control" id="uname" placeholder="Raison social"
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
