echo "開始關閉服務"
docker-compose down
echo "關閉服務任務完成"
docker version
docker info
docker-compose version
curl --version
docker-compose build
docker-compose up -d
docker run  -v ${PWD}/python/result:/opt/apps/test/python/result databasesystem-python pytest --junitxml=/opt/apps/test/python/result/test-results.xml --json=/opt/apps/test/python/result/test-results.json --html=/opt/apps/test/python/result/report.html --self-contained-html