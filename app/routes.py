#as funções que recebem a URL, buscam no banco de dados e chamam o HTML
#é o controller
#ex:

from flask import Blueprint, render_template, request, redirect, url_for
from .models import Task
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    # Busca todas as tarefas do MySQL
    tasks = Task.query.all()
    # Envia para a View (HTML)
    return render_template('index.html', tasks=tasks)

@main.route('/add', methods=['POST'])
def add_task():
    content = request.form.get('content')
    if content:
        new_task = Task(description=content)
        db.session.add(new_task)
        db.session.commit()
    return redirect(url_for('main.index'))