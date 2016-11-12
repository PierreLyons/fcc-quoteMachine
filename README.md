# quoteMachine

This repository will contain all files related to the creation of the random quote machine, which is an exercise in the [FreeCodeCamp](https://freecodecamp.com) curriculum. 

A javascript object contains a series of properties (1...n) each with two sub-properties ("quote" and "author"). When the button is clicked, a random value between 1 and n is generated, then checked to ensure it is different from the last generated value. If it is not different, it is re-generated and re-checked until it is different. This value is used to access the sub-property values ("quote" and "author") of the property identified by the randomly generated value. The sub-property values are then assigned to the appropriate HTML elements. 