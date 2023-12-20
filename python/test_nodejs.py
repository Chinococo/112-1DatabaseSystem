import requests
def test_api_response():
    # Make a GET request to the API
    url = "http://localhost:5000/api"
    expected_response = {"message": "Hello, this is a simple RESTful API!"}
    response = requests.get(url)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response == expected_response
