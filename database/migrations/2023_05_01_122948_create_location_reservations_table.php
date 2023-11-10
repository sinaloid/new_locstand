<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('location_reservations', function (Blueprint $table) {
            $table->id();
            $table->string("etat_stand");
            $table->string("date_debut");
            $table->string("date_fin");

            $table->unsignedBigInteger('artisan_id');
            $table->foreign('artisan_id')
                    ->references('id')
                    ->on('artisans')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');

            $table->unsignedBigInteger('stand_id');
            $table->foreign('stand_id')
                    ->references('id')
                    ->on('stands')
                    ->onDelete('cascade')
                    ->onUpdate('cascade');
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
        Schema::dropIfExists('location_reservations');
    }
}
