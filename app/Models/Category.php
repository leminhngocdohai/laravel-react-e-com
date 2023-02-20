<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','sku','slug','image','parent_id'];

    protected $guarded = [];

    protected $primaryKey = 'id';

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
