# This script generates a CSV file for the list of sponsors from image files in a specified folder.

import os
import csv

# Path to the folder and CSV file
folder_path = '/public/images/sponsors'
csv_file_path = '/public/data/sponsors.csv'

# Get all files in the folder and sort them alphabetically
files = sorted(os.listdir(folder_path))

# Prepare new rows for the CSV
new_rows = []
for file in files:
    if file.endswith(('.png', '.jpg', '.jpeg', '.gif')):  # Filter image files
        name = os.path.splitext(file)[0]  # Extract name without extension
        image_path = f'/images/sponsors/{file}'
        new_rows.append([name, image_path])

# Write to the CSV file
with open(csv_file_path, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['name', 'image'])  # Write header
    writer.writerows(new_rows)  # Write new rows