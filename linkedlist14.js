//CodeRust Interview Questions - Linked Lists
/* REVIEW Linked Lists traversal with JS pointers, Insertion Sort with Linked Lists, Merge Sort with Linked Lists */


/* 1. Reverse a singly linked list
  * A. Given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of reversed linked list.
  * B. Using a stack, I can push each value of the linked list until null is reached. Then assign the new head to each value as it's popped from the stack.
*/
//Iterative Approach
let reverseLLIterative = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let reversed_head = head;
  let list_to_do = head.next;
  reversed_head.next = null;
  while (head) {
    let temp = head; //Assign the temp variable for head pointer
    head = head.next; //Move head pointer to next in linked list
    temp.next = reverse_head; //Move the temp variable.next value from head to reverse_head.
    reverse_head = temp; //Move the reverse_head pointer to the start of the new node.
  }
  return reversed_head; //Return the reversed node pointer.
}

//The Recursive version will use the stack, which is not infinite, so be aware of this limitation

//  Time - O(n)
//  Space - O(1)
/* TODO NOTES -  Get familiar with pointers and how they work in Javascript */


/* 2. Remove Duplicates from a Linked List
  * A. Remove duplicate nodes from linked list of integers while keeping only the first occurrence of duplicates.
  * B. Keep a Hashtable of all the data values of each node. If a data value is already in the hash table, then the current node is a duplicate and we delete it on the spot, then continue until null is reached.
*/

let removeDuplicates = function(head) {
  let dataSet = new Set();
  let prev = null;
  while (head) {
    if (dataSet.has(head.data)) {
      //deleteCurrentNode(head);
      prev = head.next;
    }
    else {
      dataSet.add(head.data);
      prev = head;
      head = head.next;
    }
  }
}
//  Time - O(n)
//  Space - O(n)
/* TODO NOTES -  To Reduce the Space, we could sort the Linked List in O(nlogn) and then perform a linear scan to remove duplicates in O(1) space! */


