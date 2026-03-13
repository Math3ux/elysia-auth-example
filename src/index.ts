
import {Elysia} from 'elysia'
import {auth} from './auth'

const app = new Elysia()
.mount("/auth", auth.handler)
.get("/", () => "Hello World")

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
