class Employees:

    def __init__(self, first, last, pay):
    	self.first = first
    	self.last = last
    	self.pay = pay
    	self.email = first + '.' + last + '@company.com'
        
    def fullname(self):
    	return '{} {}'.format(self.first, self.last)

    def apply_raise(self):
    	self.pay = int(self.pay * self.raise_amt)

    @classmethod
    def set_raise_amt(cls, amount):
    	cls.raise_amt = amount

    @classmethod
    def from_string(cls, emp_str):
        first, last, pay = emp_str.split("-")
        return cls(first, last, pay)


emp_1 = Employees("Luis", "Acuña", 35000) 
emp_2 = Employees("Test", "Me", 100000)

emp_str_1 = "John-Doe-70000"
emp_str_2 = "Steven-Smith-70000"
emp_str_3 = "Jane-Doe-60000"

new_emp_1 = Employees.from_string(emp_str_1)


# print(new_emp_1.email)
# print(new_emp_1.pay)

# Employees.set_raise_amt(1.05)

# print(Employees.set_raise_amt)
# print(emp_1.raise_amt)
# print(emp_2.raise_amt)

# # print(emp_1.email)
# # print(emp_2.email)
# # print(Employees.fullname(emp_2))

