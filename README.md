# Seattle Gun Violence Data Tracker

A [Code Fellows](https://www.codefellows.org/) project by [Heidi Laursen](https://github.com/pnwlady/SGVDT) [Maria Romero](https://github.com/MiaRomero/SGVDT) [Kristopher Skelton](https://github.com/KMSkelton/SGVDT) [Shelly Yusuf](https://github.com/CWShelly/SGVDT)

### Purpose
This site collects information pertaining to gun violence in Seattle. The site's main feature, incident data, displays by geolocation; surrounded by recent tweets and news pertaining to gun related events in Seattle.

### Methods
Our service has automated data gathering. Our site queries  data.seattle.gov API to seed our database with incidents. Every 24hours the data tracker sends a request to the data.seattle.gov database, requests data then adds the new incidents to our database.

The news feed populates through the IBM Watson API, scrubbing news from the internet and recent tweets from the Twitter API widget.

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
