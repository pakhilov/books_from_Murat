export enum FailureType {
  // If the user answers no to all FailureTypes
  unanswered = 'unanswered',
  // Non - Accidental FailureTypes
  electricalFailure = 'electricalFailure',
  mechanicalFailure = 'mechanicalFailure',
  // Accidental FailureTypes
  road_hazard = 'road_hazard',
  waterDamage = 'waterDamage',
  dropped = 'dropped',
  // Furniture FailureTypes
  aluminum_finish_scratch = 'aluminum_finish_scratch',
  animal_damage = 'animal_damage',
  ballpoint_ink_stain = 'ballpoint_ink_stain',
  bleach_stain = 'bleach_stain',
  box_spring_handle_damage = 'box_spring_handle_damage',
  broken_zipper_button = 'broken_zipper_button',
  burn = 'burn',
  burn_heat_mark = 'burn_heat_mark',
  burning_mech_component_damage = 'burning_mech_component_damage',
  color_fade_loss = 'color_fade_loss',
  color_fade_loss_change = 'color_fade_loss_change',
  electrical_component_damage = 'electrical_component_damage',
  electrical_component_failure = 'electrical_component_failure',
  fabric_gazebo_cover_sling_frame_damage = 'fabric_gazebo_cover_sling_frame_damage',
  finish_check_crack_bubble_peel = 'finish_check_crack_bubble_peel',
  fire = 'fire',
  foam_loss = 'foam_loss',
  food_beverage_stain = 'food_beverage_stain',
  frame_damage = 'frame_damage',
  frame_spring_mech_motor_lever_damage = 'frame_spring_mech_motor_lever_damage',
  human_pet_body_fluid_waste_stain = 'human_pet_body_fluid_waste_stain',
  incline_recline_heat_vibrate_mech_damage = 'incline_recline_heat_vibrate_mech_damage',
  liquid_mark_ring = 'liquid_mark_ring',
  loose_joint = 'loose_joint',
  material_scuffing_scrapes_fraying_pilling = 'material_scuffing_scrapes_fraying_pilling',
  mirror_glass_chip_scratch_break = 'mirror_glass_chip_scratch_break',
  mirror_silvering_loss = 'mirror_silvering_loss',
  mold_mildew = 'mold_mildew',
  nail_polish_and_remover_stain_damage = 'nail_polish_and_remover_stain_damage',
  non_damage_breakage = 'non_damage_breakage',
  non_fire_burn = 'non_fire_burn',
  odor = 'odor',
  other_puncture_tear_rip = 'other_puncture_tear_rip',
  other_water_damage = 'other_water_damage',
  perspiration_hair_body_oils = 'perspiration_hair_body_oils',
  pet_damage = 'pet_damage',
  puncture_cut_tear_rip = 'puncture_cut_tear_rip',
  rocker_swivel_glide_recline_mech_breakage = 'rocker_swivel_glide_recline_mech_breakage',
  rug_fringe = 'rug_fringe',
  rug_pilling_fraying = 'rug_pilling_fraying',
  scratch_gouge_chip = 'scratch_gouge_chip',
  seam_separation = 'seam_separation',
  six_inch_border_tear = 'six_inch_border_tear',
  spring_coil_puncture_tear_rip = 'spring_coil_puncture_tear_rip',
  table_arc_umbrella_mech_damage = 'table_arc_umbrella_mech_damage',
  table_top_breakage = 'table_top_breakage',
  umbrella_rib_damage = 'umbrella_rib_damage',
  vermin = 'vermin',
  weld_breakage = 'weld_breakage',
  // Jewelry FailureTypes
  broken_bent_or_worn_prong_clasp_or_hinge = 'broken_bent_or_worn_prong_clasp_or_hinge',
  knotted_or_broken_link_in_necklace_or_bracelet = 'knotted_or_broken_link_in_necklace_or_bracelet',
  broken_earring_backing = 'broken_earring_backing',
  lost_earring_pin_or_post = 'lost_earring_pin_or_post',
  stretched_pearl_necklace = 'stretched_pearl_necklace',
  chipped_or_cracked_stone_or_center_stone = 'chipped_or_cracked_stone_or_center_stone',
  lost_center_or_side_or_enhancement_stone = 'lost_center_or_side_or_enhancement_stone',
  chain_soldering = 'chain_soldering',
  lost_jewelry_item = 'lost_jewelry_item',
  stolen_jewelry_item = 'stolen_jewelry_item',
  // Tire/Wheel FailureTypes
  road_hazard_blowout = 'road_hazard_blowout',
  tire_pressure_loss = 'tire_pressure_loss',
}

export enum ClaimProductSection {
  adjustable_bed_base = 'adjustable_bed_base',
  area_rug = 'area_rug',
  fabric_area_cushion_set = 'fabric_area_cushion_set',
  fabric_vinyl_leather = 'fabric_vinyl_leather',
  indoor_hard_surface = 'indoor_hard_surface',
  mattress = 'mattress',
  outdoor_hard_surface = 'outdoor_hard_surface',
  propane_fire_pit = 'propane_fire_pit',
  umbrella = 'umbrella',
}

Object.values(FailureType)
Object.values(ClaimProductSection) //?
