# jstring
[![Build Status](https://travis-ci.org/imatveev/jstring.svg?branch=master)](https://travis-ci.org/imatveev/jstring)<br />
A Node.js library, designed to simplify work with string validation and sanitization.
## Installation
    npm install jstring
## When should I use jstring?
You need deal with string validation or sanitization in your Node.js project.
## Installation
    var jstring = require('jstring');

## Usage

### handleString(string, task)
Main sanitization method, that takes string and task object, and return string after processing.
(All jstring methods have public access, and You can use them direct. This method is developed for convenience).
#### string
Source string.
#### task
A object, that contains necessary functions and their parameters.
    {function: [param],
     function: [param]}
Can be used with:
    removeTags;
    cut;
#### return
String processed.
#### Example
    jstring.handleString('Foo <Bar>Buzz', { cut: 6,
                                            removeTags:null,
                                            replace: ['Fo', 'FO', true]
                                          });
    //return: FOo Bu

### removeTags(string[, except])
Removes all <*> and \&lt;*\&gt; elements of the string.
#### string
Source string.
#### except
A string, or array, that contains exclusion tag names.
(Notice that closing tags is added automatically. For example if you pass 'div' as except - tag &lt;/div&gt; will not be deleted.)
#### return
String processed.
#### Example
    jstring.removeTags('Foo <Bar><Buzz>');
    //return: Foo
    jstring.removeTags('Foo <Bar><Buzz>', Bar);
    //return: Foo <Bar>
    jstring.removeTags('Foo &lt;Bar&gt;<Buzz>', Bar);
    //return: Foo

### cut(string, length)
Cuts the string from start to **length**.
#### string
Source string.
#### length
The length by which the source string will be cut including.
#### return
String processed.
#### Example
    jstring.cut('Foo <Bar><Buzz>', 9);
    //return: Foo <Bar>

### toLow(string)
Just a wrapper over *toLowerCase* method, to allow use it in **handleString** method.
#### string
Source string.
#### return
String processed.
#### Example
    jstring.toLow('Foo Bar');
    //return: foo bar

### toUp(string)
Just a wrapper over *toUpperCase* method, to allow use it in **handleString** method.
#### string
Source string.
#### return
String processed.
#### Example
    jstring.toUp('Foo Bar');
    //return: FOO BAR

### capitalize(string)
Makes first character of the string capitalized.
#### string
Source string.
#### return
String processed.
#### Example
    jstring.capitalize('foo Bar');
    //return: Foo Bar

### minifyWhitespace(string)
Removes extra whitespace.
#### string
Source string.
#### return
String processed.
#### Example
    jstring.minifyWhitespace('Foo   Bar  Buzz');
    //return: Foo Bar Buzz

### replace(string, [searchString, replaceString[, caseStrict]])
Replaces substring in main string on new string.
#### string
Source string.
#### searchString
String, that need to be replaced with **replaceString**.
#### replaceString
String, that need to be placed instead **searchString**.
#### caseStrict
Boolean if replacement should be done strict by case sensitivity (true if case of searchString is matters).
#### return
String processed.
#### Example
    jstring.replace('Foo Bar foo', ['foo', 'buzz']);
    //return: buzz Bar foo
    jstring.replace('Foo Bar foo', ['foo', 'buzz', true]);
    //return: Foo Bar buzz

### replaceAll(string, [searchString, replaceString[, caseStrict]])
Replaces all occurrences of substring in main string on new string.
#### string
Source string.
#### searchString
Strings, that need to be replaced with **replaceString**.
#### replaceString
String, that need to be placed instead **searchString**.
#### caseStrict
Boolean if replacement should be done strict by case sensitivity (true if case of searchString is matters).
#### return
String processed.
#### Example
    jstring.replace('Foo Bar foo', ['foo', 'buzz']);
    //return: buzz Bar buzz
    jstring.replace('Foo Bar foo', ['foo', 'buzz', true]);
    //return: Foo Bar buzz

### left(string, length)
Returns left part of string with **length**.
#### string
Source string.
#### length
Length of string, that need to be cut from start.
#### return
String processed.
#### Example
    jstring.left('Foo Bar foo', 3);
    //return: Foo
    jstring.left('Foo Bar foo', 5);
    //return: Foo B

### right(string, length)
Returns right part of string with **length**.
#### string
Source string.
#### length
Length of string, that need to be cut to end.
#### return
String processed.
#### Example
    jstring.right('Foo Bar foo', 3);
    //return: foo
    jstring.right('Foo Bar foo', 5);
    //return: r foo  

### repeat(string, n)
Returns the string, repeated **n** times.
#### string
Source string.
#### n
Count of repeat times.
#### return
String processed.
#### Example
    jstring.repeat('Foo', 3);
    //return: FooFooFoo
    jstring.repeat('Foo Bar', 2);
    //return: Foo BarFoo Bar

### forEach(string[, callback])
Iterate through every char of incoming string and call the callback function to it.
#### string
Source string.
#### callback(value, index)
Callback function, that will be called to each char of **string**.
##### value
Char of **string**.
##### index
Index of **value** in **string**.
#### Example
    jstring.forEach('FooBar', function(value, index){
        console.log(value, index);
    });
    //outputs:
    F 0
    o 1
    o 2
    B 3
    a 4
    r 5

### isAlpha(string)
Checks if the source string contains only letters.
#### string
Source string.
#### return
Boolean is the source string contains only letters.
#### Example
    jstring.isAlpha('Foo <Bar><Buzz>');
    //return: false
    jstring.isAlpha('Foo BarBuzz');
    //return: true

### isAlphanumeric(string)
Checks if the source string contains only letters and numbers.
#### string
Source string.
#### return
Boolean is the source string contains only letters and numbers.
#### Example
    jstring.isAlphanumeric('Foo <Bar><Buzz> 67');
    //return: false
    jstring.isAlphanumeric('Foo BarBuzz 67');
    //return: true

### isEmail(string)
Checks if the source string is a valid email.
#### string
Source string.
#### return
Boolean is the source string is a valid email.
#### Example
    jstring.isEmail('test@method.io');
    //return: true
    jstring.isEmail('Foo Bar');
    //return: false

### isUpper(string, strict)
Checks if the source string is uppercase.
#### string
Source string.
#### strict
Set to true if test should be strict (return true only if all chars of string is uppercase).
#### return
Boolean is the source string is uppercase.
#### Example
    jstring.isUpper('Foo Bar');
    //return: true
    jstring.isUpper('foo bar');
    //return: false
    jstring.isUpper('Foo Bar', true);
    //return: false

### isLower(string, strict)
Checks if the source string is lowercase.
#### string
Source string.
#### strict
Set to true if test should be strict (return true only if all chars of string is lowercase).
#### return
Boolean is the source string is lowercase.
#### Example
    jstring.isLower('Foo Bar');
    //return: true
    jstring.isLower('FOO BAR');
    //return: false
    jstring.isLower('Foo Bar', true);
    //return: false    
