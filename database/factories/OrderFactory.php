<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_name' => fake()->name(),
            'code' => fake()->unique()->randomNumber(9, false),
            'user_phone' => fake()->phoneNumber(),
            'user_address' => fake()->address(),
            'product_name' => fake()->company(),
            'status' => fake()->randomElement($array = ['Done', 'Process', 'Hold']),
            'quantity' => fake()->randomNumber(3, false),
        ];
    }
}
