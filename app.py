from 
import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/dados', methods=['GET'])
def get_dados():
    conn = get_db_connection()
    dados = conn.execute('SELECT * FROM auditoria').fetchall()
    conn.close()
    return jsonify([dict(row) for row in dados])

@app.route('/dados', methods=['POST'])
def add_dado():
    novo = request.json
    conn = get_db_connection()
    conn.execute(
        'INSERT INTO auditoria (categoria, descricao) VALUES (?, ?)',
        (novo['categoria'], novo['descricao'])
    )
    conn.commit()
    conn.close()
    return jsonify({'status': 'ok'}), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')