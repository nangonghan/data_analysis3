import pandas as pd
read_file = pd.read_excel(r'./demo.xlsx',sheet_name='日')
read_file.to_csv(r'./day.csv', index=None, header=True)

read_file = pd.read_excel(r'./demo.xlsx',sheet_name='周')
read_file.to_csv(r'./week.csv', index=None, header=True)

read_file = pd.read_excel(r'./demo.xlsx',sheet_name='月')
read_file.to_csv(r'./month.csv', index=None, header=True)
