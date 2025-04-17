# Description

The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. 
Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

__Notes__
There are 3 attributes:
- name
- age
- sex ('M' or 'F')
When the same attribute is assigned multiple times the hello method shows it only once. 
If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

__Examples__
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.

__Task__
Fix the code so we can all go home early.

**Debugging**