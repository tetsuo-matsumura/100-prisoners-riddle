# 📦 100 Prisoners Riddle
I was watching [this Youtube video](https://www.youtube.com/watch?v=iSNsgj1OCLA) from Veritasium and I decided to attempt an implementation of the 100 prisoners riddle solution.

## The problem
> The director of a prison offers 100 death row prisoners, who are numbered from 1 to 100, a last chance. A room contains a cupboard with 100 drawers. The director randomly puts one prisoner's number in each closed drawer. The prisoners enter the room, one after another. Each prisoner may open and look into 50 drawers in any order. The drawers are closed again afterwards. If, during this search, every prisoner finds his number in one of the drawers, all prisoners are pardoned. If just one prisoner does not find his number, all prisoners die. Before the first prisoner enters the room, the prisoners may discuss strategy — but may not communicate once the first prisoner enters to look in the drawers. What is the prisoners' best strategy?

---

### In a nutshell
- 100 Prisoners numbered 1-100
- Slips with their number are randomly placed in 100 boxes in a room
- Each prisoner may enter the room one at a time and check 50 boxes
- They must leave the room exectly as the found it and can't communicate with the others after
- If all 100 prisoners find their number during their turn in the room, they will all be freed. But if even one fails, they will all be executed.

You can read the problem in more details here: https://en.wikipedia.org/wiki/100_prisoners_problem

---
## Solution

*(from wikipedia)*

Open the boxes randomly, gives each prisoner 0.5 of chance, therefore, the probability that all prisoners find their number is the product of the single probabilities, which is 0.0000000000000000000000000000008, or the same chance of two people finding the same grain of sand in all the sand on Earth (including deserts 🏜️). 
>**Surprisingly, there is a strategy that provides a survival probability of more than 30%.**
---

*Assuming each box is numbered. If they are not, prisoners can strategize counting the boxes in rows to number them.*

1. Each prisoner first opens the box labeled with his own number.
2. If this drawer contains his number, he is done and was successful.
3. Otherwise, the drawer contains the number of another prisoner, and he next opens the drawer labeled with this number.
4. The prisoner repeats steps 2 and 3 until he finds his own number or has opened fifty drawers.

By starting with his own number, the prisoner guarantees he is on a sequence of drawers containing his number. The only question is whether this sequence is longer than fifty drawers.

**Thus, in the initial problem, the 100 prisoners are successful if the longest cycle of the permutation has a length of at most 50.** Their survival probability is therefore equal to the probability that a random permutation of the numbers 1 to 100 contains no cycle of length greater than 50.

---
The probability, that a (uniformly distributed) random permutation contains no cycle of length greater than 50 is calculated with the formula for single events and the formula for complementary events. Therefore, using the cycle-following strategy the prisoners survive in a surprising 31% of cases. **Therefore, using the cycle-following strategy the prisoners survive in a surprising 31% of cases.**

After running the code solution I could confirm that the probability of a random permutation containing no cycle of length greater than 50 is ~31%.
