@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <p class="text-center font-weight-bold tilte">Liste des stands occupées ou réservées</p>
        <div class="col-12 col-md-10 mx-auto my-5">
            <form action="{{route('recherche')}}" method="POST">
                @csrf
                <div class="input-group mb-3">
                  <input type="text" class="form-control" name="recherche" placeholder="Entrer un numéro de stand...">
                  <div  class="input-group-append">
                    <button type="submit" class="input-group-text bg-primary">Recherche</button>
                  </div>
                </div>
              </form>
        </div>
        <div class="col-12 col-md-10 mx-auto my-5">
            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Type de stand</th>
                        <th>Numéro de stand</th>
                        <th>Nom du pavillon</th>
                        <th>Nom de l'artisan</th>
                        <th>Contact de l'artisan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($datas as $data)
                        @php
                            $stand = App\Models\Stand::where("id",$data->stand_id)->first();
                            $artisan = App\Models\Artisan::where("id",$data->artisan_id)->first();
                        @endphp
                        <tr>
                            <td>{{ $stand->pavillon->type }}</td>
                            <td>{{ $stand->numero_stand }}</td>
                            <td>{{ $stand->pavillon->nom }}</td>
                            <td>{{ $artisan->nom." ".$artisan->prenom }}</td>
                            <td>{{ $artisan->email }}</td>
                            <td>

                                <a href="{{ route('stand.show', $data->id) }}" class="btn btn-info">Voir</a>
                                <a href="{{ route('stand.edit', $data->id) }}" class="btn btn-warning">Editer</a>
                                <form class="d-inline" action="{{ route('stand.destroy', $data->id) }}" method="POST">
                                    @csrf
                                    @method('delete')
                                    <button type="submit" class="btn btn-danger mx-1">Supprimer</button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
@endsection
