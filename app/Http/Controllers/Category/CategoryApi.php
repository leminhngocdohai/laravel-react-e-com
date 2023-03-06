<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CategoryApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::orderBy('id', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new Category;
        $category->name = $request->name;
        $category->sku = $request->sku;
        $category->parent_id = $request->parent_id;
        $category->slug = Str::slug($request->name);


        if ($request->hasFile('image')) {
            $old_img_name = public_path('assets\upload\category',$category->image);
            if (File::exists($old_img_name)) {
                File::delete($old_img_name);
            }
            $img = $request->image;
            $img_name = Str::slug($request->name,'_').'.'.$img->getClientOriginalExtension();
            $img->move('assets/upload/category',$img_name);
            $category->image = $img_name ;
        }else{
            $category->image = 'no-img.jpg';
        }

        $category->save();

        return redirect()->route('dashboard.category')->with('message', 'Category Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Category::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->name;
        $category->sku = $request->sku;
        $category->parent_id = $request->parent_id;
        $category->slug = Str::slug($request->name);

        if ($request->hasFile('image')) {
            $old_img_name = public_path('assets\upload\category',$category->image);
            if (File::exists($old_img_name)) {
                File::delete($old_img_name);
            }
            $img = $request->image;
            $img_name = Str::slug($request->name,'_').'.'.$img->getClientOriginalExtension();
            $img->move('assets/upload/category',$img_name);
            $category->image = $img_name ;
        }

        $category->save();

        return redirect()->route('dashboard.category')->with('message', 'Category Created Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Category::findOrFail($id);
        $user->delete();
        return redirect()->route('dashboard.category')
            ->with('flash_message',
             'User successfully deleted.');
    }
}
