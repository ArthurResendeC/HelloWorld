nuvens = [
   0 # índice 0
  ,0 # índice 1
  ,1 # índice 2
  ,0 # índice 3
  ,0 # índice 4
  ,1 # índice 5
  ,0 # índice 6
]

def pular_nuvens(nuvens: list[int]) -> int :
    saltos = 0
    i = 0
    while i < (len(nuvens) - 2):
        if nuvens[i + 2] != 1:
            i += 2
        else:
            i += 1
          saltos += 1
        print("Índice atual:", i, "Saltos:", saltos)
    return saltos
print(pular_nuvens(nuvens)) # 4