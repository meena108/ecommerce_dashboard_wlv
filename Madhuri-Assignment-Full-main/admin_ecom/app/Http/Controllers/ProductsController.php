<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    // Display a listing of the products.
    public function list()
    {
        $products = Product::all();
        return $products;
        // return view('products.index', compact('products'));
    }

    // Show the form for creating a new product.
    public function create()
    {
        return view('products.create');
    }

    // Store a newly created product in the database.
    public function addProduct(Request $request)
    {
        // Validate the request data...
        $validatedData = $request->validate([
            'name' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'price' => 'required|numeric|min:0',
            'description' => 'required|string',
        ]);

        // Create a new product instance...
        $product = new Product;
        $product->name = $validatedData['name'];
        $product->price = $validatedData['price'];
        $product->description = $validatedData['description'];

        // Handle product image upload...
        if ($request->hasFile('image')) {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move('product/images', $imageName);
            $product->image = $imageName;
        }

        // Save the product to the database...
        $product->save();
        $message = "Product created successfully";
        $responseData = [
            'message' => $message,
            'product' => $product,
        ];

        // Return a JSON response with status code 201
        return response()->json($responseData, 201);
    }

    // Display the specified product.
    public function listByID($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product, 200);
    }

    // Show the form for editing the specified product.
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return view('products.edit', compact('product'));
    }

    // Update the specified product in the database.
    public function updateProduct(Request $request)
    {
        // return $request;
    
        // Validate the request data...
        $validatedData = $request->validate([
            'name' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'price' => 'required|numeric|min:0',
            'description' => 'required|string',
        ]);
        

        // Find the product by ID...
        $product = Product::findOrFail($request->id);
        $product->name = $validatedData['name'];
        $product->price = $validatedData['price'];
        $product->description = $validatedData['description'];

        // Handle product image update...
        if ($request->hasFile('image')) {
            // $imagePath = $request->file('image')->store('product_images');
            // $fullImagePath = storage_path('app/' . $imagePath);
            
            // $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            // Storage::disk('public')->putFileAs('product_images', $request->image, $imageName);
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move('product/images', $imageName);
            // $product->image = $imageName;
            $product->image = $imageName;
        }

        // Save the updated product to the database...
        $product->save();
        $message="Product updated successfully";
        

        $responseData = [
            'message' => $message,
            'product' => $product,
        ];
    
        // Return a JSON response with status code 200
        return response()->json($responseData, 200);
        
    }

    // Remove the specified product from the database.
    public function delete($id)
    {
        // Find the product by ID...
        $product = Product::findOrFail($id);

        // Delete the product image if exists...
        if ($product->image) {
            Storage::delete($product->image);
        }

        // Delete the product from the database...
        $product->delete();
        $message="Product deleted successfully";
        

        $responseData = [
            'message' => $message,
            'product' => $product,
        ];
    
        // Return a JSON response with status code 200
        return response()->json($responseData, 200);
    }

    public function search(Request $request)
    {
        
        $search = $request->input('searchQuery');
        
        // Perform the search query to find products with matching names.
        $products = Product::where('name', 'like', "%$search%")->get();
             

        $responseData = [
            'products' => $products,
        ];
    
        // Return a JSON response with status code 200
        return response()->json($responseData, 200);
    }


}