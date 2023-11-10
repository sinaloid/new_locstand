@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Faire une location ou une réservation</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('location_reservation.store')}}" method="POST" class="bg-white p-3 b-raduis">
                    @csrf
                    @php
                        $stands = App\Models\Stand::all();
                        $artisans = App\Models\Artisan::all();
                        $reservation_list = App\Models\LocationReservation::all();
                        $list = [];
                        foreach ($stands as $value) {
                            $find = false;
                            foreach ($reservation_list as $item) {
                                if($value->id === $item->stand_id){
                                    $find = true;
                                }
                            }

                            if(!$find){
                                array_push($list,$value);
                            }
                        }
                    @endphp
                    <div class="form-group">
                        <label for="stand_id">Liste des Stands :</label>
                        <select class="form-select" id="stand_id"
                        name="stand_id" required>
                            <option value="">Selectionnez une stand</option>
                            @foreach ($list as $stand)
                                <option class="d-inline-block" value="{{$stand->id}}">
                                    <span>Pavillon: <span class="fw-bold">{{$stand->pavillon->nom}}</span></span> <br>
                                    <span>Type: <span class="fw-bold">{{$stand->pavillon->type}}</span></span> <br>
                                    <span>Numéro: <span class="fw-bold">{{$stand->numero_stand}}</span></span>
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="artisan_id">Liste des artisans</label>
                        <select class="form-select" id="artisan_id"
                        name="artisan_id" required>
                            <option value="">Selectionnez l'artisan</option>
                            @foreach ($artisans as $artisan)
                                <option class="d-inline-block" value="{{$artisan->id}}">
                                    <span>{{$artisan->nom." ".$artisan->prenom}}</span> <br>
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <input type="text" value="occuper" hidden name="etat_stand"> 
                    <div class="form-group">
                        <label for="date_debut">Date de début</label>
                        <input type="date" class="form-control" id="date_debut" placeholder="Date de début"
                            name="date_debut" required>
                    </div>
                    <div class="form-group">
                        <label for="date_fin">Date de fin</label>
                        <input type="date" class="form-control" id="date_fin" placeholder="Date de fin"
                            name="date_fin" required>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Ajouter</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
