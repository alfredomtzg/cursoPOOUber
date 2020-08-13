from car import Car
from account import Account

if __name__ == "__main__":
    print("hola mundo")

    car = Car("Curp23", Account("Alfredo Garcia", "ced2342"))
    print(vars(car))
    print(vars(car.driver))