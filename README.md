# Content-Highlighter
Details -
a) Select the text from blog(paragraph) 
b) Option asking for Highlight 
c) Change the color of selected content in original element. 

# Implementation details-

# a) Action Event for selecting text
      Used mouseup event from JQuery and used window.getSelection() to get the selected text
      Put a condition that if length of selected text != 0 then it should show the highlight option
      
# b) Highlight Button Click 
    The highlight button has 2 states-
       1. When the text is selected- we would like to highlight the text
       2. When the text is highlighted - we would like to dehighlight(opposite of highlight) the text 
    In order to do this I have stored relevant details of the button as an object in an array
  
# c) Data that the Highlight Button needs to function

     1. pageX - Location of x co-ordinate of the highlight option
     2. pageY - Location of y co-ordinate of the highlight option
     3. z - Replaced text
     4. x - Selected text
     5. paraselect- Tells which paragraph to highlight/dehighlight

     These 5 things are stored in an object and pushed in an array
     
 # d) Mouseover Event over Highlighted Text
     1. Queries the data from the array of objects 
         The button uses this data to highlight/dehighlight text
         
 
