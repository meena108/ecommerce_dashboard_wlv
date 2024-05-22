<?php
namespace App\Http\Middleware;

use Closure;

class EnsureContentType
{
/**
* Handle an incoming request.
*
* @param \Illuminate\Http\Request $request
* @param \Closure $next
* @return mixed
*/
public function handle($request, Closure $next)
{
// Check if the request content type is multipart/form-data
if ($request->header('Content-Type') !== 'multipart/form-data') {
return response()->json(['error' => 'Unsupported content type'], 415);
}

return $next($request);
}
}