# Lightweight VOCALOID Association Website

LXFE is a lightweight website builder. Developed with [Vue.js](https://vuejs.org/) & [Nuxt.js](https://nuxtjs.org/), this project can generate a totally static website and render your [Markdown](https://en.wikipedia.org/wiki/Markdown) file in front-end dynamically.

On the UI side, this LXFE introduces [FontAwsome](https://fontawesome.com/) and [awsl.css](https://github.com/baobao1270/awsl.css). Awsl.css is a lightweight CSS framework written by myself.

The project is initially and specially designed for [VOCALOID](https://www.vocaloid.com/en/) music producer association/bands. Especially, I mentioned the name of [Luo Tianyi](https://en.wikipedia.org/wiki/Luo_Tianyi), who is my favorite VOCALOID charactor.

Please note that this project doesn't follow [SEMVER](https://semver.org/) - it is rolling updated.

Though I am the project leader and wrote most parts of code, this project belongs to multiple VOCALOID associations. All these associations agree me to make this open source under the GPLv3.0 (only) license.

I have to state that some trademarks are used in this project. They belongs to the trademark owners. See the license part below for detail.

## Deployment

Most of the music producers don't know code or IT. I provide free SaaS service for Chinese VOCALOID creators, with part-time technical support. You can contact me with email: [lty@luotianyi.dev](mailto:lty@luotianyi.dev).

Also, this project is continuously updated with GitHub Actions CI/CD to our SaaS server based on user's feedback. If you choose to self-host, you may be unable to get the latest updates. This project is rolling updated, so if some API changes, it will be a miserable process to migrate.

If you really want to deploy this project by yourself, please follow the steps below:

1. Install [Node.js](https://nodejs.org/en/download/) 16.x.
2. Clone this project and checkout to `release` branch
   ```shell
   git clone https://github.com/luotianyi-dev/lxfe.git
   ```
3. Install dependencies
   ```shell
   cd lxfe
   npm install
   ```
4. Build the project
   ```shell
   npm run generate
   ```
5. Deploy the `dist` directory to your server

## Development
The initial development steps are same as deployment. Only the last step differs. Run `npm run dev` instead to start a development server.

By default, the mock API is connected to our staging server.

## Contributing

I will be happy to accept pull requests from anyone. However, please follow some guidelines below:
 1. You can use both English and Chinese (both Simplified and Traditional). However, the UI is writen in Simplified Chinese.
 2. Please splash your commit to 1 pull request per commit.
 3. Always create pull requests to `staging` branch.

For internal contributors, here is some rules to obey:
 1. Branches. Checkout `develop/something` branch from `staging` branch and start your develpment.
 2. Commits. Try your best to only fix one issue or implement one feature in one commit.
 3. Push. Remeber push your `develop/something` branch to server.
 4. Merge. When you are done, merge your branch to `staging` branch. You have to splash your commit to one create a pull request.
 5. Workflow. Only `staging` can be merged to `production` branch.

## Copyright
This project is licensed under the [GPLv3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) (only) license.

The SPDX identifier is `GPL-3.0-only`.

This project is jointly owned by: Joseph Chris (Tianyi Network), Dongchenyue, and all contributors of this project.

There are some people has special contribution to this project:
 - Chen Luo
 - Xiao Qian

All contributer and SaaS user should agree the GPLv3.0 license.

There are some trademarks used in this project. They belongs to the trademark owners.
 - Luo Tianyi is registered trademark of Shanghai Henian Information Technology Co,. Ltd.
 - VOCALOID is registered trademark of Yamaha Corporation.
 - BiliBili is registered trademark of Bilibili Inc.
 - Twitter is registered trademark of Twitter Inc.
 - YouTube is registered trademark of YouTube LLC.

VSQX.TOP isn't a trademark but please respect it's name.

Special thanks to all VOCALOID characters.
