def is_valid_guess(guess):
    if guess.isdigit() and 1 <= int(guess) <= 100:
        return True
    else:
        return False

def main():
    secret_number = random.randint(1,100)
    guessed_correctly = False
    guess = input("Guess a number between 1 and 100:")
    number_of_guesses = 0

    while not guessed_correctly:
        if not is_valid_guess(guess):
            guess = input("I won’t count this one. Please enter a number between 1 and 100: ")
            continue
        else:
            number_of_guesses += 1
            guess = int(guess)

        if guess < secret_number:
            guess = input("Too low. Guess again: ")
        elif guess > secret_number:
            guess = input("Too high. Guess again: ")
        else:
            print("You guessed it in", number_of_guesses, "guesses!")
            guessed_correctly = True


main()
