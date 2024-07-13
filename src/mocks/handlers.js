import { rest } from "msw";

const baseURL = "https://learnapi-91da03df4b64.herokuapp.com/"


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res( 
        ctx.json(
          {
            "pk":9,
            "username":"jjj",
            "email":"graciekan21@gmail.com",
            "first_name":"",
            "last_name":"",
            "profile_id":9,
            "profile_image":"https://res.cloudinary.com/dovgkwayz/image/upload/v1/media/images/default_profile_usxtbx.jpg"
          }
        )
    )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));

    }),
];  