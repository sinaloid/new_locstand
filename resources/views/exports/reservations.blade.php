<table class="table table-striped">
    <thead>
        <tr>
            <th>Type de stand</th>
            <th>Numéro de stand</th>
            <th>Nom du pavillon</th>
            <th>Nom de l'artisan</th>
            <th>Email de l'artisan</th>
            <th>Contact de l'artisan</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($reservations as $data)
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
                <td>{{ $artisan->contact }}</td>
            </tr>
        @endforeach
    </tbody>
</table>


