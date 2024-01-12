<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Laravel',
                'slug' => 'laravel',
            ],
            [
                'name' => 'Tailwind CSS',
                'slug' => 'tailwind-css',
            ],
            [
                'name' => 'Javascript',
                'slug' => 'javascript',
            ],
            [
                'name' => 'SASS',
                'slug' => 'sass',
            ],
            [
                'name' => 'React JS',
                'slug' => 'react',
            ],
        ])->each(fn ($category) => \App\Models\Category::create($category));
        // \App\Models\Category::factory(5)->create();
        \App\Models\User::factory(10)->hasThreads(5)->create();
        \App\Models\Reply::factory(150)->create();
    }
}
