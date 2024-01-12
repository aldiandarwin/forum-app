<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'created_at' => $this->created_at->format("d F, Y"),
            'likes_count' => $this->likes_count,
            'parent_id' => $this->parent_id,
            'children' => ReplyResource::collection($this->when($this->has('children'), $this->children()->withCount('likes')->get())),
            'user' => [
                'id' => $this->user_id,
                'name' => $this->user->name,
                'picture' => $this->user->picture(),
            ]
        ];
    }
}
