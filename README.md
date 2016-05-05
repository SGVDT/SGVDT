# Seattle Gun Violence Data Tracker
### Purpose
This tool is designed to allow for granular searching of gun violence data from the data.seattle.gov database.

### Methods
Every 24hours the data tracker sends a request to the data.seattle.gov database, requests all data from the preceding month and filters out any existing incidents.

In its nascent form, users can create the simplest of accounts with a username, email address and password. Future versions will allow users to search the database by specifying their ZIP code (or Lat/Lon coordinates) and radius for data gathering, plus the date range in which they are interested.

### Use
From a command line users can create an account by typing:
```
curl URL.herokuapp/signup username="user name" email=email@email.com password="password of your choice"
```

Once an account is created, users can return to it by typing:
```
curl URL.herokuapp/signin username="user name" password="password of your choice"
```
