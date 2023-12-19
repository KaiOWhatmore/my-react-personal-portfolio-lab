import pandas as pd

# Load your CSV file
df = pd.read_csv('output.csv')

# Sort by the 'read status' column
df_sorted = df.sort_values(by='read status')

# Save the sorted DataFrame back to CSV
df_sorted.to_csv('output-sorted-read.csv', index=False)

