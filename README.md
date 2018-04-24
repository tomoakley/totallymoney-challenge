This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I completed this project in about 3 hours. Sorry that the design/CSS is awful, I decided to spend significantly more time on getting the functionality to work properly (ish) than making it look pretty. Rest assured, I can do CSS and have been writing good CSS since about 2011! However, I am increasingly becoming a fan of CSS-in-JS solutions (especially styled-components) for their ease of use and adaptability, and that is what I have used in this project. I also like Sass, but am no longer sure it makes sense to use in a SPA.

I used React.js for this challenge, partly because it's what I feel most comfortable writing, and also because it's listed on your job spec! I think React is the right choice for this, as it's very easy to quickly bootstrap an application and get something up within an hour or two. This is also why I used create-react-app - there's no Webpack confusion to set up or anything, and it provides the bare-minimum to get started.

If I'd had more time, or this had been a larger project, I would have definitely implemented some form of state management (I'm most familiar with Redux, so would have probably used that), however for this it would have been overkill. Also, I was hoping I'd have time to implement a secondary page to list the contents of the Github Issue, but this would have required routing and things, so I decided not to do that.

Overall, I spent about 3 hours on this. It's a little longer than you recommended but I wanted to make it 'good' (I'm far from happy with it, though) and at the 2 hour point I wasn't quite ready to show it off.

I haven't managed to make it reusable to Pull Requests, however it wouldn't be that difficult to change the URL path in the github.js file, and some of the filters in the form.

I have also used dotenv as I didn't feel comfortable sending the Github user and token across the internet - I have added a .env.sample file to the repo so add your own details to a .env file and you should be able to make the requests!

I hope you like what I've done, and that this brief explanation is long enough and includes enough detail.
