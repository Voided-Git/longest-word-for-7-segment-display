import re

with open("../words.txt", "r") as f:
    words = f.read().split("\n")

longest_word = ""

for i in words:
    if len(i) > len(longest_word) and not re.match(r"/[gkmqvwxzio]/", i):  # 'i' and 'o' are completely ignored
        longest_word = i

print(longest_word)
