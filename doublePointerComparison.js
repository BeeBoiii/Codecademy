// 1st execution
const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = linkedList => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer) {
    fastPointer = fastPointer.next;
    if (fastPointer) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }
  }

  return slowPointer;
};

console.log(findMiddle(generateTestLinkedList(7)));






// 2nd execution
const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle02 = linkedList => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next;
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
};

console.log(findMiddle02(generateTestLinkedList(7)));