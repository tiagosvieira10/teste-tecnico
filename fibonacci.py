# Logica do Fibonacci
def fibonacci(num):
    a, b = 0, 1
    
    if num == 0 or num == 1:
        return True

    while b < num:
        a, b = b, a + b

    return b == num

# Solicitando o número
number = int(input("Informe um número: "))

# Verificando se o número pertence à sequência de Fibonacci
if fibonacci(number):
    print(f"O número {number} pertence à sequência de Fibonacci.")
else:
    print(f"O número {number} NÃO pertence à sequência de Fibonacci.")

