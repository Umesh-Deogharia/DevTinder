#DevTinder

##AuthRouter
-Post /signup
-Post /login
-Post /logout

##profileRouter
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password

##connectionRequest
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId
-POST /request/review/accepted/:requestId
-POST /request/review/rejected/:requestId

##userRouter
- GET /user/connection
- GET /user/request   
- GET /user/feed