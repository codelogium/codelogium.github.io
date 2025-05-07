---
title: "Generic Types in Java"
description: "Explore how Java generics work across interfaces, classes, and multi-type scenarios with real examples."
date: 2025-05-07
tags:
  - Generics
  - Type Safety
  - Interfaces
categories:
  - Programming
  - Java
  - OOP
reading_time: 5
cover: /assets/images/generics-cover.png  # Optional: update with an actual image path
summary: |
  Dive deeper into Java generics through interfaces, key-value pairs, and multi-type generic classes. Understand how to apply them in real use cases like repositories and collections.
---

# Generic Types in Java

<!-- HTML Structure -->
<div class="blog-meta">
  <div class="blog-meta-container">
    <span class="meta-content">
      <strong>Author: <a href="https://github.com/alfahami" target="_blank">Al-Fahami Toihir</a></strong>
      <a href="https://github.com/alfahami" target="_blank" class="author-avatar-link">
        <img class="author-avatar" src="https://github.com/alfahami.png" alt="Author avatar">
      </a>
      • 📅&nbsp;<em> May 7, 2025</em>&nbsp;•&nbsp;  
      🏷️&nbsp;<a href="/categories/java/">Java</a>&nbsp;•&nbsp;  
         <a href="/categories/programming/">Programming </a>&nbsp;•&nbsp; 
         <a href="/categories/programming/">OOP </a>&nbsp;•&nbsp; 
      ⏱️ ~5 min read
    </span>
  </div>
</div>



> “Write once, use many” — Generics let you write flexible and reusable code.

Generics in Java allow you to write code that works with different data types while still being type-safe. They reduce boilerplate, prevent runtime errors like `ClassCastException`, and make your code easier to read and maintain.

In simple terms, generics let you write a class or method that can operate on objects of various types — like `Integer`, `String`, or even your own custom classes — without rewriting the code for each type.

