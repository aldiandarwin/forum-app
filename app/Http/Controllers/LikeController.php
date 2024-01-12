<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // Abort 404
        abort_if(!$request->hasAny(['thread', 'reply']), 404);

        // Take full namespace from request given
        $fullNameSpaceOfTheModel = "App\Models\\" . Str::studly($request->keys()[0]);

        $model = $fullNameSpaceOfTheModel::find($request->get($request->keys()[0]));
        $toggle = $model->likes()->where('user_id', $request->user()->id)->exists() ? 'delete' : 'save';
        if ($toggle == "delete") {
            $model->likes()->where('user_id', $request->user()->id)->delete();
        } else {
            $request->user()->likes()->$toggle($model->likes()->make());
        }


        return back();
    }
}
