<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin | Tableau de bord</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}"><!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet" href="{{ asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}"><!-- JQVMap -->
    <link rel="stylesheet" href="{{ asset('plugins/jqvmap/jqvmap.min.css') }}"><!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('dist/css/adminlte.min.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{ asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ asset('plugins/daterangepicker/daterangepicker.css') }}"><!-- summernote -->
    <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.css') }}">
    <!-- Google Font:Source Sans Pro -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>


<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 px-0">
                <aside class="main-sidebar sidebar-dark-primary elevation-4">

                    <!-- Brand Logo --><a href="index3.html" class="brand-link"><img src="dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"><span
                            class="brand-text font-weight-light">Admin</span></a><!-- Sidebar -->
                    <div class="sidebar">
                        <!-- Sidebar user panel(optional) -->
                        <!-- Sidebar Menu -->
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">
                                <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
                                <li class="nav-item has-treeview menu-open"><a href="{{ route('home') }}"
                                        class="nav-link active"><i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard </p>
                                    </a>
                                    <nav>




                                <li class="nav-item has-treeview"><a href="#" class="nav-link"><i
                                            class="nav-icon fas fa-circle"></i>
                                        <p>Gestion des utilisateurs </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="{{ route('user.index') }}" class="nav-link">
                                                <p>Liste des utilisateurs<span
                                                        class="badge badge-info right">@php
                                                            $users = App\Models\User::all();
                                                            $i = 0;
                                                            foreach ($users as $key => $value) {
                                                                $i++;
                                                            }

                                                            echo $i;
                                                        @endphp</span></p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="{{ route('ajoute_utilisateur') }}" class="nav-link">
                                                <p>Ajouter un utilisateur</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>



                                <li class="nav-item has-treeview"><a href="#" class="nav-link"><i
                                            class="nav-icon fas fa-circle"></i>
                                        <p>Gestion des artisans </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="{{ route('artisan.index') }}" class="nav-link">
                                                <p>Liste des artisans<span
                                                        class="badge badge-info right">@php
                                                            $users = App\Models\Artisan::all();
                                                            $i = 0;
                                                            foreach ($users as $key => $value) {
                                                                $i++;
                                                            }

                                                            echo $i;
                                                        @endphp</span></p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="{{ route('ajoute_artisan') }}" class="nav-link">
                                                <p>Ajouter un artisan</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item has-treeview"><a href="#" class="nav-link"><i
                                            class="nav-icon fas fa-circle"></i>
                                        <p>Gestion des pavillons </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="{{ route('pavillon.index') }}" class="nav-link">
                                                <p>Liste des pavillons<span
                                                        class="badge badge-info right">@php
                                                            $users = App\Models\Pavillon::all();
                                                            $i = 0;
                                                            foreach ($users as $key => $value) {
                                                                $i++;
                                                            }

                                                            echo $i;
                                                        @endphp</span></p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="{{ route('pavillon.create') }}" class="nav-link">
                                                <p>Ajouter un pavillon</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item has-treeview"><a href="#" class="nav-link"><i
                                            class="nav-icon fas fa-circle"></i>
                                        <p>Gestion des stands </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="{{ route('stand.index') }}" class="nav-link">
                                                <p>Liste des stands<span
                                                        class="badge badge-info right">@php
                                                            $users = App\Models\Artisan::all();
                                                            $i = 0;
                                                            foreach ($users as $key => $value) {
                                                                $i++;
                                                            }

                                                            echo $i;
                                                        @endphp</span></p>
                                            </a>
                                        </li>
                                        <!--li class="nav-item">
                                            <a href="{{ route('ajouter_stand') }}" class="nav-link">
                                                <p>Ajouter un stand</p>
                                            </a>
                                        </li-->


                                    </ul>
                                </li>




                                <li class="nav-item has-treeview"><a href="#" class="nav-link"><i
                                            class="nav-icon fas fa-circle"></i>
                                        <p>Location/Réservation <span class="badge badge-info right">5</span> </p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="{{ route('location_reservation') }}" class="nav-link">
                                                <p>Liste<span class="badge badge-info right">@php
                                                    $users = App\Models\Artisan::all();
                                                    $i = 0;
                                                    foreach ($users as $key => $value) {
                                                        $i++;
                                                    }

                                                    echo $i;
                                                @endphp</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="{{ route('faire_location_reservation') }}" class="nav-link">
                                                <p>Faire une L/R</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>


                </aside>

                <!-- Content Wrapper. Contains page content -->
                <div class="content-wrapper">

                    <!-- Content Header(Page header) -->
                    <div class="content-header p-0">
                        <div class="contsiner-fluid">
                            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="{{ url('/') }}">
                                        {{ config('app.name', 'Laravel') }}
                                    </a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="{{ __('Toggle navigation') }}">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <!-- Left Side Of Navbar -->
                                        <ul class="navbar-nav me-auto">

                                        </ul>

                                        <!-- Right Side Of Navbar -->
                                        <ul class="navbar-nav ms-auto">
                                            <!-- Authentication Links -->
                                            @guest
                                                @if (Route::has('login'))
                                                    <li class="nav-item">
                                                        <a class="nav-link"
                                                            href="{{ route('login') }}">{{ __('Login') }}</a>
                                                    </li>
                                                @endif

                                                @if (Route::has('register'))
                                                    <li class="nav-item">
                                                        <a class="nav-link"
                                                            href="{{ route('register') }}">{{ __('Register') }}</a>
                                                    </li>
                                                @endif
                                            @else
                                                <li class="nav-item dropdown">
                                                    <a id="navbarDropdown" class="nav-link dropdown-toggle"
                                                        href="#" role="button" data-bs-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false" v-pre>
                                                        {{ Auth::user()->name }}
                                                    </a>

                                                    <div class="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="navbarDropdown">
                                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                                            onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                                            {{ __('Logout') }}
                                                        </a>

                                                        <form id="logout-form" action="{{ route('logout') }}"
                                                            method="POST" class="d-none">
                                                            @csrf
                                                        </form>
                                                    </div>
                                                </li>
                                            @endguest
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div class="container-fluid">
                            <div class="row mb-2">

                                <div class="col-sm-6">

                                    <h1 class="m-0 text-dark">Tableau de bord</h1>
                                </div><!-- /.col -->
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Accueil</a></li>
                                        <li class="breadcrumb-item active">Tableau de bord</li>
                                    </ol>
                                </div><!-- /.col -->
                            </div>
                            <!-- /.row -->
                        </div><!-- /.container-fluid -->
                    </div><!-- /.content-header -->
                    <!-- Main content -->
                    <section class="content">
                        @yield('content')
                        <!-- /.card -->
                        <!-- DIRECT CHAT -->
                        <div class="card direct-chat direct-chat-primary">
                            <!-- /.content-wrapper -->
                            <footer class="main-footer"><strong>Copyright &copy; <a
                                        href="http://www.bootstrapmb.com/">Admin</a>.</strong>All rights reserved. <div
                                    class="float-right d-none d-sm-inline-block"> </div>
                            </footer><!-- Control Sidebar -->
                            <aside class="control-sidebar control-sidebar-dark">
                                <!-- Control sidebar content goes here -->
                            </aside><!-- /.control-sidebar -->
                        </div><!-- ./wrapper -->
                        <!-- jQuery -->
                        <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script><!-- jQuery UI 1.11.4 -->
                        <script src="{{ asset('plugins/jquery-ui/jquery-ui.min.js') }}"></script><!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
                        <script>
                            $.widget.bridge('uibutton', $.ui.button)
                        </script><!-- Bootstrap 4 -->
                        <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script><!-- ChartJS -->
                        <script src="{{ asset('plugins/chart.js/Chart.min.js') }}"></script><!-- Sparkline -->
                        <script src="{{ asset('plugins/sparklines/sparkline.js') }}"></script><!-- JQVMap -->
                        <script src="{{ asset('plugins/jqvmap/jquery.vmap.min.js') }}"></script>
                        <script src="{{ asset('plugins/jqvmap/maps/jquery.vmap.usa.js') }}"></script><!-- jQuery Knob Chart -->
                        <script src="{{ asset('plugins/jquery-knob/jquery.knob.min.js') }}"></script><!-- daterangepicker -->
                        <script src="{{ asset('plugins/moment/moment.min.js') }}"></script>
                        <script src="{{ asset('plugins/daterangepicker/daterangepicker.js') }}"></script><!-- Tempusdominus Bootstrap 4 -->
                        <script src="{{ asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script><!-- Summernote -->
                        <script src="{{ asset('plugins/summernote/summernote-bs4.min.js') }}"></script><!-- overlayScrollbars -->
                        <script src="{{ asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script><!-- AdminLTE App -->
                        <script src="{{ asset('dist/js/adminlte.js') }}"></script><!-- AdminLTE dashboard demo(This is only for demo purposes) -->
                        <script src="{{ asset('dist/js/pages/dashboard.js') }}"></script><!-- AdminLTE for demo purposes -->
                        <script src="{{ asset('dist/js/demo.js') }}"></script>
                    </section>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
