"""
Small helper script to assign existing media images to Car records based on `car_name`.

Run from project root (where manage.py is):

Windows PowerShell (with venv activated):
  python assign_images.py

It will look for files under `media/car/images/` and try to match filenames
to `Car.car_name` (case-insensitive, spaces/dashes ignored). It will update
the `image` field on matching Car objects.
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vehicles.settings')
django.setup()

from MyApp.models import Car

MEDIA_DIR = os.path.join(os.path.dirname(__file__), 'media', 'car', 'images')

def normalize(s):
    return ''.join(c for c in s.lower() if c.isalnum())

files = []
if os.path.isdir(MEDIA_DIR):
    files = os.listdir(MEDIA_DIR)
else:
    print('media/car/images not found')

file_norm = {normalize(os.path.splitext(f)[0]): f for f in files}

updated = 0
for car in Car.objects.all():
    key = normalize(car.car_name)
    if key in file_norm:
        relpath = os.path.join('car', 'images', file_norm[key])
        car.image = relpath
        car.save()
        updated += 1

print(f'Updated images for {updated} cars')
