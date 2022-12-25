class Post < ApplicationRecord
  belongs_to :user
  has_rich_text :body

  #  after_create_commit -> { broadcast_prepend_to "posts",  render: PostComponent.new(post: @post), target: "posts"  }
end
