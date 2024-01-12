<?php

use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;

beforeEach(function () {
    $this->user1 = $user1 = User::factory()->create();
    $this->user2 = $user2 = User::factory()->create();
    $this->thread = $thread = Thread::factory()->create(['user_id' => $user1->id]);
    $this->reply = Reply::factory()->create(['thread_id' => $thread->id]);
});

it('can be mark by the owner of the thread', function () {
    $response = $this->actingAs($this->user1)->post(route('answer.store', $this->thread), [
        'answer_id' => $this->reply->id
    ]);
    $response->assertRedirect();
    expect($response->getRequest()->answer_id)->toEqual($this->reply->id);
});

it('can not be mark by the one who does not have the thread', function () {
    $response = $this->actingAs($this->user2)->post(route('answer.store', $this->thread), [
        'answer_id' => $this->reply->id
    ]);

    $response->assertStatus(403);
});

it('can not be mark by unauthenticated user', function () {
    $this->post(route('answer.store', $this->thread), [
        'answer_id' => $this->reply->id
    ])->assertRedirect(route('login'));
});
