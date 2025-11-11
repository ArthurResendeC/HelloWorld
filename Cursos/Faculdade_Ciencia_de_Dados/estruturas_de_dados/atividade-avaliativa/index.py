minhas_tarefas = []
pilha_desfazer = []

def adicionar_tarefa(id, descricao):
    tarefa = {'id': id, 'descricao': descricao, 'status': 'Pendente'}
    minhas_tarefas.append(tarefa)
    pilha_desfazer.append(id)

def mostrar_tarefas():
    for tarefa in minhas_tarefas:
        print(f"ID: {tarefa['id']}, Descrição: {tarefa['descricao']}, Status: {tarefa['status']}")
def desfazer_adicao():
    if not pilha_desfazer:
        print("Nenhuma tarefa para desfazer.")
        return
    ultima_tarefa = pilha_desfazer.pop()
    for tarefa in list(minhas_tarefas):
        if tarefa['id'] == ultima_tarefa:
            minhas_tarefas.remove(tarefa)
            break

adicionar_tarefa(1, "Estudar Python")
adicionar_tarefa(2, "Fazer exercícios")

print("Tarefas após adições:\n")
mostrar_tarefas()
print("\n------------------------------")
print("\nDesfazendo última adição...\n")

desfazer_adicao()
print("------------------------------")
print("\nTarefas após desfazer:\n")
mostrar_tarefas()
