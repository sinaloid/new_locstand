@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Informations du pavillon</p>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Nom: <span class="fw-bold">{{ $data->nom }}</span></div>
            </div>
            <div class="col-12 col-md-4 mx-auto">
                <div class="tilte">Type: <span class="fw-bold">{{ $data->type }}</span></div>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="d-flex">
                <button class="btn btn-primary ml-auto" data-toggle="modal" data-target="#myModal">Ajouter un stand</button>
            </div>
        </div>
        <p class="text-center font-weight-bold tilte">Liste des {{$data->type ==="Restaurant" ? "restaurants" : "stands"}} du pavillon</p>
        <div class="col-12 col-md-8 mx-auto my-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Numéro de stand</th>
                        <th>Nom pavillon</th>
                        <th>Type de pavillon</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($stands as $item)
                        <tr>
                            <td>{{ $item->numero_stand }}</td>
                            <td>{{ $item->pavillon->nom }}</td>
                            <td>{{ $item->pavillon->type }}</td>
                            <td>

                                <a href="{{ route('stand.show', $item->id) }}" class="btn btn-info">Voir</a>
                                <a href="{{ route('stand.edit', $item->id) }}" class="btn btn-warning">Editer</a>
                                <form class="d-inline" action="{{ route('stand.destroy', $item->id) }}" method="POST">
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

        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Ajout d'un stand</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="{{route('stand.store')}}" method="POST" class="bg-white p-3 b-raduis">
                            @csrf
                            <div class="form-group">
                                <label for="numero_stand">Numéro de stand :</label>
                                <input type="text" class="form-control" id="numero_stand" placeholder="Numéro de stand"
                                    name="numero_stand" required>
                            </div>
                            <input type="text" class="form-control" name="pavillon_id" hidden value="{{$data->id}}" required>
                            <div class="col-12 d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary ">Ajouter</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
