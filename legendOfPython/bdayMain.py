import bday_messages, datetime

today = datetime.date.today()
last_birthday = datetime.date(2023, 5, 22)
next_birthday = datetime.date(2024, 5, 22)

days_gone = today - last_birthday
remaining_days = next_birthday - today

print(days_gone)

if next_birthday == today:
    print(bday_messages.random_message)
else:
    print(f"My next birthday is {remaining_days} away!")
