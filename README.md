Notes to Self:
When React.App browser fails - try npm start in Terminal - solves the issue almost all the time
if running into a Chrome debugging issue with Axios - try installing Axios again in Terminal, but with --global. This help with a chromium bugg - "crbug/1173575"

HOLY F\*\*\* - this one error took me 3 hours to figure out. Turns out when I made the root password for MySQL, it was throwing me an error when I would try to post/create my front end data to the backend / database. By resetting the root password in the SQL CMD Line Shell "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';" , I was able to reset the password to password, re-ran my node server and Booya - My front end values are now being stored in my database. I'm going to sleep now.
