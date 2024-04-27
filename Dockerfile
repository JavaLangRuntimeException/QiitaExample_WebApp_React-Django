# Node.jsの公式イメージを使用
FROM node:14 as build

# 作業ディレクトリの設定
WORKDIR /app/frontend

# package.jsonとpackage-lock.jsonをコピー
COPY frontend/package*.json ./

# Node.jsの依存パッケージをインストール
RUN npm install

# 残りのフロントエンドファイルをコピー
COPY frontend/ .

# Djangoアプリ用のイメージをベースに
FROM python:3.9

# 作業ディレクトリの設定
WORKDIR /app

# 必要なパッケージをインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 残りのファイルをコピー
COPY . .

# データベースファイルを永続化するためのボリュームを作成
VOLUME /app/db_data

# ポートの公開
EXPOSE 8000

# Djangoアプリの起動コマンド
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
