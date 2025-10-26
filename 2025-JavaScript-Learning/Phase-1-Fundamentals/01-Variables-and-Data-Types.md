# Variables and Data Types

**Learning Objectives:**
- Understand modern variable declarations (`const`, `let`, `var`)
- Master all JavaScript data types (primitives and objects)
- Learn type coercion and type checking
- Apply 2025 best practices

---

## 1. Theory

### What is a Variable?

A **variable** is a named container that stores data in your program. Think of it as a labeled box where you can put information and retrieve it later. Variables are fundamental to programming because they allow you to:

- Store data temporarily during program execution
- Reference and manipulate data throughout your code
- Make your code dynamic and reusable

### Modern Variable Declarations (2025)

JavaScript has three ways to declare variables, but in modern JavaScript, we primarily use only two:

#### `const` - For values that won't be reassigned

```javascript
const userName = "Alice";
const MAX_RETRIES = 3;
const API_ENDPOINT = "https://api.example.com";
```

**Key characteristics:**
- **Cannot be reassigned** after declaration
- **Must be initialized** when declared
- **Block-scoped** (only accessible within the block `{}` where it's defined)
- **Preferred default choice** in modern JavaScript

**Important:** `const` doesn't mean the value is immutable, it means the **binding** (reference) cannot be changed:

```javascript
const user = { name: "Alice" };
user.name = "Bob";  // ✅ This works! We're modifying the object, not reassigning
user = { name: "Charlie" };  // ❌ Error! Cannot reassign const
```

#### `let` - For values that will be reassigned

```javascript
let counter = 0;
let currentPage = 1;
let isLoggedIn = false;
```

**Key characteristics:**
- **Can be reassigned** after declaration
- **Block-scoped** (like `const`)
- **Can be declared without initialization** (value will be `undefined`)
- **Use when you know the value will change**

```javascript
let score = 0;
score = 10;      // ✅ Perfectly valid
score = score + 5;  // ✅ Also valid
```

#### `var` - Legacy (avoid in modern code)

```javascript
var oldStyle = "Don't use this";  // ❌ Avoid
```

**Why avoid `var`?**
- **Function-scoped** instead of block-scoped (leads to bugs)
- **Hoisted** to the top of the function (confusing behavior)
- **Can be redeclared** in the same scope (causes errors)
- **No use cases in modern JavaScript** - use `const` or `let` instead

### Modern Best Practices (2025)

1. **Default to `const`** - Use it unless you know you need to reassign
2. **Use `let` only when reassignment is necessary** - Makes your code more predictable
3. **Never use `var`** - It's legacy syntax with problematic behavior
4. **Declare variables at the top of their scope** - Improves readability
5. **Use descriptive names** - `userName` is better than `u` or `data`

**Example of good modern code:**

```javascript
const MAX_LOGIN_ATTEMPTS = 3;  // Constant value
let attemptCount = 0;           // Will change

function login(credentials) {
  const userId = credentials.id;  // Won't change in this function
  let isValid = false;            // Will change based on validation
  
  // ... login logic
}
```

---

## 2. Data Types

JavaScript has **8 data types** divided into two categories:

### Primitive Types (7 types)

Primitives are **immutable** (cannot be changed) and stored **by value**.

#### 1. **Number**

Represents both integers and floating-point numbers.

```javascript
const age = 30;                    // Integer
const price = 19.99;               // Floating-point
const negative = -42;              // Negative number
const large = 1_000_000;           // Numeric separator (ES2021)
```

**Special numeric values:**

```javascript
const infinity = Infinity;         // Result of division by zero
const negInfinity = -Infinity;     // Negative infinity
const notANumber = NaN;            // Not a Number (result of invalid math)
```

**Working with Numbers:**

```javascript
const result = 10 / 3;             // 3.3333333333333335
const rounded = Math.round(result); // 3
const fixed = result.toFixed(2);   // "3.33" (returns a string!)

// Checking for valid numbers
const value = 42;
console.log(Number.isFinite(value));    // true
console.log(Number.isNaN(value));       // false
console.log(Number.isInteger(value));   // true
```

**2025 Note:** JavaScript uses double-precision 64-bit floating point (IEEE 754), which means:
- Maximum safe integer: `Number.MAX_SAFE_INTEGER` (9,007,199,254,740,991)
- For larger integers, use `BigInt` (covered below)

#### 2. **String**

Represents text data enclosed in quotes.

```javascript
const singleQuote = 'Hello';
const doubleQuote = "World";
const template = `Hello, ${name}!`;  // Template literal (preferred in 2025)
```

**Template Literals (Modern approach - ES6+):**

```javascript
const name = "Alice";
const age = 30;

// Old way (avoid)
const message1 = "Hello, " + name + ". You are " + age + " years old.";

// Modern way (preferred)
const message2 = `Hello, ${name}. You are ${age} years old.`;

// Multi-line strings
const multiLine = `
  This is line 1
  This is line 2
  Name: ${name}
`;
```

**Common String Operations:**

```javascript
const text = "JavaScript";

// Properties
text.length                    // 10

// Methods (strings are immutable - these return new strings)
text.toUpperCase()            // "JAVASCRIPT"
text.toLowerCase()            // "javascript"
text.includes("Script")       // true
text.startsWith("Java")       // true
text.endsWith("Script")       // true
text.slice(0, 4)              // "Java"
text.split("")                // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Modern methods (ES2021+)
text.replaceAll("a", "A")     // "JAvaScript" → "JAvAScript"
"  hello  ".trim()            // "hello"
```

#### 3. **Boolean**

Represents logical values: `true` or `false`.

```javascript
const isActive = true;
const hasPermission = false;

// Often used in conditions
if (isActive) {
  console.log("User is active");
}

// Result of comparisons
const isAdult = age >= 18;           // Boolean result
const isEqual = (5 === 5);           // true
const isGreater = (10 > 5);          // true
```

**Truthy and Falsy Values:**

In JavaScript, values can be coerced to boolean. These are the **only falsy values**:

```javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
```

Everything else is **truthy**:

```javascript
if ("hello") { }      // ✅ Truthy (non-empty string)
if (42) { }           // ✅ Truthy (non-zero number)
if ([]) { }           // ✅ Truthy (empty array is truthy!)
if ({}) { }           // ✅ Truthy (empty object is truthy!)
```

#### 4. **Undefined**

Represents a variable that has been declared but not assigned a value.

```javascript
let notAssigned;
console.log(notAssigned);     // undefined

function noReturn() {
  // No return statement
}
console.log(noReturn());      // undefined

const obj = { name: "Alice" };
console.log(obj.age);         // undefined (property doesn't exist)
```

**Key point:** `undefined` is JavaScript's way of saying "no value has been set."

#### 5. **Null**

Represents an intentional absence of value.

```javascript
let user = null;  // Explicitly set to "no user"

// Common use case: API responses
const response = {
  data: null,      // No data available
  error: "Not found"
};
```

**`null` vs `undefined`:**

```javascript
let notInitialized;           // undefined (JavaScript sets this)
let intentionallyEmpty = null; // null (you set this explicitly)

// Type checking
typeof undefined              // "undefined"
typeof null                   // "object" (legacy bug in JavaScript!)
```

**Best Practice:** Use `null` when you want to explicitly indicate "no value," and let JavaScript handle `undefined`.

#### 6. **Symbol** (ES6+)

Represents a unique, immutable identifier. Mainly used for object property keys.

```javascript
const id = Symbol("id");
const id2 = Symbol("id");

console.log(id === id2);      // false (each Symbol is unique!)

// Use case: Unique object keys
const user = {
  name: "Alice",
  [id]: 12345           // Symbol as property key
};

console.log(user[id]);        // 12345
console.log(user.id);         // undefined (not the same as the Symbol)
```

**2025 Note:** Symbols are advanced and rarely needed in everyday code. They're useful for:
- Creating truly unique property keys
- Implementing iteration protocols
- Defining internal object behaviors

#### 7. **BigInt** (ES2020+)

Represents integers larger than `Number.MAX_SAFE_INTEGER`.

```javascript
const bigNumber = 1234567890123456789012345678901234567890n;  // Note the 'n'
const anotherBig = BigInt("9007199254740991234567890");

// Operations
const sum = bigNumber + 100n;        // Must use 'n' for literals
const product = bigNumber * 2n;

// Cannot mix BigInt with Number
const mixed = bigNumber + 100;       // ❌ Error!
const correct = bigNumber + BigInt(100); // ✅ Correct
```

**2025 Note:** BigInt is useful when working with:
- Cryptography
- High-precision timestamps
- Large integer calculations
- Financial calculations requiring precision

### Reference Type (1 type)

#### 8. **Object**

Everything that's not a primitive is an object. Objects store **collections of data** and are stored **by reference**.

```javascript
// Object literal
const person = {
  name: "Alice",
  age: 30,
  city: "Seattle"
};

// Array (special type of object)
const numbers = [1, 2, 3, 4, 5];

// Function (also an object)
function greet() {
  return "Hello!";
}

// Date (built-in object)
const now = new Date();

// Regular Expression (built-in object)
const pattern = /hello/i;
```

**Key Difference - By Value vs By Reference:**

```javascript
// Primitives are copied by value
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (unchanged)

// Objects are copied by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value);  // 20 (changed! Both point to same object)
```

---

## 3. Type Checking and Coercion

### Checking Types

#### `typeof` operator

```javascript
typeof 42                // "number"
typeof "hello"           // "string"
typeof true              // "boolean"
typeof undefined         // "undefined"
typeof null              // "object" (historical bug!)
typeof Symbol()          // "symbol"
typeof 123n              // "bigint"
typeof {}                // "object"
typeof []                // "object" (arrays are objects!)
typeof function() {}     // "function"
```

#### More precise type checking

```javascript
// Check if array
Array.isArray([1, 2, 3])           // true
Array.isArray({ length: 3 })       // false

// Check if null
value === null                     // Only way to check for null

// Check if undefined
value === undefined
typeof value === "undefined"

// Check for NaN
Number.isNaN(NaN)                  // true
Number.isNaN("hello")              // false
isNaN("hello")                     // true (coerces to number first - avoid!)
```

### Type Coercion

JavaScript automatically converts types in certain situations.

#### Implicit Coercion (automatic)

```javascript
// String coercion
"5" + 3                  // "53" (number → string)
"The answer is " + 42    // "The answer is 42"

// Number coercion
"5" - 3                  // 2 (string → number)
"10" * "2"               // 20 (both → numbers)
"10" / "2"               // 5

// Boolean coercion
if ("hello") {}          // Truthy
if (0) {}                // Falsy
```

#### Explicit Coercion (manual)

```javascript
// To Number
Number("42")             // 42
Number("hello")          // NaN
parseInt("42px")         // 42 (stops at first non-digit)
parseFloat("3.14")       // 3.14
+"42"                    // 42 (unary plus operator)

// To String
String(42)               // "42"
(42).toString()          // "42"
42 + ""                  // "42" (using coercion)

// To Boolean
Boolean(1)               // true
Boolean(0)               // false
Boolean("")              // false
!!value                  // Converts to boolean (double NOT)
```

### Best Practices for Types (2025)

1. **Use strict equality (`===`)** instead of loose equality (`==`)
   ```javascript
   5 === "5"        // false (different types)
   5 == "5"         // true (coerces types - avoid!)
   ```

2. **Be explicit with type conversions**
   ```javascript
   const userInput = "42";
   const age = Number(userInput);  // Clear intent
   ```

3. **Validate data from external sources**
   ```javascript
   function processAge(input) {
     const age = Number(input);
     if (Number.isNaN(age) || age < 0) {
       throw new Error("Invalid age");
     }
     return age;
   }
   ```

4. **Consider using TypeScript** for large projects (adds static type checking)

---

## 4. Practical Examples

### Example 1: User Configuration

```javascript
// Constants for configuration (won't change)
const APP_NAME = "My Application";
const MAX_UPLOAD_SIZE = 5_000_000;  // 5MB in bytes
const API_BASE_URL = "https://api.example.com";

// Variables that will change
let currentUser = null;  // No user logged in yet
let uploadProgress = 0;  // Will update during upload

function loginUser(userData) {
  // userData won't be reassigned in this function
  const userId = userData.id;
  const userName = userData.name;
  
  // Update the module-level variable
  currentUser = {
    id: userId,
    name: userName,
    loginTime: new Date()
  };
  
  console.log(`${userName} logged in to ${APP_NAME}`);
}
```

### Example 2: Working with API Response Data

```javascript
// Simulating an API response
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 12345,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 30,
      isActive: true,
      lastLogin: null  // Never logged in before
    },
    metadata: {
      timestamp: "2025-10-26T10:30:00Z",
      version: "2.1.0"
    }
  }
};

// Extracting and working with different data types
const user = apiResponse.data.user;

const userId = user.id;                    // Number
const userName = user.name;                // String
const isUserActive = user.isActive;        // Boolean
const lastLogin = user.lastLogin;          // null
const accountAge = user.age;               // Number

// Type checking before use
if (typeof userName === "string" && userName.length > 0) {
  console.log(`Welcome, ${userName}!`);
}

// Handling null values
const loginMessage = lastLogin !== null
  ? `Last login: ${lastLogin}`
  : "First time logging in!";

console.log(loginMessage);
```

### Example 3: Type Validation for User Input

```javascript
function calculateTotal(price, quantity, taxRate) {
  // Validate inputs
  const priceNum = Number(price);
  const quantityNum = Number(quantity);
  const taxNum = Number(taxRate);
  
  // Check if conversions were successful
  if (Number.isNaN(priceNum) || Number.isNaN(quantityNum) || Number.isNaN(taxNum)) {
    throw new Error("All inputs must be valid numbers");
  }
  
  // Check for reasonable values
  if (priceNum < 0 || quantityNum < 0 || taxNum < 0) {
    throw new Error("Values cannot be negative");
  }
  
  // Calculate
  const subtotal = priceNum * quantityNum;
  const tax = subtotal * taxNum;
  const total = subtotal + tax;
  
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
}

// Usage
try {
  const result = calculateTotal("19.99", "3", "0.08");
  console.log(`Total: $${result.total}`);
} catch (error) {
  console.error("Calculation failed:", error.message);
}
```

### Example 4: Working with Different Data Types

```javascript
// Scenario: Processing form data
function processFormData(formData) {
  // String processing
  const email = formData.email.trim().toLowerCase();
  const fullName = `${formData.firstName} ${formData.lastName}`;
  
  // Number processing
  const age = parseInt(formData.age);
  const salary = parseFloat(formData.salary);
  
  // Boolean conversion
  const isSubscribed = formData.newsletter === "true" || formData.newsletter === true;
  
  // Date processing
  const birthDate = new Date(formData.birthDate);
  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();
  const calculatedAge = currentYear - birthYear;
  
  // Validation
  const errors = [];
  
  if (!email.includes("@")) {
    errors.push("Invalid email format");
  }
  
  if (Number.isNaN(age) || age < 18 || age > 120) {
    errors.push("Invalid age");
  }
  
  if (age !== calculatedAge) {
    errors.push("Age doesn't match birth date");
  }
  
  // Return processed data or errors
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  return {
    success: true,
    data: {
      email,
      fullName,
      age,
      salary,
      isSubscribed,
      birthDate
    }
  };
}

// Example usage
const formInput = {
  firstName: "  Alice  ",
  lastName: "Johnson",
  email: "ALICE@EXAMPLE.COM",
  age: "30",
  salary: "75000.50",
  newsletter: "true",
  birthDate: "1995-10-26"
};

const result = processFormData(formInput);
console.log(result);
```

### Example 5: Type Coercion Pitfalls (What to Avoid)

```javascript
// ❌ Common mistakes

// Unexpected string concatenation
const total = "100" + 50;         // "10050" (not 150!)

// Loose equality issues
console.log(0 == false);          // true (coercion)
console.log("" == false);         // true (coercion)
console.log(null == undefined);   // true (coercion)

// Array coercion
console.log([1] + [2]);           // "12" (both convert to strings)

// ✅ Better approaches

// Explicit conversion
const total = Number("100") + 50;  // 150

// Strict equality
console.log(0 === false);          // false (different types)
console.log("" === false);         // false
console.log(null === undefined);   // false

// Clear intent
const arr1 = [1];
const arr2 = [2];
const combined = [...arr1, ...arr2];  // [1, 2]
```

---

## 5. Memory and Performance Considerations

### Primitive vs Reference Memory

```javascript
// Primitives - stored in stack (fast)
const num1 = 42;
const num2 = 42;
console.log(num1 === num2);  // true (same value)

// Objects - stored in heap (reference in stack)
const obj1 = { value: 42 };
const obj2 = { value: 42 };
console.log(obj1 === obj2);  // false (different objects in memory)

const obj3 = obj1;
console.log(obj3 === obj1);  // true (same reference)
```

### Performance Tips (2025)

1. **Reuse objects when possible** instead of creating new ones
   ```javascript
   // Less efficient
   for (let i = 0; i < 1000; i++) {
     const config = { timeout: 5000 };
     // use config
   }
   
   // More efficient
   const config = { timeout: 5000 };
   for (let i = 0; i < 1000; i++) {
     // use config
   }
   ```

2. **Use `const` by default** - helps JavaScript engines optimize
   ```javascript
   const PI = 3.14159;  // Engine knows this won't change
   ```

3. **Avoid unnecessary type conversions in loops**
   ```javascript
   // Less efficient
   for (let i = 0; i < array.length; i++) {
     const value = String(array[i]) + "px";
   }
   
   // More efficient
   const length = array.length;
   for (let i = 0; i < length; i++) {
     const value = array[i] + "px";  // Implicit conversion once
   }
   ```

---

## 6. AI Application Connection 🤖

Understanding data types is crucial for AI development:

**API Response Handling:**
```javascript
// Azure OpenAI API might return data like this
const aiResponse = {
  id: "chatcmpl-123",              // String
  object: "chat.completion",        // String
  created: 1677652288,             // Number (timestamp)
  choices: [{                       // Array (object)
    index: 0,                       // Number
    message: {                      // Object
      role: "assistant",            // String
      content: "Hello! How can I help you today?"  // String
    },
    finish_reason: "stop"          // String
  }],
  usage: {                         // Object
    prompt_tokens: 9,              // Number
    completion_tokens: 12,         // Number
    total_tokens: 21               // Number
  }
};

// Proper type handling
const messageContent = aiResponse.choices[0]?.message?.content ?? "No response";
const totalTokens = aiResponse.usage?.total_tokens ?? 0;
```

---

## Summary

### Key Takeaways

1. **Use `const` by default**, `let` when you need reassignment, never `var`
2. **JavaScript has 8 data types**: 7 primitives + Object
3. **Primitives**: Number, String, Boolean, Undefined, Null, Symbol, BigInt
4. **Reference type**: Object (includes arrays, functions, dates, etc.)
5. **Use strict equality (`===`)** to avoid type coercion issues
6. **Be explicit with type conversions** for clarity and reliability
7. **Understand truthy/falsy** for conditional logic
8. **Primitives are immutable** and stored by value
9. **Objects are mutable** and stored by reference

### Next Steps

In the next lesson, we'll explore **Operators and Expressions**, building on our understanding of data types to perform calculations, comparisons, and logical operations.

---

**Practice Checkpoint:** 
- Can you explain the difference between `const` and `let`?
- Can you list all 8 JavaScript data types?
- Do you understand the difference between `null` and `undefined`?
- Can you explain what happens when you compare objects with `===`?

If you can answer these confidently, you're ready to move forward! 🚀
