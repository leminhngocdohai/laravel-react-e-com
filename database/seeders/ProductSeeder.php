<?php

namespace Database\Seeders;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => 'Chuông chữ phật',
                'image' => 'ga.jpg',
                'sku' => 'ABC01',
                'price' => '400000',
                'quantity' => '1000',
                'description' => 'Nois chung laf buon',
                'category_id' => '1',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông án mani',
                'image' => 'ga.jpg',
                'sku' => 'ABC02',
                'quantity' => '1000',
                'price' => '400000',
                'description' => 'Nois chung laf buon',
                'category_id' => '1',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Hoa sen',
                'image' => 'ga.jpg',
                'sku' => 'ABC03',
                'quantity' => '1000',
                'price' => '400000',
                'description' => 'Nois chung laf buon',
                'category_id' => '1',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông xoay',
                'image' => 'ga.jpg',
                'sku' => 'ABC04',
                'quantity' => '1000',
                'price' => '400000',
                'description' => 'Nois chung laf buon',
                'category_id' => '1',
                'created_at' => Carbon::now()
            ],
        ]);
    }
}
