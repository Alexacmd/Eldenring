import cv2
import numpy as np
import os

output_dir = r"icons/map_cursor_02"

os.makedirs(output_dir, exist_ok=True)

# Load the atlas image
img = cv2.imread(r"D:\Eldenring\icons\SB_MapCursor_02.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to isolate non-black pixels
_, thresh = cv2.threshold(gray, 5, 255, cv2.THRESH_BINARY)

# Find bounding contours of each icon
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

icon_id = 0
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    
    # Filter out tiny noise artifacts
    if w > 10 and h > 10:
        crop = img[y:y+h, x:x+w]

        scale_factor = 4
        new_w, new_h = int(w*scale_factor), int(h*scale_factor)
        crop_upscaled = cv2.resize(crop, (new_w, new_h), interpolation=cv2.INTER_LANCZOS4)
        
        
        # Turn black background transparent (Alpha channel)
        bgra = cv2.cvtColor(crop, cv2.COLOR_BGR2BGRA)
        black_mask = (crop[:, :, 0] < 10) & (crop[:, :, 1] < 10) & (crop[:, :, 2] < 10)
        bgra[black_mask, 3] = 0
        
        # Save individual icon
        file_path = os.path.join(output_dir, f'icon_{icon_id}.png')
        cv2.imwrite(file_path, bgra)
        icon_id += 1

print(f"Saved {icon_id} icons to {output_dir}")