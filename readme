Streams we Ignore
================

Node.JS has one of the best things called streams. If you have used Node.JS , you probably must have used streams. Yup! you have :P.

The req and res object in Node.JS are the streams from which you can read as well as write.

File system in Node.JS, the 'fs' module , also has read and write file streams operations.

So in short , the streams in Node.JS are really important and are present everywhere in Node.JS and we don't value them, LOL!

So, let me give you a simple pretty example of how important the streams can be. So, the thing is that you have to read a large file in Node.JS, a really large file of about GBs, 
now you are gonna fire your editor and withot thinking twice, just start using 'fs' readFile method. ( code given in the repo )  

When you are doing this, kindly do one thing, go and check your "poor CPU" memory used for this process. Now you did not block the event loop! of node and everything must have turned out to be fine. But Nope!

For this you must undertand , that readFile method loads the entire file into memory before performing actions on it , and the large the size of the file , the more the CPU usage. Gotcha!

On the other hand if we read the file as the chunks of data at a time, i.e in streams, we might be using less memory and our task will be done, Right ?
Yup! Streams are awesome and make things really fast in this case.

Now use the fs.createReadStream method to read the file ( code given in the repo ), and pipe the streams of data to the output.
Pipe in not a big deal, it is simply used to read the data from the readable stream and write data to a writable stream or something like that.

*** Do checkout event-stream *** Awesome module to handle pipe functions for streams.

So, now if you will check your memory usage, it will be far far less than the previous. 

So, as i told you streams are awesome and think of how many applications this concept has everywhere in Node.JS like TCP and all cool stuff we can do with it in real life scenarios.

So just chill and keep streaming! 

Bad Pun!

Now some you might be thinking of how to create a large file :P. I have added all the code in the repo , so go and have a look and do not forget to check the memory usage for each case. 
