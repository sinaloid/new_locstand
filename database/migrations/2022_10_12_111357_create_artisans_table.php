<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtisansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artisans', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->string("prenom");
            $table->string("raison_social");
            $table->integer("contact");
            $table->string("domaine_activite");
            $table->string("ville");
            $table->string("email");
            $table->string("pays");
            $table->string("responsable_stand");
            $table->string("accompagnateur1");
            $table->string("accompagnateur2");
            $table->string("type_stand");
            $table->string("nom_pavillon");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artisans');
    }
}
