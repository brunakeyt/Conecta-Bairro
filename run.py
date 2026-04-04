#arquivo executado para ligar o servidor
#ex:

from site import create_app, db

app = create_app()

# Cria as tabelas no MySQL automaticamente se não existirem
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)