# Generic Types in Java

> “Write once, use many” — Generics let you write flexible and reusable code.

Generics are a way to create type-safe and reusable code by allowing you to define type parameters.  
They help avoid runtime errors, improve readability, and reduce boilerplate code, especially in collections, methods, and custom classes or interfaces.

## Generic Classes 

```java
public class Box<T> {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}
```

## Generic Methods

```java
// Generic Method
    public static class Utility {
        public static <T> void printArray(T[] array) {
            for (T element : array) {
                System.out.print(element + " ");
            }
        }
    }
```

!!! tip "Why Generics Matter"
    Generics prevent `ClassCastException` and let you catch type mismatches at compile time.
