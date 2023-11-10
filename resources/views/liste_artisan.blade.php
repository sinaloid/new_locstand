@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <p class="text-center font-weight-bold tilte">Liste artisans</p>
        <div class="col-12 col-md-12 mx-auto my-5">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Raison social</th>
                    <th>Responsable</th>
                    <th>Email</th>
                    <th>domaine d'activité</th>
                    <th>Nationalité</th>
                    <th>Contact</th>
                    <th>stand</th>
                    <th>pavillon</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 @foreach ($datas as $data)
                 <tr>
                  <td>{{$data->nom}}</td>
                  <td>{{$data->prenom}}</td>
                  <td>{{$data->raison_social}}</td>
                  <td>{{$data->responsable_stand}}</td>
                  <td>{{$data->email}}</td>
                  <td>{{$data->domaine_activite}}</td>
                  <td>{{$data->pays}}</td>
                  <td>{{$data->contact}}</td>
                  <td>{{$data->type_stand}}</td>
                  <td>{{$data->nom_pavillon}}</td>
                  <td>
                    
                      <a href="{{ route('artisan.show', $data->id) }}" class="btn btn-info">Voir</a>
                      <a href="{{ route('artisan.edit', $data->id) }}" class="btn btn-warning">Editer</a>
                      <form class="d-inline" action="{{ route('artisan.destroy', $data->id) }}" method="POST">
                          @csrf
                          @method("delete")
                        <button type="submit" class="btn btn-danger">Supprimer</button>
                      </form>
                    
                  </td>
                </tr>
                 @endforeach
                  
                </tbody>
              </table>
        </div>

    </div>
@endsection
