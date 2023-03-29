FROM python:3.9.16

RUN pip install -U pip
RUN pip install rasa

WORKDIR /app
ENV HOME=/app
COPY . .

# RUN rasa train nlu

USER 1001

ENTRYPOINT [ "rasa" ]

CMD [ "run", "--enable-api", "--port", "8080" ]