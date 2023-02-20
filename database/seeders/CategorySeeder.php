<?php

namespace Database\Seeders;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Chuông Đài Loan 1',
                'image' => 'ga.jpg',
                'sku' => 'ABC01',
                'slug' => 'chuong-dai-loan-1',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 2',
                'image' => 'ga.jpg',
                'sku' => 'ABC02',
                'slug' => 'chuong-dai-loan-2',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 3',
                'image' => 'ga.jpg',
                'sku' => 'ABC03',
                'slug' => 'chuong-dai-loan-3',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],    [
                'name' => 'Chuông Đài Loan 4',
                'image' => 'ga.jpg',
                'sku' => 'ABC04',
                'slug' => 'chuong-dai-loan-4',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 5',
                'image' => 'ga.jpg',
                'sku' => 'ABC05',
                'slug' => 'chuong-dai-loan-5',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 6',
                'image' => 'ga.jpg',
                'sku' => 'ABC06',
                'slug' => 'chuong-dai-loan-6',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 7',
                'image' => 'ga.jpg',
                'sku' => 'ABC07',
                'slug' => 'chuong-dai-loan-7',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 8',
                'image' => 'ga.jpg',
                'sku' => 'ABC08',
                'slug' => 'chuong-dai-loan-8',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Chuông Đài Loan 9',
                'image' => 'ga.jpg',
                'sku' => 'ABC09',
                'slug' => 'chuong-dai-loan-9',
                'parent_id' => '0',
                'created_at' => Carbon::now()
            ]
        ]);

        // Category::factory()->count(50)->create();
    }
}
