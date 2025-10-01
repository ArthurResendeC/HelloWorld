from node import Node

class LinkedList:
  def __init__(self):
    self.head = None
    self._size = 0

  def append(self, data):
    """ Append a new node with the given data to the end of the list. """
    if self.head:
      pointer = self.head
      while pointer.next:
        pointer = pointer.next
      pointer.next = Node(data)
    else:
      self.head = Node(data)
    self._size += 1

  def get(self, index):
    """ Get the data of the node at the specified index. """
    if index < 0 or index >= self._size:
      raise IndexError("Index out of bounds")
    pointer = self.head
    for _ in range(index):
      pointer = pointer.next
    return pointer.data

  def setData(self, index, data):
    """ Set the data of the node at the specified index. """
    if index < 0 or index >= self._size:
      raise IndexError("Index out of bounds")
    pointer = self.head
    for _ in range(index):
      pointer = pointer.next
    pointer.data = data

  def index(self, elem):
    """ Return the index of the first occurrence of elem in the list."""
    pointer = self.head
    idx = 0
    while pointer:
      if pointer.data == elem:
        return idx
      pointer = pointer.next
      idx += 1
    raise ValueError(f"{elem} is not in list")

  def display(self):
    """ Display the linked list. """
    current = self.head
    while current:
      print(current.data, end=" -> ")
      current = current.next
    print("None")

  def __len__(self):
    return self._size

# Exemplo de uso
if __name__ == "__main__":
  ll = LinkedList()
  ll.append(1)
  ll.append(2)
  ll.append(3)
  ll.display()
  ll.setData(1, 20)
