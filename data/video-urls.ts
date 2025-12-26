/**
 * Mapping of local video paths (relative to public/final/videos, without extension)
 * to their hosted Cloudinary URLs.
 */
export const VIDEO_URLS = {
  "3d_walkthroughs/3d_plot_layout_animation": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730878/passiflora/3d_walkthroughs/3d_plot_layout_animation.mp4",
  "3d_walkthroughs/WhatsApp Video 2025-12-25 at 8.33.48 PM (1)": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730926/passiflora/3d_walkthroughs/WhatsApp%20Video%202025-12-25%20at%208.33.48%20PM%20%281%29.mp4",
  "3d_walkthroughs/WhatsApp Video 2025-12-25 at 8.33.48 PM (2)": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730937/passiflora/3d_walkthroughs/WhatsApp%20Video%202025-12-25%20at%208.33.48%20PM%20%282%29.mp4",
  "3d_walkthroughs/WhatsApp Video 2025-12-25 at 8.33.48 PM (3)": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730949/passiflora/3d_walkthroughs/WhatsApp%20Video%202025-12-25%20at%208.33.48%20PM%20%283%29.mp4",
  "3d_walkthroughs/hero_compressed": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730955/passiflora/3d_walkthroughs/hero_compressed.mp4",
  "3d_walkthroughs/hero_compressed_1.5x": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730959/passiflora/3d_walkthroughs/hero_compressed_1.5x.mp4",
  "3d_walkthroughs/hero_sequenced": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730972/passiflora/3d_walkthroughs/hero_sequenced.mp4",
  "3d_walkthroughs/hero_walkthrough": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730980/passiflora/3d_walkthroughs/hero_walkthrough.mp4",
  "landscapes/distant_bridge_view_1": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766730995/passiflora/landscapes/distant_bridge_view_1.mp4",
  "landscapes/green_field_distant_bridge": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731045/passiflora/landscapes/green_field_distant_bridge.mp4",
  "landscapes/view_from_bushes_to_sandy_area": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731101/passiflora/landscapes/view_from_bushes_to_sandy_area.mp4",
  "landscapes/wide_muddy_river_view": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731109/passiflora/landscapes/wide_muddy_river_view.mp4",
  "railway_views/overhead_track_view_1": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731112/passiflora/railway_views/overhead_track_view_1.mp4",
  "railway_views/overhead_track_view_2": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731114/passiflora/railway_views/overhead_track_view_2.mp4",
  "railway_views/railway_landscape_view_1": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731118/passiflora/railway_views/railway_landscape_view_1.mp4",
  "railway_views/railway_landscape_view_2": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731122/passiflora/railway_views/railway_landscape_view_2.mp4",
  "railway_views/train_roof_view": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731125/passiflora/railway_views/train_roof_view.mp4",
  "site_activity/blue_tractor_plowing": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731164/passiflora/site_activity/blue_tractor_plowing.mp4",
  "site_activity/man_with_dog_under_tree": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731174/passiflora/site_activity/man_with_dog_under_tree.mp4",
  "site_activity/site_ground_closeup": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731197/passiflora/site_activity/site_ground_closeup.mp4",
  "site_activity/white_suv_on_dirt_track": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731212/passiflora/site_activity/white_suv_on_dirt_track.mp4",
  "site_activity/yellow_tractor_leveling": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731239/passiflora/site_activity/yellow_tractor_leveling.mp4",
  "site_features/curved_dirt_track": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731248/passiflora/site_features/curved_dirt_track.mp4",
  "site_features/drying_cow_dung_landscape": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731255/passiflora/site_features/drying_cow_dung_landscape.mp4",
  "site_features/white_structure_and_fence": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731318/passiflora/site_features/white_structure_and_fence.mp4",
  "surveying/land_surveyor_with_theodolite": "https://res.cloudinary.com/doxmvuss9/video/upload/v1766731339/passiflora/surveying/land_surveyor_with_theodolite.mp4"
} as const;

export type VideoKey = keyof typeof VIDEO_URLS;
