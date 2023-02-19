<?php

namespace Database\Seeders;

use App\Models\Attribute;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('attributes')->insert([
            [
                'size' => 'Small',
                'featured' => '1',
            ],
            [
                'name' => 'Medium',
                'featured' => '0',
            ],
            [
                'name' => 'Large',
                'featured' => '1',
            ]
        ]);

        // Attribute::factory()->count(50)->create();
    }
}
