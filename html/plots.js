df = pd.read_csv('Crash_by_Year.csv')

fig = px.line(df, x = 'Year', y = 'Fatalities', title='Fatalities by Year')
fig.show()

Plotly.newPlot("plot", data, layout);