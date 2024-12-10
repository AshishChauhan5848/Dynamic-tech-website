const express = require("express");
const hbs = require("hbs");
const app = express();
const bodyParser =require("body-parser")
const mongoose = require("mongoose");
const routes = require("./routes/main");
const Detail = require("./models/Details");
const Slider = require("./models/slider");
const Service = require("./models/Service");
const Banner = require("./models/Banner");
const Gallpic = require("./models/Gallpic");


// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Serving Static files
app.use("/static", express.static("public"));


// routes
app.use("", routes);


//(Template engine)

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//  db connection

mongoose.connect("mongodb://0.0.0.0:27017/Freelance_project")
  .then(() => {
    console.log("connected succesfully");
    Gallpic.create({
      Url:"/static/images/s1.jpg"
    })

    Banner.create({ 
      imgUrl1:"/static/images/undraw_developer_activity_re_39tg.svg",
      imgUrl2:"/static/images/undraw_engineering_team_a7n2.svg",

      Heading1:"We work for people , not for money",

      Paragraph1:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla temporibus nam suscipit nesciunt quaerat voluptate molestiae impedit asperiores vitae ipsam magni commodi pariatur ad repellat necessitatibus quam natus sit illum quasi blanditiis eos, expedita doloremque delectus eum. Magni, eius?",

      Heading2:"We work for people , not for money",

      Paragraph2:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla temporibus nam suscipit nesciunt quaerat voluptate molestiae impedit asperiores vitae ipsam magni commodi pariatur ad repellat necessitatibus quam natus sit illum quasi blanditiis eos, expedita doloremque delectus eum. Magni, eius?"
    })
    
      Service.create([
        {
          icon:"fa-brands fa-discord",
          title:"Provide Best Courses",
          description:"We provide course that help our student in learningand pacement",
          linkText:"check",
          link:"https://www.lamborghini.com"
        }
      ])

                            //  images carousal(part-2)

    Slider.create([ 
      {
        title: 'Learn java very smoothly',
        subtitle: 'java is the popular programming language',
        imageUrl: "/static/images/s1.png",
      },
      {
        title: 'Learn python very smoothly',
        subtitle: 'python is the popular programming language',
        imageUrl: "/static/images/s2.png",
      },
      {
        title: 'Learn express very smoothly',
        subtitle: 'express is the popular programming language', 
        imageUrl: "/static/images/s3.png",
      }
    ]);

                  // NAVBAR(Part-1)

        Detail.create({
          brandName: "Info Tech Solution",
          brandIconUrl:
            "https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
          links: [
            {
              label: "Home",
              url: "/",
            },
            {
              label: "Services",
              url: "/services",
            },
            {
              label: "Gallery",
              url: "/gallery",
            },
            {
              label: "About",
              url: "/About",
            },
            {
              label: "Contact Us",
              url: "/contact-us",
            },
          ],
        });
  })
  .catch((err) => {
    console.log(err);
  });
// Server
app.listen(process.env.PORT | 5557, () => {
  console.log("Server started");
});
