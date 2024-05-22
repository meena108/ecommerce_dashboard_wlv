<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(){
        $category = Category ::all (); 
        if(!$category )
        return response () -> json(['message'=>'hello']) ;
    
        
        return response()->json  ($category);
        
    } 

    public function store(Request $request ) {
         
        $category = new Category();
        $category->name = $this->request->name; 
        
    }

}