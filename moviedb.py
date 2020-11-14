import os
from dotenv import load_dotenv
import json
import urllib.parse
import urllib.request
load_dotenv()

MOVIE_API_KEY = os.getenv('API_KEY')
print(MOVIE_API_KEY)

def build_search(search_query: str):
    part_url = 'http://api.themoviedb.org/3/search/movie?api_key=' + MOVIE_API_KEY + '&query=' + search_query
    print(part_url)
    return part_url

build_search('avengers')
