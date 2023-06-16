import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams["figure.figsize"] = [7.50, 3.50]
plt.rcParams["figure.autolayout"] = True

df = pd.read_csv("env.csv")

model_counts = df["Model"].value_counts()
type_counts = df["Vehicle"].value_counts()
misc_counts=model_counts["Miscellaneous"]
ev_2w=type_counts["EV 2 Wheeler"]
ice_2w=1734
total_count=len(df)

plt.pie(model_counts, labels=model_counts.index, autopct="%1.1f%%")
plt.title("Vehicle Models")
plt.axis("equal")
plt.show()

plt.pie(type_counts, labels=type_counts.index, autopct="%1.1f%%")
plt.title("Vehicle Type")
plt.axis("equal")
plt.show()

values = [misc_counts, total_count]  
labels = ['Low-speed variants', 'High-speed variants']  

plt.pie(values, labels=labels, autopct="%1.1f%%")
plt.title('Vehicle categorization based on speeds')
plt.axis('equal')
plt.show()

values = [ev_2w, ice_2w]  
labels = ['EV 2-Wheelers','ICE 2-Wheelers']  

print(values)

plt.pie(values, labels=labels, autopct="%1.1f%%")
plt.title('EV vs ICE 2 Wheelers')
plt.axis('equal')
plt.show()



