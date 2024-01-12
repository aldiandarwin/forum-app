<?php

use App\Models\Reply;
use App\Models\Thread;
use App\Models\User;

beforeEach(function () {
    $this->user = $user = User::factory()->create();
    $this->thread = $thread = Thread::factory()->create();
    $this->reply = Reply::factory()->create(['thread_id' => $thread->id, 'user_id' => $user->id]);
});

test('thread can be liked by authenticated user', function () {
    $this->withoutExceptionHandling();
    $this->actingAs($this->user)->post(route('likes.store', ['thread' => $this->thread->id]))
        ->assertRedirect();
    expect($this->thread->likes->count())->toBe(1);
});

test('reply can be liked by authenticated user', function () {
    $this->actingAs($this->user)->post(route('likes.store', ['reply' => $this->reply->id]))
        ->assertRedirect();
    expect($this->reply->likes->count())->toBe(1);
});

it('it can not be like by unauthenticated user', function () {
    $this->post(route('likes.store', ['reply' => $this->reply->id]))
        ->assertRedirect(route('login'));
});

it('it will be redirect to 404 page if it is not reply or thread', function () {
    $this->actingAs($this->user)->post(route('likes.store', ['nothing' => 'nothing']))
        ->assertStatus(404);
});
