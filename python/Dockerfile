# 使用 Python 3.10 版本的基础镜像
FROM python:3.10

# 设置工作目录
WORKDIR /opt/apps/test

# 复制测试代码和相关文件到容器中
COPY test_pytest.py /opt/apps/test
COPY requirements.txt /opt/apps/test

# 安装依赖
RUN pip install -r /opt/apps/test/requirements.txt

# 运行 pytest 并输出测试结果到文件
CMD ["pytest", "--junitxml=test-results.xml"]

