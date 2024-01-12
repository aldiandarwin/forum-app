<?php

use App\Models\User;
use App\Models\Thread;
use App\Models\Category;

beforeEach(function () {
    $this->user = User::factory()->create();
});

test('an authenticated user can create new thread', function () {
    $thread = Thread::factory()->make();
    $this->actingAs($this->user)->post(route('threads.store'), $thread->toArray())->assertRedirect();
});

test('an authenticated user can not create new thread if he does not fill anything required', function () {
    $this->actingAs($this->user)->post(route('threads.store'), [
        'title' => '',
    ])->assertRedirect();
});

test('a guest can not create new thread', function () {
    $thread = Thread::factory()->make();
    $this->post(route('threads.store'), $thread->toArray())->assertRedirect(route('login'));
    $this->assertGuest();
});

it('can be update by the owner of thread', function () {
    $thread = Thread::factory()->create([ 'user_id' => $this->user->id]);

    expect($this->user->id)->toEqual($thread->user_id);

    $response = $this->actingAs($this->user)->put(route('threads.update', $thread->slug), [
        'title' => 'Thread Updated',
        'body' => 'The body is updated',
        'category_id' => Category::factory()->create()->id,
    ]);

    $response->assertRedirect();
    expect($response->getRequest()->title)->toEqual('Thread Updated');
});

it('can not be updated if he does not fill anything required', function () {
    $thread = Thread::factory()->create(['user_id' => $this->user->id]);
    expect($thread->user_id)->toEqual($this->user->id);
    $response = $this->actingAs($this->user)->put(route('threads.update', $thread->slug), []);
    $response->assertRedirect()->assertSessionHasErrors();
});

it('can not be updated if he does not own the thread', function () {
    $thread = Thread::factory()->create();
    $response = $this->actingAs($this->user)->put(route('threads.update', $thread->slug), []);
    expect($response->status())->toEqual(403);
});

it('can be deleted by the owner of the thread', function () {
    $thread = Thread::factory()->create(['user_id' => $this->user->id]);
    expect($this->user->id)->toEqual($thread->user_id);
    $response = $this->actingAs($this->user)->delete(route('threads.destroy', $thread->slug));
    $response->assertRedirect(route('threads.index'));
    $this->assertDeleted($thread);
});

it('can not be deleted if he does not own the thread', function () {
    $thread = Thread::factory()->create();
    $response = $this->actingAs($this->user)->delete(route('threads.destroy', $thread->slug));
    expect($response->status())->toEqual(403);
});
