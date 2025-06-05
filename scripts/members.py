import csv

input_file = '/public/data/board_members2.csv'
output_file = '/public/data/board_members2_modified.csv'

with open(input_file, 'r') as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)  # Read the header row

    # Remove the 'Timestamp' column from the header
    timestamp_index = header.index('Timestamp')
    header.pop(timestamp_index)

    rows = []
    for row in reader:
        row.pop(timestamp_index)  # Remove the 'Timestamp' column from each row
        name = row[0].strip()  # Get the name column
        if name:
            first_name, last_name = name.split(' ', 1)
            formatted_name = f"/images/members/{first_name}_{last_name}.jpeg"
            row[-1] = formatted_name  # Update the last column
        rows.append(row)

with open(output_file, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)  # Write the updated header row
    writer.writerows(rows)  # Write the modified rows