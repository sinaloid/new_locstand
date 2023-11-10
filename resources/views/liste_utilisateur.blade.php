@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <p class="text-center font-weight-bold tilte">Liste utilisateurs</p>
        <div class="col-12 col-md-8 mx-auto my-5">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Direction</th>
                        <th>Fonction</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($datas as $data)
                        <tr>
                            <td>{{ $data->nom }}</td>
                            <td>{{ $data->prenom }}</td>
                            <td>{{ $data->email }}</td>
                            <td>{{ $data->direction }}</td>
                            <td>{{ $data->fonction }}</td>
                            <td>{{ $data->type_user }}</td>
                            <td>
                                <a href="{{ route('user.show', $data->id) }}"  class="btn btn-info">Voir</a>
                                <a href="{{ route('user.edit', $data->id) }}" class="btn btn-warning">Editer</a>
                                <form class="d-inline" action="{{ route('user.destroy', $data->id) }}" method="POST">
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
