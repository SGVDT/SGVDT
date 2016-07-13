# Seattle Gun Violence Data Tracker

A [Code Fellows](https://www.codefellows.org/) project by [Heidi Laursen](https://github.com/pnwlady/SGVDT) [Maria Romero](https://github.com/MiaRomero/SGVDT) [Kristopher Skelton](https://github.com/KMSkelton/SGVDT) [Shelly Yusuf](https://github.com/CWShelly/SGVDT)

### Purpose
This tool is designed to allow for granular searching of gun violence data from the data.seattle.gov database.

### Methods
Our service has automated data gathering. Upon deployment to Heroku our service queried the data.seattle.gov API to seed our database with incidents. Every 24hours the data tracker sends a request to the data.seattle.gov database, requests data then adds the new incidents to our database.

In its nascent form, users can create the simplest of accounts with a username, email address and password. Future versions will allow users to search the database by specifying their ZIP code (or Lat/Lon coordinates) and radius for data gathering, plus the date range in which they are interested.


### Use
Our site is live on `https://sgvdtapp.herokuapp.com` with routes for `/Map` and `/Data`.

On the main page, our map displays the google maps API rendering of our data pulled from Socrata API and stored in our Heroku database.

The data page allows filtering and searching by:
  * offense type: robbery, assault, homicide.
  * summary (a summarized offense description. This must be in all caps; see example below.)
  * year
  * year and month in this format: `2016-06-11`
  * year, month, and day
  * zone (sorts by SPD zone)

### Acknowledgements and Modules Used
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * [body-parser](https://www.npmjs.com/package/body-parser)
  * [express](https://www.npmjs.com/package/express)
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  * [mongoose](https://www.npmjs.com/package/mongoose)
  * [superagent](https://www.npmjs.com/package/superagent)

### Issues? Bug Reports?
[Report issues at Github](https://github.com/SGVDT/SGVDT/issues)

### Licensing
MIT licensed. See our [LICENSE](https://github.com/SGVDT/SGVDT/blob/master/LICENSE) document for more information.
