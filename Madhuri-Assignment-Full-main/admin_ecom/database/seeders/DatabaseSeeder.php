<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    { 
        // seeder is added as a default user, is will run on command php atisan db:Seed
        User::create([
            'name' => 'Madhuri',
            'email' => 'anikasapkota7@gmail.com',
            'password' => Hash::make('madhuri123'),
            // 'is_admin' => true, // Set as admin/superuser
        ]);
    }
}
