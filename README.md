Deja Brew Documentation

1.  Go to https://github.com/cfg-deja-brew
2. Clone both the frontend repository and the backend repository.
3. Open up the backend in PyCharm, and then run these commands in the terminal:
	pip install flask
	pip install mysql-connector-python
	pip install twilio
	pip install flask-cors
4. Open up the SQL Scripts folder in the backend folder.
5. Go to MySQL Workbench, and first run the Schema.sql and then once that has done, run Sample_data.sql - this is the database sorted.
6. In the frontend, run these two commands in the terminal:
	npm install
	npm install @lyket/react
7. In the backend, make a new file in the main “backend” folder and name it “config.py”.  In here, add the Twilio account SID and the auth token below:

twilio_account_sid = 'ACb7f4ee561c5fda8544277315de007d1c'

twilio_auth_token = '0394f694d509a57539ceb680d3853a24'

8. After saving everything, right click and run app.py
9. Once this is running, go to the frontend and in the terminal, type: npm start
10. There you go!
