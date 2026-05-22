name = ['sooine','secondary','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth']



total = 


print(list(total))


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
def is_even(num):
    return num % 2 == 0
even_numbers = filter(is_even, numbers)
print(list(even_numbers))

# we can also use a lambda function instead of defining a separate function like this:
even_numbers = filter(lambda num: num % 2 == 0, numbers)
print(list(even_numbers))

# we can also use the filter function to filter out elements from a list of strings. For example, if we want to filter out all the strings that contain the letter 'a', we can do it like this: