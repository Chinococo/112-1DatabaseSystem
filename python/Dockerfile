FROM python:3.10-alpine

WORKDIR /opt/apps/test

COPY test.py test.py
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
CMD ["python3", "test.py"]