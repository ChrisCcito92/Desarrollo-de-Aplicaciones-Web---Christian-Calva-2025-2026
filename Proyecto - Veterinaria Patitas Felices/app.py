from flask import Flask

app = Flask(__name__)

@app.route('/')
def inicio():
    return """
    <h1>Veterinaria Patitas Felices</h1>
    <h3>Sistema Web de Agendamiento de Citas</h3>
    <p>Agenda citas médicas de manera rápida.</p>
    """

@app.route('/agendamiento/<cliente>')
def reserva(cliente):
    return f"Bienvenido {cliente}. Tu agendamiento se está realizando."

if __name__ == "__main__":
    app.run(debug=True)