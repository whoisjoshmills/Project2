import os
import sys
import subprocess
from flask import Flask,jsonify, render_template

import pandas as pd
# from flask_cors import CORS
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import psycopg2

plane = pd.read_csv('./resources/Plane_crash.csv')

clean_data = pd.read_csv('./resources/Plane_crash.csv').to_dict('records')

app = Flask(__name__)

engine = create_engine('postgresql://postgres:postgres@localhost/plane')
Base = automap_base()
Base.prepare(engine,reflect=True)

# pd.read_csv('./resources/Plane_crash.csv').to_sql('plane_two',con=engine)

@app.route('/',methods=['GET']) 
def home_page():
  return render_template('index.html')

@app.route('/one',methods=['GET']) 
def visualization_1():
  return render_template('visualization_1.html')

@app.route('/two',methods=['GET']) 
def visualization_2():
  return render_template('visualization_2.html')

@app.route('/three',methods=['GET']) 
def visualization_3():
  return render_template('visualization_3.html')

@app.route('/four',methods=['GET'])
def visualization_4():
  return render_template('visualization_4.html')

@app.route('/api/sql_data',methods=['GET'])
def sql_data():
  df = pd.read_sql('''SELECT * FROM plane_two''', con=engine)
  sql_plane = df.to_dict('records')
  return jsonify(sql_plane)

@app.route('/showLineChart')
def line():
    count = 500
    xScale = np.linspace(0, 100, count)
    yScale = np.random.randn(count)
 
    # Create a trace
    trace = go.Scatter(
        x = xScale,
        y = yScale
    )
 
    data = [trace]
    graphJSON = json.dumps(data, cls=plotly.utils.PlotlyJSONEncoder)
    return render_template('Visualization_JD.html',
                               graphJSON=graphJSON)

if __name__ == '__main__':
  app.run(debug=True)