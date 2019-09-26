# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
    validates :title, :image_url, presence: true
    validates :image_url, uniqueness: true
    validates :title, uniqueness: { scope: :artist_id } # http://guides.rubyonrails.org/active_record_validations.html#uniqueness


    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_many :artwork_shares,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    # has_many_through linking Artwork to user
    has_many :shared_by,
        through: :artwork_shares,
        source: :artwork

# helper method:
    #return artworks made by this user, or shared by this. 
    # 

    def self.art_for_user(user_id)
        # self.shared_by #returns an array of instances, so 
            # we have to do a .each, go through them all
            # do our queries,
            # return that element if artist_id or viewer_id == user_id
        
            # in what form do we return the element(s)?
        #self.where(artist_id: user_id, self.shared_by.viewer_id: user_id)
        
        self.where("artist_id = ?", user_id)

        #self.where("artist_id = ? OR viewer_id = ?", user_id, user_id)
        
        
        
        # where artist_id = user_id we pass in
        # where artist_shared_with user
                # viewer id and artwork id. If we join on artwork ID, 
                # try to get all artowrks shared with us, so all artowrk shares with a viewer id of this user id 

        # use AR and existing AR associations! 
    end
end
