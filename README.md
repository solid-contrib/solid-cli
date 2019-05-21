# Solid CLI
A utility to facilitate command-line interaction with Solid servers.

**Note :** While this package is still usable, you may want to use 
[solid-auth-cli](https://github.com/jeff-zucker/solid-auth-cli)
instead. It is a thin wrapper around solid-cli that provides additional
ways to provide login credentials, persistent login, and the same API
as solid-auth-client.  For command-line and interactive shell access,
see [solid-shell](https://github.com/jeff-zucker/solid-shell).


## Installation
```
npm install -g @solid/cli
```

## Usage
```
IDP=https://drive.verborgh.org
USERNAME=ruben
PASSWORD=ruben
URL=https://drive.verborgh.org/inbox/

curl "$URL" -H 'Authorization: Bearer '`solid-bearer-token "$IDP" "$USERNAME" "$PASSWORD" "$URL"`
```

## License
©2018–present [Ruben Verborgh](https://ruben.verborgh.org/),
[MIT License](https://github.com/solid/solid-cli/blob/master/LICENSE.md).
