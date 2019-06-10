# Solid CLI
A utility to facilitate command-line interaction with Solid servers.

⚠️ **Do _not_ depend on this library yet.**
It currently is a hard-coded integration with node-solid-server,
meant for experimentation.
It is not guaranteed to work, and certainly not with arbitrary Solid servers.

We are currently lacking server-side implementations
of the necessary parts of OIDC for non-browser apps.
Solid CLI uses a hack to still enable this,
but it is _not_ a recommended way of working.

In the future, Solid servers and Solid CLI
should use a standardized protocol instead.

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
