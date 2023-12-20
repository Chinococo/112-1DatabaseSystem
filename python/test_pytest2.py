import mysql.connector
def test_1_plus_1():
    assert 1 + 1 == 3


def test_mysql_connection():
    # MySQL database configuration
    config = {
        'host': 'localhost',
        'port': 3306,
        'user': 'docker',
        'password': 'docker',
        'database': 'database_project'
    }

    try:
        # Establish a connection to the MySQL server
        connection = mysql.connector.connect(**config)

        assert connection.is_connected()

    except mysql.connector.Error as e:
        pytest.fail(f"Error: {e}")

    finally:
        # Close the database connection
        if connection.is_connected():
            connection.close()
            print("Connection closed")

