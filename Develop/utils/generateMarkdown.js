// If there is no license, return an empty string
function renderLicenseBadge(badge, url) {
  if(badge !== "N/A"){
    return `[![License](https://img.shields.io/badge/License-${badge}-blue.svg)](http://choosealicense.com/licenses/${url}/)`
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseLink(license, url) {
  if(license !== "N/A"){
    return `\n[${license}](http://choosealicense.com/licenses/${url}/) \n`
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
//for the navigation
function navigationLicenseSection(license) {
  if(license !== "N/A"){
    return "\n- [License](#license)"
  }
  return ""
}


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  navigationLicenseSection
};
