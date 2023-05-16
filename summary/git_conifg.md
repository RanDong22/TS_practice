# Introduction of Git Config

Recommend:  [Pro Git](https://www.progit.cn/)

## Config code as default editor

`git config --global core.editor code`

## Init config

`git config --global user.name "YourName"`

`git config --global user.email YourEmail@example.com`

check config

`git config --list` OR `git config -e`

## Config automatically prune for a specific remote repository

`git config remote.origin.prune true`

## FAQ

### [Solution for 'ssh: connect to host github.com port 22: Connection timed out' error](https://gist.github.com/Tamal/1cc77f88ef3e900aeae65f0e5e504794)
