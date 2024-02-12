<table>
    <thead>
    <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Raison sociale</th>
        <th>Contact</th>
        <th>Email</th>
        <th>Domaine d'activité</th>
        <th>Pays</th>
        <th>Ville</th>
        <th>Responsable stand</th>
    </tr>
    </thead>
    <tbody>
    @foreach($artisans as $artisan)
        <tr>
            <td>{{ $artisan->nom }}</td>
            <td>{{ $artisan->prenom }}</td>
            <td>{{ $artisan->raison_social }}</td>
            <td>{{ $artisan->contact }}</td>
            <td>{{ $artisan->email }}</td>
            <td>{{ $artisan->domaine_activite }}</td>
            <td>{{ $artisan->pays }}</td>
            <td>{{ $artisan->ville }}</td>
            <td>{{ $artisan->responsable_stand }}</td>
            <!--td>{{ $artisan->accompagnateur1 }}</td>
            <td>{{ $artisan->accompagnateur2 }}</td>
            <td>{{ $artisan->type_stand }}</td>
            <td>{{ $artisan->nom_pavillon }}</td-->
        </tr>
    @endforeach
    </tbody>
</table>



