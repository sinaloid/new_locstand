@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <p class="text-center font-weight-bold tilte">Liste des stands</p>
        <div class="col-12 col-md-8 mx-auto my-5">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach ($datas as $data)
                 <tr>
                  <td>{{$data->nom}}</td>
                  <td>{{$data->type}}</td>
                  <td>

                      <a href="{{ route('pavillon.show', $data->id) }}" class="btn btn-info">Voir</a>
                      <a href="{{ route('pavillon.edit', $data->id) }}" class="btn btn-warning">Editer</a>
                      <form class="d-inline" action="{{ route('pavillon.destroy', $data->id) }}" method="POST">
                        @csrf
                        @method("delete")
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
