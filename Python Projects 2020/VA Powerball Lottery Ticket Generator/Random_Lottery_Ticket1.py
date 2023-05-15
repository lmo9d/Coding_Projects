import random


def Lottery_Numbers():
    """ A Function that Returns 5 Random Lottery Numbers and 1 Power Ball Number"""
    value1 = random.randint(1, 69)
    value2 = random.randint(1, 69)
    value3 = random.randint(1, 69)
    value4 = random.randint(1, 69)
    value5 = random.randint(1, 69)
    powerball_numbers = random.randint(1, 26)
    print(value1, value2, value3, value4, value5)
    print("Your powerball number is: # {}".format(powerball_numbers))

player_name = input("Welcome to the Virginia Powerball Lottery! \nWhat is you're name?: ")
print("Welcome", player_name + "!")


ready_play = input("...Are you ready for your Lottery numbers? Y / N: ")
if ready_play == "Y":
    Lottery_Numbers()
elif ready_play == "N":
    try_again = input("... Ok, When you're ready, just enter the letter Y: ")
    try_again == "Y"
    Lottery_Numbers()

# Pick 5 different numbers (from 1 - 69)
# then, select 1 Powerball number (from 1 - 26)
# Powerball draws are held every Wednesday and Saturday at 11 p.m.


# How to Win!
# There are 9 ways to win a Powerball game, and here are a few:

# If you only match the Powerball number, you can win at minimum $4.
# Match the first 5 numbers, and you win $1 million.
# Match all five numbers and the Powerball number, and you walk away with the Powerball jackpot!
