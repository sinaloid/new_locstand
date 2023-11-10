@extends('layouts.home')

@section('content')
    <div class="container-fluid">
        <!-- Small boxes(Stat box) -->

        <div class="row">
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-info">
                    <div class="inner">
                        <h3>@php
                            $users = App\Models\Artisan::all();
                            $i = 0;
                            foreach ($users as $key => $value) {
                              $i++;
                            }

                            echo $i;
                        @endphp</h3>
                        <p>Artisans</p>
                    </div>
                    <div class="icon"><i class="ion ion-hammer"></i></div>
                </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-success">
                    <div class="inner">
                        <h3>53/700</h3>
                        <p>Stands occupés</p>
                    </div>
                    <div class="icon"><i class="ion ion-stats-bars"></i></div>
                </div>
            </div><!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
                <div class="small-box bg-warning">
                    <div class="inner">
                        <h3>@php
                            $users = App\Models\User::all();
                            $i = 0;
                            foreach ($users as $key => $value) {
                              $i++;
                            }

                            echo $i;
                        @endphp</h3>
                        <p>Utilisateur</p>
                    </div>
                    <div class="icon"><i class="ion ion-person-add"></i></div>
                </div>
            </div><!-- ./col -->
            <div class="col-lg-3 col-6">
                <!-- small box -->
            </div><!-- ./col -->
        </div>
        <!-- /.card-header -->
        <div class="card-body">
            <div class="tab-content p-0">
                <!-- Morris chart - Sales -->
                <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;"><canvas
                        id="revenue-chart-canvas" height="300" style="height: 300px;"></canvas></div>
                <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;">
                    <canvas id="sales-chart-canvas" height="300" style="height: 300px;"></canvas>
                </div>
            </div>
        </div><!-- /.card-body -->
    </div>
@endsection