/* 3. Delete Node with a given key
  * A. Given head of a linked list and a key, delete node with this given key from the linked list.
  * B. Move through Linked list until node.data is equal to the input key, then delete it. Keep track of prev node, so that it'll be easy to delete.s
*/
let deleteNodeAtKey = function(head, key) {
  if (!head || !head.next) { //Only 0 or 1 Nodes.
    return -1;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    if (curr.data === key) {
      let temp = curr;  //Delete Current Node
      curr = curr.next;
      prev.next = curr;
    }
    else {
      prev = curr;
      curr = curr.next;
    }
  }
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES -  Use current and previous pointers instead of head, leave it at the head of the LL. Then deleting a node is simply assigning prev to curr and curr to curr.next */


/* 4. Insertion Sort of a Linked List
  * A. Given head pointer of a linked list, sort it in ascending order using insertion sort.
  * B. Have another LL that will insert before or after elements in a sorted fashion. Will read each value from the input LL and
*/
let insertSortLL = function(head) {
  let curr = head;
  let sorted = null;

  while (curr.next) {

  }
}
//  Time - O(n^2)
//  Space - O(1)
/* TODO NOTES -  Insertion Sort requires a linear Scan as you insert elements from the input LL to the resulting sorted LL. When inserted, we need a function that will scan through the sorted LL to see when the value is greater than the last node, then input it as node.next */


/* 5. Insertion Point of Two Lists
  * A. Given head nodes of two linked lists that may or may not intersect, find out if they intersect and return the point of intersection; return null otherwise.
  * B. Traverse LL 1 and add each data value to a Set, then Traverse LL 2 and if the Set has the current Node's Data, then this is where they insersect, return the current node. Are duplicate data entries allowed? If so, where does the intersection happen at first or second, etc. duplicate.
*/
let insertionPoint = function(head1, head2) {

}
//  Time - O(m*n)
//  Space - O(1)
/* TODO NOTES -  To Reduce the Time Complexity we can move the larger LL forward the difference in lengths of the Smaller and Larger LL, so that they are traversing at the same depth. Then if the current Link is equal in both LL's then return this current Link */


/* 6. Nth from Last Node
  * A. Given a singly linked list, return nth from last node. Return null if 'n' is out-of-bounds.
  * B. Make two pointer one starting at the head and one starting n nodes forward. Move both pointers by 1 each traverse, return the start pointer if the n pointer reaches null.
*/
let NthfromLast = function(head, n) {
  let curr = head;
  let trav = head;
  for (let i=0; i<n; ++i) {
    if (trav === null) {  //Check for out of bounds n value.
      return null;
    }
    trav.next = head.next;
  }
  while (trav) {
    curr = curr.next;
    trav = trav.next;
  }
  return curr;
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES -  Pointers to a head and tail or curr and crucial for these problems. */


/* 7. Swap Nth Node with Head
  * A. Given the head of a singly linked list and 'N', swap the head with Nth node. Return the head of the new linked list.
  * B. Similar to #6, we will have a tail that will move N times, watching for out of bounds. Then once the tail has sucessfully traversed, we will swap the tail and head.
*/
let swapNthwithHead = function(head, n) {
  let tail = head;
  while (n !== 0) {
    tail = tail.next;
    n--;
  }

  //Swap Nodes likes this ***
  prev.next = head;
  let temp = head.next;
  head.next = current.next;
  current.next = temp;
  //-----
  // let temp = tail;
  // tail = head;
  // head = temp;
  // return head;
}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES -  Swapping pointers should be done like the Above */


/* 8. Merge Two Sorted Linked Lists
  * A. Given two sorted linked lists, merge them such that resulting linked list is also sorted.
  * B. Given two LL as input, create a resulting third Linked List. Traverse each LL and determine if the current Node is > other LL, if so then add to result LL, else, see other LL.
*/
let mergeLinkedLists = function(head1, head2) {
  let retVal = null;
  let curr1 = head1;
  let curr2 = head2;

  while(curr1) {
    if (curr1.data < curr2.data) {
      retVal.next = curr1;
      curr1 = curr1.next;
    }
    else {
      retVal.next = curr2;
      curr2 = curr2.next;
    }
    retVal = retVal.next;
  }
  return retVal;
}
//  Time - O(m + n)
//  Space - O(1)
/* TODO NOTES -  */


/* 9. Merge Sort
  * A. Given head pointer of a linked sort, sort linked list (in ascending order) using merge sort and return new head pointer of sorted linked list.
  * B. We split the input Linkedlist into two parts and keep doing so with the subsequent parts, until each part is 0 or 1 in length. Then we bring them together in a sorted order until we combine all sub-parts.
*/
let mergeSort = function(head) {
  //Need a separate function that will split the input LL. This can use the Runner technique to see where the half-way point is.
}
//  Time - O(nlogn)
//  Space - O(logn)
/* TODO NOTES - Understand how Merge Sort works, since it's a very popular alg with Linked Lists! */


/* 10. Reverse Even Nodes
  * A. Given a singly linked list, reverse nodes at even indices.
  * B. We will traverse input LL and add even numbered Links to a new Linked List. Then once the input LL is traversed, we alternatingly merge sort both linked lists into the result one.
*/
let reverseEvenNodes = function() {

}
//  Time - O(n)
//  Space - O(1)
/* TODO NOTES -  Create Separate smaller functions that call each other so that each smaller function can focus on 1 task!*/


/* 11. Rotate a Linked List
  * A. Given head node of a singly linked list and an integer 'n', rotate linked list by 'n'.
  * B.
*/
let rotateALinkedList = function() {

}
//  Time - O()
//  Space - O()
/* TODO NOTES -  */


/* 12. Reverse K elements
  * A. Given a singly linked list and an integer 'k', reverse every 'k' elements. If k <= 1, then input list is unchanged. If k >= n (n is the length of linked list), then reverse the whole linked list.
  * B.
*/
let reverseKElements = function() {

}
//  Time - O()
//  Space - O()
/* TODO NOTES -  */


/* 13. Add Two Integers
  * A. Given head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list.
  * B.
*/
let addTwoIntegers = function() {

}
//  Time - O()
//  Space - O()
/* TODO NOTES -  */


/* 14. Copy Linked list with Arbitrary Pointer
  * A. Make a deep copy of the given linked list with each node having two pointers: 'next' and 'arbitrary_pointer'.
  * B.
*/
let deepCopyLinkedList = function() {

}
//  Time - O()
//  Space - O()
/* TODO NOTES -  */
