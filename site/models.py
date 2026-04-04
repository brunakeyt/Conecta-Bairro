#define as tabelas do mysql usando python
#é o model
#classes do SQLAlchemy (MySQL)
#ex:

from . import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200), nullable=False)