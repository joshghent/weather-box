<p align="center">
  <img width="400" src="./images/screenshot.png">
  <h3 align="center">weather-box</h3>
  <p align="center">Update a pinned gist to contain the weather, wherever you are!</p>
</p>

---

> 📌✨ For more pinned-gist projects like this one, check out: https://github.com/matchai/awesome-pinned-gists

## Setup

### Prep work

1. Create a new public GitHub Gist (https://gist.github.com/)
2. Create a token with the `gist` scope and copy it. (https://github.com/settings/tokens/new)
3. Get your openweathermap api key from [here](https://home.openweathermap.org/api_keys)

### Project setup

1. Fork this repo
2. Create a new blank gist and grab the end part of the URL

   - **GIST_ID:** The ID portion from your gist url: `https://gist.github.com/joshghent/`**`2d5f82ddf12683b47fc27f987a561d03`**.

3. Go to the repo **Settings > Secrets**
4. Add the following environment variables:
   - **GH_TOKEN:** The GitHub token generated above.
   - **OPENWEATHERMAP_API_KEY:** The API key for your OpenWeatherMap account.
   - **GIST_ID:** The Gist ID that we got in Step 2
5. Copy the contents of `.github/workflows/schedule.yml`, then delete the file and commit it. Then recreate the file and paste the contents back in (this is due to forked repos not running actions)
