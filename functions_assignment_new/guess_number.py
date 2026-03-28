import random

def is_valid_guess(guess):
    """Check if the guess is a number between 1 and 100."""
    return guess.isdigit() and 1 <= int(guess) <= 100


def get_user_guess(prompt):
    """Prompt the user for input."""
    return input(prompt)


def generate_random_number():
    """Generate a random number between 1 and 100."""
    return random.randint(1, 100)


def check_guess(guess, target):
    """Compare guess with the target number."""
    if guess < target:
        return "low"
    elif guess > target:
        return "high"
    else:
        return "correct"


def main():
    target_number = generate_random_number()
    guess_count = 0
    guessed_correctly = False

    guess = get_user_guess("Guess a number between 1 and 100: ")

    while not guessed_correctly:
        if not is_valid_guess(guess):
            guess = get_user_guess(
                "I wont count this one. Please enter a number between 1 to 100: "
            )
            continue

        guess_count += 1
        guess_number = int(guess)

        result = check_guess(guess_number, target_number)

        if result == "low":
            guess = get_user_guess("Too low. Guess again: ")
        elif result == "high":
            guess = get_user_guess("Too High. Guess again: ")
        else:
            print("You guessed it in", guess_count, "guesses!")
            guessed_correctly = True


main()
