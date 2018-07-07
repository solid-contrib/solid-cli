# Solid CLI
A utility to facilitate command-line interaction with Solid servers.

## Installation
```
git clone git@github.com:solid/solid-cli.git
cd solid-cli
npm install
```

## Usage
```
IDP=https://drive.verborgh.org
USERNAME=ruben
PASSWORD=ruben
URL=https://drive.verborgh.org/inbox/

curl "$URL" -H 'Authorization: Bearer '`bin/solid-bearer-token "$IDP" "$USERNAME" "$PASSWORD" "$URL"`
```
