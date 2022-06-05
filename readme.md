# UFOs

## Overview
In this exercise we coded a responsive web page to filter a database of UFO sightings. The data we were given was organized as an javascript array. The site was created to dynamically display the database records based on user input.

## Resources 
* Data Source: [UFO Data](/static/js/data.js)
* Software: HTML/CSS, JavaScript, Visual Studio Code 1.67.2, BootStrap 4.0.0

## Results
Link to finished site: [http://jsmith1826.github.io/UFOs/](http://jsmith1826.github.io/UFOs/)

### Screenshot
![Index.html](/static/images/screenshot.png)

The index of the site contains a navigation bar that clears any filter parameters and reloads the page when clicked. Beneath that is a title and subhead followed by a few paragraphs one the UFO phenomenon in general some words from a "vocal anti-alien activist" then invites the visitor to dig through the collected data for themselves. 

Finally is our table populated with database records along with our five search boxes. The site allows the database to be filtered by five different criteria; date, city, state, country and the shape of the unexplained object.


## Summary

I feel the filters could be implemented better. As it stands they relies on the user input being typed precisely, including with matching case.  for many of the filter criteria a dropdown menu would be a much better option. For instance, there are only seven different shapes described stored in the entire database. A drop-down menu would save users the frustration of typing in a description that doesn't return any results.

It would be impractical to select a date from a dropdown so I would like that element to be populated by a selection method similar to the one pictured below. 

![Date Picker](/static/images/date_picker.png)

I also think that a filter that could be used to search for text within the comments field of the data would be very useful. 

