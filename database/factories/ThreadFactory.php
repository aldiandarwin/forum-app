<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Thread;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ThreadFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Thread::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'category_id' => rand(1, 5),
            'title' => $name = Str::title($this->faker->sentence()),
            'slug' => Str::slug($name .'-'. Str::random(6)),
            'body' => $this->faker->paragraph(),
        ];
    }
}
