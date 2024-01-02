import requests
import datetime
import mysql.connector
import pytest
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

def test_createAccount():
    # Make a GET request to the API
    url = "http://localhost:5000/Register"
    expected_response = {"status": "success"};
    data = {
        "Email": "chino@gmail.com",
        "Name": "chino",
        "Sex": "male",
        "Register_date": str(datetime.datetime.now()),
        "Password": "12345678"
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)
def test_LoginAccount():
    # Make a GET request to the API
    url = "http://localhost:5000/Login"
    expected_response = {"status": "success"};
    data = {
        "Email": "chino@gmail.com",
        "Password": "12345678"
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)    
def test_LoginAccountFail1():
    # Make a GET request to the API
    url = "http://localhost:5000/Login"
    expected_response = {"status": "unsuccess","message":'Password error'};
    data = {
        "Email": "chino@gmail.com",
        "Password": "123456781"
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    assert actual_response["message"] == expected_response["message"];
    print(actual_response)  
def test_LoginAccountFail2():
    # Make a GET request to the API
    url = "http://localhost:5000/Login"
    expected_response = {"status": "unsuccess","message":'User not found'};
    data = {
        "Email": "chino@gmail.com1",
        "Password": "12345678"
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    assert actual_response["message"] == expected_response["message"];
    print(actual_response)          
def test_Coupons():
    # Make a GET request to the API
    url = "http://localhost:5000/GetCoupons"
    expected_response = {"status": "success","message":'Coupons retrieved successfully'};
    data = {
        "CustomerID": "A123456789",
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    assert actual_response["message"] == expected_response["message"];
    print(actual_response["coupons"])
    assert len(actual_response["coupons"]) > 0;
    print(actual_response)  
def test_Movie():
    # Make a GET request to the API
    url = "http://localhost:5000/GetMovie"
    expected_response = {"status": "success"};
    response = requests.get(url)
    # Ensure the response has a status code of 200
    assert response.status_code == 200
    # Parse the JSON response
    actual_response = response.json()
    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response["movies"])
    assert len(actual_response["movies"]) > 0;
    print(actual_response)      
def test_MoviebyName():
    # Make a GET request to the API
    url = "http://localhost:5000/GetMovie/Inception"
    expected_response = {"status": "success"};
    response = requests.get(url)
    # Ensure the response has a status code of 200
    assert response.status_code == 200
    # Parse the JSON response
    actual_response = response.json()
    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response["movies"])
    assert len(actual_response["movies"]) > 0;
    print(actual_response)
def test_MoviebyRoughName():
    # Make a GET request to the API
    url = "http://localhost:5000/GetMovie?q=Ince"
    expected_response = {"status": "success"};
    response = requests.get(url)
    # Ensure the response has a status code of 200
    assert response.status_code == 200
    # Parse the JSON response
    actual_response = response.json()
    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response["movies"])
    assert len(actual_response["movies"]) > 0;
    print(actual_response)   
def test_GetMovieByTheaters_Name():
    # Make a GET request to the API
    url = "http://localhost:5000/theaters/台北信義威秀影城"
    expected_response = {"status": "success"};
    response = requests.get(url)
    # Ensure the response has a status code of 200
    assert response.status_code == 200
    # Parse the JSON response
    actual_response = response.json()
    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response["movies"])
    assert len(actual_response["movies"]) > 0;
    print(actual_response)         

def test_Transaction():
    # Make a GET request to the API
    url = "http://localhost:5000/Transaction"
    expected_response = {"status": "success"};
    data = {
        "Play_ID" : "PLAY001",
        "Seta_Row":5,
        "Seta_Column":5, 
        "CustomerID_card":"A123456789", 
        "Coupon_ID":"NoDiscount001",
        "TicketType":"學生票"
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)   
def test_GetCopun():
    # Make a GET request to the API
    url = "http://localhost:5000/Coupon"
    expected_response = {"status": "success"};
    data = {
        "ID_card" : "A123456789",
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    assert len(actual_response["Coupon"])>0
    print(actual_response) 
def test_GetTickets():
    # Make a GET request to the API
    url = "http://localhost:5000/Tickets"
    expected_response = {"status": "success"};
    data = {
        "ID_card" : "A123456789",
    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    assert len(actual_response["Tickets"])>0
    print(actual_response)       
def test_AddMovie():
    # Make a GET request to the API
    url = "http://localhost:5000/AddMovie"
    expected_response = {"status": "success"};
    data = {
        "Type": "Action",
        "Actors": "Actor1, Actor2, Actor3",
        "Rate": "4.5",
        "Director": "Director Name",
        "Name": "Movie Title",
        "Duration": "120",
        "image": "movie_image_url.jpg",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
    }

    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)    
def test_UpdateMovie():
    # Make a GET request to the API
    url = "http://localhost:5000/UpdateMovie"
    expected_response = {"status": "success"};
    data = {
        "Movie_ID":"3",
        "Type": "Action",
        "Actors": "Actor1, Actor2, Actor3",
        "Rate": "4.5",
        "Director": "Director Name",
        "Name": "Movie Title",
        "Duration": "120",
        "image": "movie_image_url.jpg",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ..."
    }

    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)      
def test_AddNotification():
    # Make a GET request to the API
    url = "http://localhost:5000/AddNotification"
    expected_response = {"status": "success"};
    data = {
        "Message": "奇怪的節日",
        "Start_Date": "2023/12/25",
        "End_Date": "2024/1/5",

    }
    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)
def test_GetNotification():
    # Make a GET request to the API
    url = "http://localhost:5000/GetNotification?date=2023/1/10"
    expected_response = {"status": "success"};
    response = requests.get(url)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)                
def test_UpdateMovie():
    # Make a GET request to the API
    url = "http://localhost:5000/UpdateCustomerInformation"
    expected_response = {"status": "success"};
    data = {
        "Name":"fuck you",
        "Sex":"girl",
        "Email":"12345678",
        "Address":"12345678",
        "Password":"12345678",
        "ID_card":"A123456789"
    }

    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)     
def test_AddCinema():
    # Make a GET request to the API
    url = "http://localhost:5000/AddCinema"
    expected_response = {"status": "success"};
    data = {
        "Cinema_ssn":"C005",
        "Cinema_No":"3",
        "Theater_Name":"台北信義威秀影城",
        "Seat_Row":"11",
        "Seat_Column":"11",
    }

    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)        
def test_UpdateCinema():
    # Make a GET request to the API
    url = "http://localhost:5000/UpdateCinema"
    expected_response = {"status": "success"};
    data = {
        "Cinema_ssn":"C001",
        "Cinema_No":"3",
        "Theater_Name":"台北信義威秀影城",
        "Seat_Row":"11",
        "Seat_Column":"11",
    }

    response = requests.post(url,json=data)

    # Ensure the response has a status code of 200
    assert response.status_code == 200

    # Parse the JSON response
    actual_response = response.json()

    # Ensure the actual response matches the expected response
    assert actual_response["status"] == expected_response["status"];
    print(actual_response)     