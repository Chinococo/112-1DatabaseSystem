#!/bin/bash

echo "開始關閉服務"
docker-compose down
docker stop test1
docker stop test2
docker rm test1
docker rm test2
echo "關閉服務任務完成"

docker version
docker info
docker-compose version
docker-compose build
docker-compose up -d

rm -r ./python/result/

# 设置请求的URL
url="http://localhost:4000/api"

# 设置最大重试次数
maxRetryAttempts=5

# 循环尝试
for ((attempt=1; attempt<=maxRetryAttempts; attempt++)); do
    try {
        # 发起GET请求
        response=$(curl -s $url)

        # 获取消息字段的值
        message=$(echo $response | jq -r '.message')

        # 检查消息是否为期望的字符串
        if [ "$message" = "Hello, this is a simple RESTful API!" ]; then
            echo "Response content is as expected."
            break  # 跳出循环，因为成功了
        else
            echo "Response content does not match the expected string. Retrying..."
        fi
    } catch {
        echo "Request failed. Retrying in 5 seconds..."
        sleep 5
    }
done

docker run -d --name test1 --network host --env-file .sql.env  -v $(pwd)/sqls:/docker-entrypoint-initdb.d databasesystem-database
docker run -d --name test2 --network host -e DB_HOST=localhost databasesystem-nodejs-app

while true; do
    try {
        # Run MySQL command and capture the output
        output=$(docker exec -it test1 mysql -h 127.0.0.1 -P 3306 2>&1)

        # Check if the output contains the access denied error
        if [[ "$output" =~ "Access denied for user 'root'@'127.0.0.1'" ]]; then
            echo "Connection successful"
            break
        else
            echo "Connection error: $output"
        fi
    } catch {
        echo "Error: $_"
    }

    # Wait for one second before the next iteration
    sleep 3
done

docker run --rm -v $(pwd)/python/result:/opt/apps/test/python/result --network host databasesystem-python pytest --junitxml=/opt/apps/test/python/result/test-results.xml --json=/opt/apps/test/python/result/test-results.json --html=/opt/apps/test/python/result/report.html --self-contained-html
xdg-open $(pwd)/python/result/report.html
