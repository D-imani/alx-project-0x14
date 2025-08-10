# Project Description
CineSeek is a modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. The application allows users to browse movies from the MoviesDatabase API, view movie details, and search for films by year or genre. The project focuses on creating a responsive, well-structured web application with proper API integration and TypeScript typing.

## API Overview
The MoviesDatabase API is a collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members.

## API version
The API version used for this project is V1

## Available Endpoints
Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'
Tha main endpoints available in the API are :
- Titles. 
    + Titles - Multiple. Returns array of titles according to filters / sorting query parameters provided.
    + Titles - By List of Id's : returns array of titles according to array of id's provided.
    + Title. Returns title according to filters / sorting query parameters provided
    + Title Rating. Returns title rating and votes number
    + Seasons and Episodes. Returns array of episodes only with episode id, episode number and season number in ascending order.
    + Seasons Number.  Returns number of seasons for the series (integer)
    + Episodes Id`s By Series Id and Season. Returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
    + Episode.  Returns episode according to filters / sorting query parameters provided
    + Upcoming Titles. Returns array of upcoming titles according to filters / sorting query parameters provided

- Search. 
    + Titles by Keyword. Returns array of titles according to filters / sorting query parameters provided and the keyword provided in path.
    + Titles by title. Returns array of titles according to filters / sorting query parameters provided and the title provided in path.
    + Titles by Aka's. Returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches.
- Actors.
    + Actors. Returns array of actors according to filters
    + Actor by ID. Returns actor details.
- Utils
    + Title type. Returs array of title types.
    + Genres. Returs array of genres.
    + Titles Lists. Returns array of lists (for 'list' query parameter)

## Request and Response Format
- Request format :
    + HTTP Method. Usually GET or POST
    + Endpoint URL. Provided in the "Endpoints" section.
    + Headers. Includes the X-RapidAPI-Key(This is your API Key) and X-RapidAPI-Host(Host name usually - moviesdatabase.p.rapidapi.com)
    + Query Parameters / Body - Varies by endpoint example, search terms and IDs
- Response Format :
    + The responses are usually in JSON, with the fields depending on the endpoints
    + A successful response usually returns fields such as title, year, genre, actors e.t.c for movies and total_results and page for metadata
    + Errors include : HTTP status codes such as 401 unauthorized and 404 not found. It could also be a JSON body with error messages 

## Authentication
When making an API request, add the headers below :
- X-RapidAPI-Key : Your API Key
- X-RapidAPI-Host : the hosting site
**NB** Your API Key should be kept a secret, store it in environment variebles not directly in code. 

## Error Handling
Common error responses from the API are :
- 401 Authorized
    The cause is missing or incorrect X-RapidAPI-Key or using an expired or invalid key. To handle it, always store keys in environment variables i.e .env files and verifying X-RapidAPI-Key and X-RapidAPI-Host are correct.
- 404 Not Found
    The cause is the endpoint URL neing incorrect and the requested rescource not existing example movie title not found. To handle it validate user input before making the request.
- 429 Too Many Requests.
    The cause is exceeding the API rate limit for your subscription plan. To handle it implement rate limiting and caching to avoid repeated identical requests.
- 500+ Server Errors
    The cause is the API server experiencing issues. To handle it implement retry logic(i.e Server error. Please try again later) with exponential backoff.
- Network Errors. 
    The cause is no internet connection and DNS or server unreachable. To handle it, notify the user to check their connection and consider offline caching for critical data.

## Usage Limits and Best Practices
- For the basic plan one can make 500,000 requests per month and a rate of 1000 requests per hour.
- For the pro plan, one uses $0.01 per request and the rate limit is 5 requests per second.
