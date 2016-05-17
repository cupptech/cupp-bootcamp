Linked Lists

    For array, inserting and removing items from the beginning or from the middle of the array is expensive because the elements need to be shifted over.
    
    Linked lists store a sequential collection of elements, the elements are not placed continuously in memory, each elements consists of a node that stores the element itself and also a reference that points to the next element.
    - When adding or removing elements, do not need to shift elements over.
    - If we want to access an element from the middle, we need to start from the beginning (head) and iterate the list until we find the desired element.
    
    Circular linked lists
    The last element's next(tail.next) pointer to the first element(head).
