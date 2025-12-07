import random

def roll_dice(max_value):
    random_number = random.randint(1, max_value)
    return random_number

def main():
    sides = 6
    keep_rolling = True

    while keep_rolling:
        user_input = input("Ready to roll? Enter Q to Quit: ")

        if user_input.lower() != "q":
            rolled_number = roll_dice(sides)
            print("You have rolled a", rolled_number)
        else:
            keep_rolling = False


main()
