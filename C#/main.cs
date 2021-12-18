using System;
using System.Text.RegularExpressions;

namespace LongestWord
{
    class Program
    {
        public static void Main(string[] args)
        {
            string[] Words = System.IO.File.ReadAllLines(@"../words.txt");
            string LongestWord = "";
            Regex re = new Regex(@"/[gkmqvwxzio]/");  // i don't understand why this doesn't work, 'i' and 'o' are completely ignored

            foreach (var i in Words)
            {
                if (i.Length > LongestWord.Length && !re.IsMatch(i))
                {
                    LongestWord = i;
                }
            }

            Console.WriteLine(LongestWord);
        }
    }
}