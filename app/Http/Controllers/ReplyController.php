<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Request $request, Thread $thread)
    {
        $request->validate([
            'body' => ['required'],
        ]);

        $request->user()->replies()->create([
            'parent_id' => $request->parent_id ?? null,
            'body' => $request->body,
            'thread_id' => $thread->id,
        ]);

        return redirect(route('threads.show', $thread));
    }
}
