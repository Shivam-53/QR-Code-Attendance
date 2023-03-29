# QR Code Attendance
 A QR Code attendance system. 
Here the QR Code Generator Folder, generates the qr code for each individual student and the QR Code Scanner, scans each code and upload the data in the database.
The Database used here is google sheets, to use google sheet an npm package called as 'googleapis' was used.
The QR Code contains the student details in the JSON format as a string(using Stringify) and as soon as the data is scanned it is converted in proper JSON by using the parse function.
To post the data in google sheets, axios is used.
The QR generator and scanner both run on port 3000.