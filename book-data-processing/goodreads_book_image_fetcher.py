import csv
import requests
import sys

"""
This script converts a Goodreads export csv into a Book Track friendly csv.
It does this by querying Google Books' api for each book and adding its id,
along with removing some of the other unnecessary fields in the original
export.
The reason for writing this script is that the import with the csv from Goodreads
as is does not pull the book cover images. This is based on the iOS shortcut made
by https://twitter.com/chadlenberg.
It takes in a paramter of the goodreads exported csv and outputs a file called
output.csv.
"""


def process(filename):
    with open(filename) as csv_file:
        csv_reader = csv.DictReader(csv_file)
        with open("output.csv", mode='w') as write_file:
            csv_writer = csv.writer(write_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            first = True
            for row in csv_reader:
                if first:
                    csv_writer.writerow(
                        ['title', 'author', 'googleid', 'goodreads_id', 'start date', 'end date', 'read status',
                         'rating', 'pages'])
                    first = False
                google_id = get_google_id(row["Title"], row["Author"])
                csv_writer.writerow(
                    [row["Title"], row["Author"], google_id, row["Book Id"], row["Date Added"], row["Date Read"],
                     row["Exclusive Shelf"], row["My Rating"], row["Number of Pages"]])


def get_google_id(title, author):
    response = requests.get("https://www.googleapis.com/books/v1/volumes",
                            params={'q': f"{title}+inauthor:{author}",
                                    'maxResults': 1,
                                    'projection': "lite"})
    json_response = response.json()
    if 'items' in json_response:
        return json_response['items'][0]['id']
    else:
        return ""


if __name__ == '__main__':
    process(sys.argv[1])
