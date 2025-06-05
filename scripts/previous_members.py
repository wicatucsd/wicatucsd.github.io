import os

# Folder containing the pictures
folder_path = "public/images/previous_members"

# List of full names
names = [
    "Lina Battikha",
    "Helena Hundhausen",
    "Arushi Munjal",
    "Shravi Jain",
    "Advika Sonti",
    "Zhamilya Shakirova",
    "Jezebel Yangari",
    "Michelle Ma",
    "Vanessa Hu",
    "Kalea Porter",
    "Angela Tsai",
    "Melody Gill",
    "Anshi Singh",
    "Arpita Pandey",
    "Kathy Chen",
    "Shambhavi Mittal",
    "Trinity Ortiz",
    "Heidi Tam",
    "Ginger Smith",
    "Danielle Dang",
    "Pallavi Gaikwad",
    "Noah Kim",
    "Jenny Lam",
    "Navyaa Gupta",
    "Terri Tai",
    "Isha Varada",
    "Sabine Loaiza Chable",
    "Minjoo O",
    "Adrianne Nguyen"
]

# Create a mapping from first name to full name
name_map = {name.split()[0].lower(): name for name in names}

# Go through the files and rename them using the full name
for file in os.listdir(folder_path):
    first_name = os.path.splitext(file)[0].lower()  # remove extension and lowercase
    ext = os.path.splitext(file)[1]  # keep the original extension

    if first_name in name_map:
        full_name = name_map[first_name]
        new_file_name = f"{full_name.replace(' ', '_')}{ext}"
        os.rename(os.path.join(folder_path, file), os.path.join(folder_path, new_file_name))
        print(f"Renamed '{file}' to '{new_file_name}'")
    else:
        print(f"Warning: No match found for '{file}'")