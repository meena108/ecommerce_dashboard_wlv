<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{   // model is created as guarded which allow all the columns in request
    use HasFactory;
    protected $guarded = [];
}