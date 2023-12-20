import pandas as pd
import requests


def get_thumbnail(googleid, title):
    if googleid and googleid != "":
        base_url = f"https://www.googleapis.com/books/v1/volumes/{googleid}"
        response = requests.get(base_url)
        if response.status_code == 200:
            data = response.json()
            print(f"retrieving thumbnail for {title}")
            return data.get("volumeInfo", {}).get("imageLinks", {}).get("thumbnail")
        else:
            return f"Error fetching thumbnail for '{title}'"
    else:
        return f"googleid for '{title}' is None"


df = pd.read_csv(
    "/Users/kai-m1/dev/learn-frontend/my-react-personal-portfolio-lab/book-data-processing/output-sorted-read-backup.csv"
)
filtered_df = df[df["read status"] == "read"]

with requests.Session() as session:
    filtered_df["thumbnail_url"] = filtered_df.apply(
        lambda row: get_thumbnail(row["googleid"], row["title"]), axis=1
    )

filtered_df.to_csv("read_with_thumbnail_urls.csv", index=False)
