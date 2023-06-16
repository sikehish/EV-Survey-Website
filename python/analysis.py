import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams["figure.figsize"] = [7.50, 3.50]
plt.rcParams["figure.autolayout"] = True

df = pd.read_csv("env.csv")

model_counts = df["Model"].value_counts()

# Plotting a pie chart
plt.pie(model_counts, labels=model_counts.index, autopct="%1.1f%%")
plt.title("Vehicle Models")
plt.axis("equal")

# Display the chart
plt.show()
