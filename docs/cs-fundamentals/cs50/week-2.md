---
title: "CS50 Week 2: Under the Hood"
date: 2026-11-10
categories:
  - CS Fundamentals
description: "My notes from CS50 Week 2: what compiling really does, debugging out loud, arrays and strings in memory, command-line arguments and a first taste of cryptography."
reading_time: 5
icon: lucide/graduation-cap
tags:
  - CS50
  - C
share_image: assets/cs50/week2/share.jpg   # link preview (LinkedIn, X, WhatsApp) instead of the generated card
share_image_alt: "CS50 Week 2: Under the Hood, with a stack of handwritten notebook pages"
social:
  cards: false
notes:
  path: assets/cs50/week2
  pages:
    - "Debugging, debug50, the rubber duck and the four steps of compiling"
    - "Decompiling, type sizes, arrays and strings as arrays of characters"
    - "Command-line arguments, exit statuses and the Caesar cipher"
---

> A string is just an array of characters that knows where to stop.

These are my notes from Week 2 of [CS50x](https://cs50.harvard.edu/x/), taken by hand and typed up here. The goal of the week: look underneath and see how the computer actually stores things in memory.

---

## Debugging out loud

Debugging is spotting the issues that stop a program from doing what it should. The idea I liked most: don't stay quiet while you do it. Explain the problem out loud, to a colleague, to a rubber duck on your desk, or to nobody at all. There's plenty of anecdotal evidence that just talking the problem through with an object helps you find it.

CS50 gives you two tools for it:

- **debug50**, in the same family as `check50` and `style50`: it pauses your program and lets you walk through it line by line, to see where it breaks or slows down.
- **CS50.ai**, the AI version of that rubber duck.

---

## What compiling really does

Last week, compiling was one box: source code in, machine code out. CS50 uses the **clang** compiler, and `make` just wraps the full command for you:

```
make hello   ≈   clang -o hello hello.c -lcs50
```

Inside that box are four steps:

1. **Preprocessing:** find the header files and copy their content into your file.
2. **Compiling:** turn the preprocessed C into **assembly** code.
3. **Assembling:** turn the assembly into zeros and ones.
4. **Linking:** combine all those zeros and ones, yours and the libraries', into one program.

Going the other way, **decompiling**, means reverse engineering a compiled program back into something readable. It's possible, but it's hard, and it raises legal questions about other people's code.

---

## Types have sizes

| Type | Bytes | Bits |
|------|-------|------|
| `bool` | 1 | 8 |
| `char` | 1 | 8 |
| `int` | 4 | 32 |
| `float` | 4 | 32 |
| `long` | 8 | 64 |
| `double` | 8 | 64 |
| `string` | ? | depends on its length |

The note I underlined: when designing, always think about the extreme cases.

---

## Arrays: memory back to back

An **array** is a chunk of memory where values sit back to back to back:

```c
int scores[3];
scores[0] = 72;
scores[1] = 73;
scores[2] = 33;
```

`int scores[3]` asks the compiler for room for 3 integers: 4 bytes × 3 = 12 bytes, 96 bits. And computers always start counting from 0, so the last one is `scores[2]`.

---

## Strings are arrays of characters

Characters are just agreed-upon numbers (ASCII, from Week 0), so you can print a `char` as an integer. And a string is nothing more than an array of characters, with one extra byte at the end:

```
"HI!"   →   | H | I | ! | \0 |
             s[0] s[1] s[2] s[3]
```

That last byte, `\0`, is the **null character**: not the number zero, but 8 zero bits. It's how `printf` knows where the string stops. So `"HI!"` takes 4 bytes, not 3.

An array of strings is then an array of arrays:

```c
string words[2];
words[0] = "HI!";
words[1] = "BYE!";
// words[0][0] is 'H'
```

Worth noting: C itself has no built-in `string` type; CS50's library gives us one. And, like last week, check the docs before reinventing the wheel: `string.h` already has `strlen` to get a string's length.

---

## Command-line arguments and exit statuses

`int main(void)` says the program takes no command-line arguments. This version takes them:

```c
int main(int argc, string argv[])
```

`argc` is the number of arguments, and `argv` the array of strings holding them. That's how a program like `cowsay` draws different things depending on what you type: `cowsay moo`, or `cowsay -f dragon RAWR`.

`main` also returns a value when it ends, its **exit status**: `0` means success (`return 0;`), anything else is an error code. In the terminal, `echo $?` shows the exit status of the last command.

---

## A first taste of cryptography

**Cryptography** is scrambling information so people can communicate securely. A **cipher**, the algorithm, takes the plaintext and a **key** and produces the **ciphertext**. **Decryption** reverses it with the same key.

The classic is the **Caesar cipher**: shift every letter by the key.

```
key 1:   HI!          →  IJ!
key 13:  HI!          →  UV!
key 13:  I LOVE YOU   →  V YBIR LBH
```

Punctuation stays as it is. And a key of 26 changes nothing, since the alphabet only has 26 letters.

---

## My takeaway

Week 2 took the lid off. Compiling is four steps, not one; a string is just bytes in a row ending in a null character; and `main` talks back to the terminal with its exit status. Knowing what's underneath makes the code feel a lot less like magic.

For the full walkthrough with every example from the lecture, see the [official CS50 Week 2 notes](https://cs50.harvard.edu/x/notes/2/).

---

<small>Based on [CS50x](https://cs50.harvard.edu/x/) by David J. Malan, Harvard University, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). These notes are my own summary.</small>
