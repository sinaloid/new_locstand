@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <p class="text-center font-weight-bold tilte">Modifier stand</p>
            
            <div class="col-12 col-md-8 mx-auto my-5">
                <div class="dropdown my-3">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      Sélectionnez un numéro de stand
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">n°PV-A1</a>
                      <a class="dropdown-item" href="#">n°PV-A3</a>
                      <a class="dropdown-item" href="#">n°PV-B1</a>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
@endsection
