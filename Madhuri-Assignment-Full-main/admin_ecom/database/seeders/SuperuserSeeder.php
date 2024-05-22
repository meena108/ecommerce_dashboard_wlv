<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SuperuserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Madhuri',
            'email' => 'anikasapkota7@gmail.com',
            'password' => Hash::make('madhuri123'),
            // 'is_admin' => true, // Set as admin/superuser
        ]);
    }
}