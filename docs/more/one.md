<h1 align="center">Alejandro's Website</h1>

<p align="center">
<a href="https://circleci.com/gh/realwds/realwds.github.io/tree/master"><img src="https://img.shields.io/circleci/project/github/realwds/realwds.github.io/master.svg?sanitize=true" alt="Build Status"></a> <a href="https://github.com/realwds/realwds.github.io/actions"><img src="https://github.com/realwds/realwds.github.io/workflows/TEST CI/badge.svg?sanitize=true" alt="TEST CI Status"></a> <a href="https://github.com/realwds/realwds.github.io/actions"><img src="https://github.com/realwds/realwds.github.io/workflows/DEPLOY CI/badge.svg?sanitize=true" alt="DEPLOY CI Status"></a> <a href="https://github.com/realwds/realwds.github.io/actions"><img src="https://github.com/realwds/realwds.github.io/workflows/MIRROR CI/badge.svg?sanitize=true" alt="MIRROR CI Status"></a>
</p>

<img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='哈哈哈哈'>

## GitHub Action 自动部署到 GitHub Page

``` yml

name: DEPLOY CI
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: docs/.vuepress/dist
        BUILD_SCRIPT: npm install && npm run build

```


## GitHub Action 自动部署到 Gitee & GitLab

``` yml

name: MIRROR CI
on:
  push:
    branches:
      - master
jobs:
  mirror_to_gitee:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitee'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitee.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITEE_KEY }}

  mirror_to_gitlab:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitlab'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitlab.com:tsund/test.git
          ssh_private_key:
            ${{ secrets.GITLAB_KEY }}

```

Copyright (c) 2020-present, realwds
