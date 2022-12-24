# frozen_string_literal: true

class NewpostComponent < ViewComponent::Base
  delegate :rich_text_area_tag, to: :helpers
def initialize(post=nil)
@post = post||Post.new
end
end
