import pdb


my_list = [5, 2, 1, True, "abcdefg", 3, False, 4]

# import pdb; pdb.set_trace <-- this is another way you can enter pdb without have to enter the Line Below!

pdb.set_trace() # After you're done Debugging with pdb, REMOVE IT!
del my_list[3]
del my_list[3]
del my_list[4]
print(my_list)
