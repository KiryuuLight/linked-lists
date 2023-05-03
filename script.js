function LinkedList () {

    let size = 0;
    let head = null;
    let tail = null;
    let pointer = null;
    let secondLast = null;

    const append = (value) => {
        if (size <= 0) {
            const node = Node(value)
            setHead(node);
            setTail(node)
            size += 1;
            return;
        }
        const node = Node(value)
        movePointer(node);
        setTail(node)
        size += 1;
    }

    const prepend = (value) => {
        const node = Node(value)
        if (!head) {
            setTail(node) 
        }
        node.next = head;
        head = node;
        size += 1;
    }


    const movePointer = (node) => {
        pointer.next = node
        secondLast = pointer;
        pointer = node;
    }

    const setHead = (node) => {
        head = node;
        pointer = node;
    }

    const setTail = (node) => {
        tail = node;
    }

    const getHead = () => head.value;
    const getSize = () => size;
    const getTail= () => tail.value;

    const at = (index) => {
        let item = head;
        let i = 0;
        while (item) {
            if (i === index) {
                return item;
            }
            i += 1;
            item = item.next;
        }
        return 'Not found';
    }

    const pop = () => {
        if (size === 0) return;
        if (head !== tail) {
            secondLast.next = null;
            size -= 1;
            tail = secondLast;
            pointer = secondLast;
            return;
        } 
        head = null;
        tail = null;
        size = 0;
    }

    const contains = (value) => {
        let item = head;
        while (item) {
            if (item.value === value) {
                return true;
            }
            item = item.next;
        }
        return false;
    }

    const find = (value) => {
        let item = head;
        let length = size-1;
        let i = 0;
        while (length) {
            if (item.value === value) {
                return i;
            }
            i += 1;
            length -= 1;
            item = item.next;
        }
        return null;
    }

    const insertAt = (value,index) => {
        const valueBefore = at(index-1);
        const placeInsert = valueBefore.next;
        if (!placeInsert) return 'Out of bounds';

        const node = Node(value);
        valueBefore.next = node;
        node.next = placeInsert;
        size += 1;
    }

    const removeAt = (index) => {
        const valueBefore = at(index-1);
        const valueDelete = valueBefore.next;
        if (!valueDelete) return 'Not found';

        if (valueDelete.next !== null) {
            const valueAfter = valueDelete.next
            valueBefore.next = valueAfter;
            size -= 1;
            secondLast = at(size-2);
            tail = at(size-1);
            pointer = at(size-1);
            return;
        }
        valueBefore.next = null;
        size -= 1;
        secondLast = at(size-2);
        tail = at(size-1);
        pointer = at(size-1);
    }


    const toString = () => {
        let str = '';
        let i = size;

        while (i) {
            if (i === size) item = head;
            str = str + `( ${item.value} ) -> `;
            item = item.next; 
            i--;
        }
        str = str + `null`;
        return str;
    }

    return {
        append,
        prepend,
        getHead,
        getSize,
        getTail,
        at,
        pop,
        contains,
        find,
        insertAt,
        removeAt,
        toString,
    }
}

function Node (value = null , next = null) {
    return {
        value,
        next,
    }
}

let linkedList = new LinkedList();
linkedList.append('MiCasa');
linkedList.append('Kirito');
linkedList.append('Cloud');
linkedList.append('Chaos');

console.log(linkedList.toString())
linkedList.insertAt('Michael',3);
console.log(linkedList.toString())
linkedList.removeAt(3);
console.log(linkedList.toString())
console.log(linkedList.getTail())
console.log(linkedList.getSize())



//TODO CheckList
//* append(value) adds a new node containing value to the end of the list  
//* prepend(value) adds a new node containing value to the start of the list
//* size returns the total number of nodes in the list
//* head returns the first node in the list
//* tail returns the last node in the list
//* at(index) returns the node at the given index
//* pop removes the last element from the list
//* contains(value) returns true if the passed in value is in the list and otherwise returns false.
//* find(value) returns the index of the node containing value, or null if not found.
//* toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

//* insertAt(value, index) that inserts a new node with the provided value at the given index.
//* removeAt(index) that removes the node at the given index.
