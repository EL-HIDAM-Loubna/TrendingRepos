# 📘TrendingRepos



![github-logo!](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJ5-lQyX5jpptq9E2SjL9AcO31KCFUfpLGYA&usqp=CAU "Github.logo")  ***Trending repositories***📢📢
===============
# 💡Why?

Using Github trending you can find the most starred Github repositories that were created in the last 30 days.
You can see for each repository a lot of details. It’s pretty good for having an idea of the newly created repo. 




## 🏷️Features!

> 📌 list the most starred Github repos that were created in the last 30 days.
> 📌 see for each repo/row the following details :
✔️ Repository name
✔️ Repository description
✔️ Number of stars for the repo.
✔️ Number of issues for the repo.
✔️ Username and avatar of the owner.
> 📌 scroll and new results should appear

## 🏳️ Status

If you want to try this example just clone this repo or check out the live version at 🔗 `https://trendingrepo.netlify.app`
## Credits

>This project was Using the [Github API](https://developer.github.com/v3/search/#search-repositories).
>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29. 

## 💎 How to get the data from Github API 

To get the most starred Github repos created in the last 30 days (relative to 2020-10-05), you'll need to call the following endpoint :
> `https://api.github.com/search/repositories?q=created:>2020-10-05&sort=stars&order=desc`
---
⚠️⚠️⚠️For managing date and time we will use moment.js Librairie. In our case, we should get the data relative to 30 days ago from the current date . 

> formatDate(`moment().subtract(30,'day').calendar()`,"yyyy-MM-dd",'en')

So you'll need to call the following endpoint:
> `'https://api.github.com/search/repositories?q=created:>'+formatDate(moment().subtract(30,'day').calendar(),"yyyy-MM-dd",'en')+'&sort=stars&order=desc'`
---
The JSON data from Github will be paginated (you'll receive around 30 repos per JSON page).
To get the 2nd page, you add `&page=2` to the end of your API request :
>`https://api.github.com/search/repositories?q=created:>2020-10-05&sort=stars&order=desc&page=2`

To get the 3rd page, you add `&page=3` ... etc
### Installation


> git clone https://github.com/EL-HIDAM-Loubna/TrendingRepos.git

Install the dependencies and start the server.

```sh
$ cd TrendingRepos
$ npm install 
$ ng serve -o
```

> Navigate to `http://localhost:4200/`. 
>The app will automatically reload if you change any of the source files.




## License


MIT


**EL HIDAM Loubna, Yeah!**

