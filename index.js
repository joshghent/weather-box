require("dotenv").config();
const request = require("request-promise");
const Octokit = require("@octokit/rest");
const moment = require('moment');
const changeCase = require('change-case')

const {
  GIST_ID: gistId,
  GH_TOKEN: githubToken,
  OPENWEATHERMAP_API_KEY: openweathermap_key,
  LOCATION: location,
} = process.env;

const octokit = new Octokit({ auth: `token ${githubToken}` });

async function main() {
  const stats = await request({
    uri: `https://www.rescuetime.com/anapi/daily_summary_feed?key=${rescueTimeKey}`,
    json: true
  })
  await updateGist(stats[0]);
}

async function updateGist(stats) {
  let gist;
  try {
    gist = await octokit.gists.get({ gist_id: gistId });
  } catch (error) {
    console.error(`Unable to get gist\n${error}`);
  }

  const lines = [];
  const { productivity_pulse, date, total_duration_formatted } = stats;
  const statsToRender = ["all_productive", "all_distracting", "neutral"];

  lines.push([`☀️ Weather for ${moment(date).format('MMMM Do YYYY')}`])



  try {
    // Get original filename to update that same file
    const filename = Object.keys(gist.data.files)[0];
    await octokit.gists.update({
      gist_id: gistId,
      files: {
        [filename]: {
          filename: `☀️ Weather for ${location} - ${date}`,
          content: lines.join("\n")
        }
      }
    });
  } catch (error) {
    console.error(`Unable to update gist\n${error}`);
  }
}

(async () => {
  await main();
})();
