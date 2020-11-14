import os
from dotenv import load_dotenv
import json
import urllib.parse
import urllib.request
load_dotenv()

MOVIE_API_KEY = os.getenv('API_KEY')

def build_search(search_query: str):
    part_url = 'http://api.themoviedb.org/3/search/movie?api_key=' + MOVIE_API_KEY + '&query=' + search_query
    return part_url

def get_results(url: str):
    response = None
    try:
        json_text = response.read().decode(encoding = 'utf-8')
        return json.loads(json)
    finally:
        if response != None:
            response.close()

def get_pop_titles(json_result: dict):
    pop_titles = json_result['results']
    selected = pop_titles[0]
    first_choice = selected['title']
    movie_id = selected['id']
    movie_poster = selected['poster_path']
    movie_lang = selected['original_language']

