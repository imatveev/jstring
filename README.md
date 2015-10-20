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
    jstring.handleString('Foo <Bar>Buzz', {cut: 6, removeTags:null});
    //returns: Foo Bu
    
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
    //returns: Foo 
    jstring.removeTags('Foo <Bar><Buzz>', Bar);
    //returns: Foo <Bar>
    jstring.removeTags('Foo &lt;Bar&gt;<Buzz>', Bar);
    //returns: Foo 
    
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
    //returns: Foo <Bar>

### isAlpha(string)
Checks if the source string contains only letters. 
#### string
Source string.
#### return
Boolean is the source string contains only letters.
#### Example
    jstring.isAlpha('Foo <Bar><Buzz>');
    //returns: false
    jstring.isAlpha('Foo BarBuzz');
    //returns: true
        
### isAlphanumeric(string)
Checks if the source string contains only letters and numbers.
#### string
Source string.
#### return
Boolean is the source string contains only letters and numbers.
#### Example
    jstring.isAlphanumeric('Foo <Bar><Buzz> 67');
    //returns: false
    jstring.isAlphanumeric('Foo BarBuzz 67');
    //returns: true
        

      
        
    
        
    
   