According to the [official Java documentation](http://docs.oracle.com/javase/tutorial/java/generics/types.html):

<blockquote>A generic type is a generic class or interface that is parameterized over types.</blockquote>

You typically use a generic class when all its behavior (like its methods) should apply consistently to a single data type. A great example? Most of the **Java Collections Framework** — like `ArrayList<T>` and `HashMap<K, V>` — are built with generics.

In a generic class, you usually use a type parameter (like `T`) to represent the data type. This makes it possible to write flexible and reusable code that works with any type: `Integer`, `String`, `Double`, `Character`, or even user-defined types.

---

## Generic Classes

Here’s a simple generic class called `Box`:

```java
public class Box<T> {
    // T can be any type (Integer, String, Object, etc.)
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}
```

This `Box` class can hold any type of object. For example:

```java
Box<String> stringBox = new Box<>();
stringBox.set("Hello");

Box<Integer> intBox = new Box<>();
intBox.set(123);
```

---

## Generic Methods

You can also create generic methods that work independently of any class being generic:

```java
public static class Utility {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
    }
}
```

You could call this method with different types of arrays:

```java
Integer[] intArray = {1, 2, 3};
String[] stringArray = {"a", "b", "c"};

Utility.printArray(intArray);
Utility.printArray(stringArray);
```

!!! tip "Why Generics Matter"
    Generics catch type mismatches at **compile time**, helping you avoid `ClassCastException` errors and making your code more reliable.

---

## Advanced Uses of Generics in Java

### Generic Interfaces

It's an interesting and sometimes subtle aspect of Java!<br>
Even if you don’t explicitly use the static keyword, any interface declared inside a class is
implicitly static by definition.

This means you can reference it without creating an instance of the enclosing
class, and it behaves independently of any specific instance of the outer
class.

Generics improve type safety and code reusability, ensuring compile-time
checks and reducing runtime errors.
You can define generic interfaces to operate on various types, improving flexibility and reuse:

```java
public interface InnerGenericType<T> {
    void save(T entity);
    T findByIndex(int id);
}
```

This interface is implicitly `static` when declared inside a class. You don't need an instance of the outer class to use it.

### Implementing a Generic Interface

```java
public class Utilisateur {
    private int id;
    private String username;

    public String getUsername() { return username; }
    public int getId() { return id; }
    public void setUsername(String username) { this.username = username; }
    public void setId(int id) { this.id = id; }
}

public class UserRepository implements InnerGenericType<Utilisateur> {
    ArrayList<Utilisateur> userRepository = new ArrayList<>();

    @Override
    public void save(Utilisateur user) {
        userRepository.add(user);
    }

    @Override
    public Utilisateur findByIndex(int id) {
        return userRepository.get(id);
    }
}
```

### Using `E` for Element in a Custom Collection

Adding <E> in the class defintion defines the class as generic.<br>
The class can operate on objects of any type specified when the class is
instantiated, rather than being tied to a specific type.<br>
E is a placeholder for the type you will specify later when using the class.
Java needs <E> in the class definition to treat E as a valid type parameter.
Otherwise, it assumes E is a class or type that hasn't been defined.

```java
public class CustomList<E> {
    private List<E> elements = new ArrayList<>();

    public void setElement(E element) {
        elements.add(element);
    }

    public E getElement(int index) {
        return elements.get(index);
    }
}
```

This allows storage of elements of any type defined at the time of instantiation.

### Using `K` and `V` in a Key-Value Pair


```java
public static class KeyValue<K, V> {
    private K key;
    private V value;

    public KeyValue(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
}
```

### Combining `E`, `K`, and `V` in a Multi-Generic Class

```java
public static class MultiMap<K, V, E> {
    private E extra;
    private K key;
    private V value;

    public void put(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
    public E getExtra() { return extra; }
    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public void setExtra(E extra) { this.extra = extra; }
}
```

### Example Usage in `main`

```java
// Generic Box that can hold String
Box<String> stringBox = new Box<>();
stringBox.setItem("Hello");
System.out.println(stringBox.getItem());

// Use Integer as type parameter
Box<Integer> integerBox = new Box<>();
integerBox.setItem(4321);
System.out.println(integerBox.getItem());

// Generic Method
String[] names = { "Alice", "Bob" };
Integer[] numbers = { 1, 2, 4 };
Utility.printArray(names);
Utility.printArray(numbers);

// Generic Interface
Utilisateur user = new Utilisateur();
UserRepository userRepo = new UserRepository();
user.setId(0);
user.setUsername("Djaloud");
userRepo.save(user);
System.out.println(userRepo.findByIndex(0).getUsername());

// Using Generics in Collections
List<String> list = new ArrayList<>();
list.add("Hello");
System.out.println(list.get(0));
System.out.println((String) list.get(0));

// Using CustomList with E
CustomList<String> customStringList = new CustomList<>();
customStringList.setElement("Apple");
customStringList.setElement("Banana");

CustomList<Integer> customIntegerList = new CustomList<>();
customIntegerList.setElement(20);
customIntegerList.setElement(15);
System.out.println("The price of an " + customStringList.getElement(0) + " is " + customIntegerList.getElement(0));

// KeyValue
KeyValue<Integer, String> productPrice = new KeyValue<>(38500, "ASUS ProArt 16");
System.out.println("The model " + productPrice.getValue() + " costs " + productPrice.getKey() + " MAD");

KeyValue<String, Integer> ageMapping = new KeyValue<>("Akmal Eddine", 16);
System.out.println(ageMapping.getKey() + " is " + ageMapping.getValue() + " years old");

// MultiMap
MultiMap<String, Integer, String> fruitInfo = new MultiMap<>();
fruitInfo.put("Banana", 10);
fruitInfo.setExtra("imported from Morocco");
System.out.println("The " + fruitInfo.getKey() + " is " + fruitInfo.getValue() + " MAD and is " + fruitInfo.getExtra());
```

---

## What We Learned

Java generics allow us to write flexible, type-safe code. In this post, we explored how generic interfaces and classes enhance reusability and improve readability. One key takeaway: interfaces declared inside a class are **implicitly static**, meaning they can be used without creating an instance of the outer class.

This reinforced our understanding of how Java Collections use generics under the hood, and how **type erasure** comes into play at runtime.

The full Java file for this learning could be found here: [GenericType.java](https://github.com/codelogium/codelogium/blob/main/java/GenericType.java)

---
## Collateral Knowledge

!!! info "Collateral Knowledge"
    Along the way, we also discovered an interesting aspect of OOP: it's possible to instantiate a class from within itself in the `main` method — something not usually needed but helpful when everything is enclosed in one file.
    Because we used a single Java class to contain all the examples, we had to reference generic classes and interfaces from within the same outer class. That’s where we learned this pattern:

    ```java
    public static void main(String[] args) {
        // We need an instance of the outer class to access inner non-static classes
        GenericType outerInstance = new GenericType();

        Box<String> stringBox = outerInstance.new Box<>();
        stringBox.setItem("Hello");
        System.out.println(stringBox.getItem());
    }
    ```

<!-- Mobile-only metadata block at bottom -->
<div class="mobile-meta">
  <p><strong>Author:</strong> <a href="https://github.com/alfahami" target="_blank">Al-Fahami Toihir</a></p>
  <p><strong>Published:</strong> May 7, 2025</p>
  <p><strong>Categories:</strong>
    <a href="/categories/java/">Java</a>,
    <a href="/categories/programming/">Programming</a>,
    <a href="/categories/oop/">OOP</a>
  </p>
  <p><strong>Reading Time:</strong> ~5 min</p>
</div>






