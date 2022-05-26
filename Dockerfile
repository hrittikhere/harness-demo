FROM python:3.8-alpine

COPY deploy/ /deploy
WORKDIR /deploy

RUN pip install -r requirements.txt 

EXPOSE 5000

CMD ["python", "app.py", "--host=0.0.0.0"]