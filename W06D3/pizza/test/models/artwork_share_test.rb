# == Schema Information
#
# Table name: artwork_shares
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artwork_id :integer          not null
#  viewer_id  :integer          not null
#

require 'test_helper'

class ArtworkShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
