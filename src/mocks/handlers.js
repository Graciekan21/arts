import { rest } from "msw";

const baseURL = "https://learnapi-91da03df4b64.herokuapp.com/"


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res( 
        ctx.json({
          "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwNTY1NTk3LCJqdGkiOiJlMWNlOGMyYjMxMmI0M2EwOTZhYjJjZDUzM2VlZTFkZSIsInVzZXJfaWQiOjl9.frhOEXGZ-x7SC_-OxN5Ws4E6YWrGsZUS1wEw4tBjY8s","refresh_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyMDY1MTY5NywianRpIjoiNzIwYmQ2YjQzMGMwNDBjNDk0OWMzMGMwNmQzMjg5ZGIiLCJ1c2VyX2lkIjo5fQ.mSWgSdPGOaQB5dOupmTPJXuZxNRfaZ1UX9kt1sBwFUY",
          "user":{
            "pk":9,
            "username":"jjj",
            "email":"graciekan21@gmail.com",
            "first_name":"",
            "last_name":"",
            "profile_id":9,
            "profile_image":"https://res.cloudinary.com/dovgkwayz/image/upload/v1/media/images/default_profile_usxtbx.jpg"
          }
        })

    )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => res(ctx.status(200))),
]  