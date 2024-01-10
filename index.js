const jsonserver=require("json-server")

const exserver=jsonserver.create()

const router=jsonserver.router('db.json')

const middleware=jsonserver.defaults()


exserver.use(middleware)
exserver.use(router)

const port =4000 || process.env.PORT

exserver.listen(port,()=>{
    console.log("port:",port);
})