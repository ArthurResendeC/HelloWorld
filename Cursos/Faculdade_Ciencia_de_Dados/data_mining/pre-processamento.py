import csv

arquivo = open("tabela-crua.xls")

table = csv.reader(arquivo, delimiter=";")

for t in table:
    t[0] = t[0].replace('á', 'a')
    t[0] = t[0].replace('é', 'e')
    t[0] = t[0].replace('í', 'i')
    t[0] = t[0].replace('ó', 'o')
    t[0] = t[0].replace('ú', 'u')
    print(t[0])
