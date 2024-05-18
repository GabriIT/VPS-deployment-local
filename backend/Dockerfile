FROM python:3.11.5-slim

# One of: dev, prod
ARG CURRENT_ENVIRONMENT
ARG PORT

ENV PORT=${PORT} CURRENT_ENVIRONMENT=${CURRENT_ENVIRONMENT}

WORKDIR /app
COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

CMD ["python", "server.py"]
