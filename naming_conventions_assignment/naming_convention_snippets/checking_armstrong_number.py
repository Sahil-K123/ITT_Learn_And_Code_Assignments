def calculate_armstrong_sum(number):
    # Initializing Sum and Number of Digits
    armstrong_sum = 0
    digit_count = 0

    # Calculating Number of individual digits
    temp_number = number
    while temp_number > 0:
        digit_count = digit_count + 1
        temp_number = temp_number // 10

    # Finding Armstrong Number Value
    temp_number = number
    for _ in range(1, temp_number + 1):
        last_digit = temp_number % 10
        armstrong_sum = armstrong_sum + (last_digit ** digit_count)
        temp_number //= 10
        
    return armstrong_sum


# User Input
input_number = int(input("\nPlease Enter the Number to Check for Armstrong: "))

if input_number == calculate_armstrong_sum(input_number):
    print("\n %d is Armstrong Number.\n" % input_number)
else:
    print("\n %d is Not an Armstrong Number.\n" % input_number)
