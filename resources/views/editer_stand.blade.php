@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier un stand</p>
            <div class="col-12 col-md-8 mx-auto my-5">
                <form action="{{route('stand.update',$data->id)}}" method="POST" class="bg-white p-3 b-raduis">
                    @csrf
                    @method("put")
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
                        <label for="numero_stand">Numéro de stand :</label>
                        <input type="text" class="form-control" id="numero_stand" placeholder="Numéro de stand"
                            name="numero_stand" value="{{$data->numero_stand}}" required>




                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary ">Modifier</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
