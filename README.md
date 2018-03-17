# InstaCat
[Approach](#approach) | [User Stories](#user-stories) | [How To Use](#how-to-use) | [Technologies](#technologies) | [Author](#author) |


### Description
<b>InstaCat</b> is a web app that shows you a feed of cats pictures. You can hide the pictures temporarily and then you can click on a picture and write a comment, put a like, see the author's name and avatar and last but not least appreciate the picture on its own page.
This project has been done using React as front-end technology.
This app is not responsive yet, it'll only be perfectly CSS'ED' on a MacBook Pro 15inch.

![](https://image.ibb.co/i1LKCc/Screen_Shot_2018_02_26_at_11_12_13.png)
![](https://preview.ibb.co/kmaxyH/Screen_Shot_2018_02_26_at_11_13_47.png)



## Approach

The first thing I did was to read the task carefully to highlight what was required. I decided then to follow the useful user stories given by the client to develop my app.
Then before to start effectively to code I also spent time thinking about the components' map for my app.

Reading the technologies used by the client I saw they used Jest & Enzyme to test React. I was used to  test with Mocha, Chai and Sinon but I decided to challenge my self learning how to set up a new test environment and use it to test React.

From then onwards, I took steps to develop the app becoming always more confident with the test framework and then following the TDD approach for the new features.

## How to Use

Follow the instruction below to get and explore a copy of the project:

1) Clone the project
```
git clone git@github.com:Vanals/mvf_marco_vanali.git
```
2) Changes into the project directory on ur computer via Terminal
```
cd mvf_marco_vanali
```
3) Install the dependencies
```
Now in your terminal, from the main folder, run 'npm install'
```
4) Run the server
```
From the main folder run 'npm start'
```
5) Visit the web page
```
In your browser go to
http://localhost:3000/
```
6) Enjoy!

----
()To run the tests, run from the main folder
```
$ npm test
```
----

## User Stories

> As an instaGallery user,
> I want to see a feed of photos from other user,
> so that I can see what content users are sharing.

> As an instaGallery user,
> I want to see a photo a another user has taken,
> So that i can appreciate their photography.

> As an instaGallery user,
> I want to see a users alias/name,
> so that I know who added the photo to the gallery.

> As an instaGallery user,
> I want to see a users avatar,
> So that I can familiarise myself with the user.

> As an instaGallery user,
> I want to see a description of the photo,
> so that I learn more about the photos content.

> As an instaGallery user,
> I want to the ability to like the photo,
> so that I can show my appreciation for a photo that I like.

> As an instaGallery user,
> I want to the see how many likes a photo has,
> so that I can see how popular a photo is with other users.

### Bonus Stories

> As an instaGallery user,
> I want to be able to unlike a photo in my feed,
> so that I can undo a like made by accident.

> As an instaGallery user,
> I want to be able to delete a users card from my feed,
> so that I have more control of the content I like.

### Personal user Story

> As an instaGallery user,
> I want to be able to go back to the feed once selected a picture,
> so I don't have to refresh the page every time.


### If I had more time
* Clear the text area after submitting a comment.
* Modify directly the Json file instead of the state containing the information.
* Sexier style

## Technologies

| Technologies  | Use                |
| ------------- | ------------------ |
| Javascript    |                    |
| React         | Front-end library  |
| Jest & Enzyme | Testing            |
| CSS + Html    | Styling            |

## Author

[Marco Vanali](https://github.com/Vanals)
