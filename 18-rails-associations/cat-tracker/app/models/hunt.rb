class Hunt < ApplicationRecord
  belongs_to :hunter_cat, class_name: "Cat" #foreign_key: :hunter_cat_id,
  belongs_to :hunted_mouse, class_name: "Mouse" #foreign_key: :hunted_mouse_id,
end
