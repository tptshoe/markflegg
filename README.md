[![All Tests](https://github.com/tptshoe/markflegg/actions/workflows/all-tests.yml/badge.svg?branch=main)](https://github.com/tptshoe/markflegg/actions/workflows/all-tests.yml)

# Markflegg

This is an Nx monorepo containing my website. It is also meant to hold any additional projects I might come up with in the future.

## Setup/Dependencies

This should all be inferable by looking at the git history, but for the purpose of being easy to access, and even more importantly for me to remember what I did, I'm outlining here the steps I've taken to build this repo.

- This project generated using [Nx](https://nx.dev). - created as an empty workspace
- Using [Nxtend](https:nxtend.dev), created an ionic application (markflegg-website) to hold my future personal website
- Nxtend installs a quite outdated version of Capacitor in Ionic, so I upgraded both Ionic and Capacitor to their latest versions (as of Sept 2021, Ionic: 5.30.0, Capacitor: 3.2.2, Angular: 11.0.0)
- Following (mostly) tutorials at [Elite Ionic](https://eliteionic.com/), I set the repo up with some project management infrastructure, plus Continuous Integration.
- See `Structured Practice Journal` for history on this project, starting 1 September 2021, PI is `Sharpen the Saw::Ionic Course`

## Operating Commands

### Testing

#### End to End

To run E2E tests:

- `nx e2e markflegg-website-e2e` - This is the base run command.
- - Add --watch flag to run in watch mode
- - Add --headless flag to run headless (no browser window opens up)

#### Unit tests

To run Unit tests:

- `nx test markflegg-website` - Runs everything
- - Add --watch flag to watch
