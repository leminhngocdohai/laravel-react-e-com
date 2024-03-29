<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->date('birth')->nullable();
            $table->enum('gender',['male','female','others'])->nullable();
            $table->enum('status',['1','0'])->nullable();
            $table->string('address',255)->nullable();
            $table->string('avatar',255)->nullable();
            $table->string('email',60)->unique();
            $table->string('name');
            $table->string('password');
            $table->string('phone',30)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};

