<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'birth' => '2008-11-11',
                'gender' => 'male',
                'status' => '1',
                'address' => 'Ha Nam',
                'avatar' => 'ga.jpg',
                'email' => 'admin@gmail.com',
                'password' => 'Admin123',
                'phone' => '1233123213',
                'email_verified_at' => null,
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Member',
                'birth' => '2008-11-11',
                'gender' => 'male',
                'status' => '1',
                'address' => 'Ha Nam',
                'avatar' => 'ga.jpg',
                'email' => 'admin1@gmail.com',
                'password' => 'Admin123',
                'phone' => '1233123213',
                'email_verified_at' => null,
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'God',
                'birth' => '2008-11-11',
                'gender' => 'male',
                'status' => '1',
                'address' => 'Ha Nam',
                'avatar' => 'ga.jpg',
                'email' => 'admin2@gmail.com',
                'password' => 'Admin123',
                'phone' => '1233123213',
                'email_verified_at' => null,
                'created_at' => Carbon::now()
            ],

        ]);
    }
}
