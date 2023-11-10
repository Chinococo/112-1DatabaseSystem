echo "開始關閉服務"
docker-compose down
echo "關閉服務任務完成"
docker version
docker info
docker-compose version
curl --version
docker-compose build
docker-compose up -d
docker run --rm -v "PWD:/app" lamp-python

