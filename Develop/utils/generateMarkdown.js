// If there is no license, return an empty string
function renderLicenseBadge(badge, url) {
  if(badge !== "N/A"){
    return `[![License](https://img.shields.io/badge/License-${badge}-blue.svg)](http://choosealicense.com/licenses/${url}/)`
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "N/A"){
    return `http://choosealicense.com/licenses/${license}/ \n`
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "N/A"){
    return "\n## License"
  }
  return ""
}


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
