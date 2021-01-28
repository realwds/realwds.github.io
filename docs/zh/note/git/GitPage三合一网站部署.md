## GitPage三合一网站部署 <Badge text="new" />

> 在 ```github``` 一端提交代码，代码自动提交到 ```github``` ```gitlab``` ```gitee``` 平台。并自动部署到相应的 ```git page``` 上。

#### 1. GitHub Action 自动部署到 GitHub Page

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


#### 2. GitHub Action 自动部署到 Gitee & GitLab

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

#### 3. 添加 .gitlab-ci.yml 实现 gitlab 部署

```yaml
image: node:9.11.1

pages:
 cache:
   paths:
   - node_modules/

 script:
 - npm install
 - npm run build
 artifacts:
   paths:
   - public
 only:
 - master

```