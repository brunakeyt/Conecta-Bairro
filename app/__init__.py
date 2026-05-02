# onde a aplicação é criada (factory)
#ex:

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)

    # Importamos as rotas aqui para evitar erro de importação circular
    from .routes import api
    app.register_blueprint(api)

    return app