map = {"Q1": {"C2": "Q3", "C1": "Q2", "C3": "Q4", "C4": "Q5"}
       , "Q2": {"C2": "Q4", "C4": "Q5", "C3": "Q6"}, "Q3": {"C1": "Q2", 
       "C2": "Q5", "C4": "Q6"}, "Q4": {"C2": "Q6", "C4": "Q5"}, "Q5": {"C3": "Q6"}}

N = 6

if __name__ == "__main__":
    
    start = "Q1"
    while start!="Q6":
        try:
            print()
            print("This is question " + start + ", enter your answer (C1, C2, C3, C4): ", end="")
            temp = str(input())
            answer = temp.upper()
            print(map[start][answer])
            start = map[start][answer]
        except:
            print()
            print("Please chose other options...")

    print("Thank you!")
