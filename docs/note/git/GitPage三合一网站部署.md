## GitPage三合一网站部署

### GitHub Action 自动部署到 GitHub Page

``` yaml
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


### GitHub Action 自动部署到 Gitee & GitLab

``` yaml
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
