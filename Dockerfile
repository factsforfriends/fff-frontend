FROM python:3.8

ENV FLASK_APP=f3/f3.py
ENV FLASK_ENV=development

RUN mkdir /f3 
COPY /f3 /f3
COPY pyproject.toml /f3 

WORKDIR /f3
ENV PYTHONPATH=${PYTHONPATH}:${PWD} 

RUN pip3 install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

CMD "/usr/local/bin/flask run --host=0.0.0.0"