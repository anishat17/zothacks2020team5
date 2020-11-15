import os
from dotenv import load_dotenv
import json
import urllib.parse
import urllib.request
load_dotenv()

MOVIE_API_KEY = os.getenv('API_KEY').strip()
print(MOVIE_API_KEY)

def build_search(search_query: str):
    part_url = 'http://api.themoviedb.org/3/search/movie?api_key=' + MOVIE_API_KEY + '&query=' + search_query
    return part_url

def get_results(url: str):
    response = None
    try:
        response = urllib.request.urlopen(url)
        json_text = response.read().decode(encoding = 'utf-8')
        return json.loads(json_text)
    finally:
        if response != None:
            response.close()

def get_pop_titles(json_result: dict):
    pop_titles = json_result['results']
    selected = pop_titles[0]
    first_choice = selected['title']
    m_id = selected['id']
    poster = selected['poster_path']
    lang = selected['original_language']
    return {'first': first_choice, 'movie_num': m_id, 'movie_poster': poster, 'movie_lang': lang}
 
def run_api(search_query: str):
     url_link = build_search(search_query)
     results = get_results(url_link)
     return results
