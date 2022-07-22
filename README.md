# Password-Generator
A password generator that creates a password that meets certain criteria that will use randomized characters to increase security.

# Description
This project creates a password generator that will generate a password that will need to meet certain criteria. The user will be prompted to choose a password that is 8-128 characters long, and confirm whether is contains a lowercase, uppercase, and or special characters. The user will be prompted to make sure the password meets this criteria to increase security of the password they use. The final password will meet this criteria and will be displayed on the page for the user to use. This was created to assist a user creating a creative, and secure password to increase security. 

## Installation
To be able to code this project you will need a code editor such as Visual Studio Code. You will need a browser such as Google Chrome or Safari to open the webpage once it has been completed and to make sure you are making the correct adjustments as you go on. 

The following programs are recommended: OX terminal, Visual Studio Code, and a 1.6 GHz or faster processor to run Visual Studio Code.

``

https://github.com/Eleniac/Web-Dev-Portfolio.git

``


# Usage
This project contains an HTML, CSS and Javascript folder. The first prompt specifies the required length of the password. The user may choose a password length between 8-128. If the user chooses a number less than 8, but greater than 128 the password box will indicate they need to start over by clicking the generate password button. Once the user has selected the appropriate length of their password they will receive an alert with the instructions that they must pick at least one of the following character choices to include in their password. The user will click okay and recieve a series of confirm statements to chose lowercase, uppercase, numeric value or special characters. Once the user has finished their selections the password will generate inside the password generator. A for loop was used to execute the random math using the selected characters pool where the users choices were indexed. If the user does not select one of the characters they will be alerted to start over. 

Screenshots:
![Password-Generator](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Password%20Generator.png)

![Password-Length-Prompt](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Password%20Length%20Prompt.png)

![Uppercase-Prompt](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Uppercase%20Prompt.png)

![Lowercase-Prompt](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Numeric%20Prompt.png)

![Special-Characters-Prompt](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Special%20Characters%20Prompt.png)

![Sample-Password-Generated](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Sample%20Password%20Generated%20.png)

![Start-Over](https://raw.githubusercontent.com/Eleniac/Password-Generator/main/Assets/Images/Start-Over.png)

# Credits
[University-of-Minnesota-Boot-Camp] (https://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/UofM-VIRT-FSF-PT-06-2022-U-LOLC)


# Licence

MIT License

Copyright (c) [2022] [Eleni Ayo Caros]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
