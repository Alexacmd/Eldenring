# from PIL import Image, ImageFile
# import os
# import shutil

# # Allow large images
# Image.MAX_IMAGE_PIXELS = None
# ImageFile.LOAD_TRUNCATED_IMAGES = True

# img_path = "src/assets/elden-ring-map.jpg"
# out_base = "public/tiles"

# tile_size = 256
# max_zoom = 5

# # Remove old tiles
# if os.path.exists(out_base):
#     shutil.rmtree(out_base)

# os.makedirs(out_base, exist_ok=True)

# # Load image
# img = Image.open(img_path)

# current_img = img.copy()

# # Generate tiles from highest zoom down
# for z in range(max_zoom, -1, -1):
#     width, height = current_img.size

#     print(f"Generating zoom {z} ({width} x {height})")

#     cols = (width + tile_size - 1) // tile_size
#     rows = (height + tile_size - 1) // tile_size

#     for tx in range(cols):
#         for ty in range(rows):

#             left = tx * tile_size
#             upper = ty * tile_size
#             right = min(left + tile_size, width)
#             lower = min(upper + tile_size, height)

#             tile = current_img.crop((left, upper, right, lower))

#             folder = os.path.join(out_base, str(z), str(tx))
#             os.makedirs(folder, exist_ok=True)

#             tile.save(os.path.join(folder, f"{ty}.png"))

#     if z > 0:
#         current_img = current_img.resize(
#             (
#                 max(1, width // 2),
#                 max(1, height // 2),
#             ),
#             Image.Resampling.LANCZOS,
#         )

# print("Done!")

from PIL import Image, ImageFile
import os
import shutil

# Disable Pillow size protection BEFORE opening image
Image.MAX_IMAGE_PIXELS = None
ImageFile.LOAD_TRUNCATED_IMAGES = True

img_path = "src/assets/elden-ring-map.jpg"

img = Image.open(img_path)

print("IMAGE SIZE:", img.size)