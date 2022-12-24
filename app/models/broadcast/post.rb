module Broadcast
  class Post
    def self.append(post:)
      new(post).append
    end

    def initialize(post)
      @post = post
    end

    def append
      Turbo::StreamsChannel.broadcast_append_later_to(
        :post,
        target: "posts",
        html: rendered_component
      )
    end

    private

    attr_reader :post

    def rendered_component
      ApplicationController.render(
        PostComponent.new(post: self.post),
        layout: false
      )
    end
  end
end
